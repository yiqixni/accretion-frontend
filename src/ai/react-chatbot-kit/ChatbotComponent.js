import React from 'react';
import Chatbot from 'react-chatbot-kit';
import './ChatbotStyle.css';
// import 'react-chatbot-kit/build/main.css';

import config from './chatbotConfig';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

const ChatbotComponent = () => {
  return (
    <div style={{height:"100%"}}>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}          
        />
    </div>
  );
}

export default ChatbotComponent;