import { createChatBotMessage } from 'react-chatbot-kit';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY, 
  dangerouslyAllowBrowser: true, 
});

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async handleUserMessage(message) {
    const botMessage = await this.sendMessageToOpenAI(message);
    this.addBotMessageToState(botMessage);
  }

  async sendMessageToOpenAI(message) {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a real estate title abstractor and examiner." },
          { role: "user", content: message }
        ],
      });

      return response.choices[0].message.content;
    } catch (error) {
      console.error("Error sending message:", error);
      return "Sorry, something went wrong. Please try again.";
    }
  }

  addBotMessageToState(message) {
    const botMessage = this.createChatBotMessage(message);
    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, botMessage]
    }));
  }
}

export default ActionProvider;