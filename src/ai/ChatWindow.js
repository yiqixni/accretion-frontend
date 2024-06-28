import React, { useState } from 'react';
import { OpenAI } from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, 
});

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;

    const userMessage = { sender: 'user', text: inputText };
    setMessages([...messages, userMessage]);
    setInputText('');

    try {
      const botMessage = await sendMessageToOpenAI(inputText);
      setMessages(prevMessages => [...prevMessages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = {
        sender: 'bot',
        text: "Sorry, something went wrong. Please try again."
      };
      setMessages(prevMessages => [...prevMessages, userMessage, errorMessage]);
    }
  };

  const sendMessageToOpenAI = async (message, retries = 2) => {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "user", content: message }, 
            { role: "system", content: "You are a real estate title abstractor and examiner." }, // specify the role of the chatbot
        ],
      });

      return {
        sender: 'bot',
        text: response.choices[0].message.content
      };
    } catch (error) {
      if (error instanceof openai.errors.RateLimitError && retries > 0) {
        // Implementing exponential backoff
        const delay = Math.pow(2, 5 - retries) * 1000;
        console.log(`Retrying in ${delay} ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        return sendMessageToOpenAI(message, retries - 1);
      } else {
        throw error;
      }
    }
  };

  return (
    <div className="chat-container">
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
