import { useRef, useEffect } from "react";
import { ChatMessage } from './ChatMessage';
import './ChatMessage.css'

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);
  // lets us automatically save an html from a component, give it to react and save an html element
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    // run this function every time our data changes, dependency array lets us control when use effect runs, runs after the component is created
    // contains an html element
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        console.log(chatMessage)
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}
// export one thing from a file
export default ChatMessages;