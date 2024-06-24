import ChatbotComponent from "./react-chatbot-kit/ChatbotComponent";
import "./Ai.css";


export default function Ai () {
    return (
        <div className="ai">
            <div className="row">
                <div id="title">
                    Artificial Intelligence  
                </div>                
            </div>
            <div className="row">
                <div id="chat-window">
                    <ChatbotComponent />
                </div>
            </div>
        </div>
    )
}