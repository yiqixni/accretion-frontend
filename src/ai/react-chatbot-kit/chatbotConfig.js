import { createChatBotMessage } from 'react-chatbot-kit';
import '../Ai.css';

const botName = "Accretion Intelligence";

const config = {
  botName: botName,
  initialMessages: [createChatBotMessage(`Hello! I am ${botName}, your real estate title abstractor and examiner. How can I assist you today?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "rgb(0,0,0,0.05)",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;