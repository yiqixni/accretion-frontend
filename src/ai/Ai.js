import ChatWindow from "./ChatWindow";
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
                    <ChatWindow />
                </div>
            </div>
        </div>
    )
}