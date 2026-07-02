import "./Chat.css";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

function Chat() {

    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([
        {
            id:1,
            sender:"Mayuri",
            text:"Hello everyone 👋",
            time:"10:15 AM"
        },
        {
            id:2,
            sender:"Rahul",
            text:"Welcome to MeetSphere!",
            time:"10:16 AM"
        }
    ]);

    const sendMessage = () => {

        if(message.trim()==="") return;

        const newMessage = {
            id:Date.now(),
            sender:"You",
            text:message,
            time:new Date().toLocaleTimeString([],{
                hour:"2-digit",
                minute:"2-digit"
            })
        };

        setMessages([...messages,newMessage]);

        setMessage("");
    };

    return(

        <div className="chat-container">

            <div className="chat-header">

                <h2>Meeting Chat</h2>

                <span>{messages.length} Messages</span>

            </div>

            <div className="chat-body">

                {

                    messages.map((msg)=>(

                        <div
                            className={
                                msg.sender==="You"
                                ?
                                "message own"
                                :
                                "message"
                            }

                            key={msg.id}
                        >

                            <h4>{msg.sender}</h4>

                            <p>{msg.text}</p>

                            <small>{msg.time}</small>

                        </div>

                    ))

                }

            </div>

            <div className="chat-footer">

                <input

                    type="text"

                    placeholder="Type your message..."

                    value={message}

                    onChange={(e)=>setMessage(e.target.value)}

                    onKeyDown={(e)=>{
                        if(e.key==="Enter"){
                            sendMessage();
                        }
                    }}

                />

                <button onClick={sendMessage}>

                    <FaPaperPlane/>

                </button>

            </div>

        </div>

    );

}

export default Chat;