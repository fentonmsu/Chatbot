import { useState} from 'react'
import './App.css'
import {ChatInput} from './components/ChatInput.jsx'
import ChatMessages from './components/ChatMessages.jsx'

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "hello chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello! How can I help you",
      sender: "robot",
      id: "id2",
    },
    {
      message: "Can you get me todays date",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today is July 7th",
      sender: "robot",
      id: crypto.randomUUID(),
    },
  ]);
  // const [chatMessages, setChatMessage] = array;
  // const chatMessages = array[0];
  //const setChatMessages = array[1];
  // share the two components

  return (
    <div className="app-main-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        // get the function from the state
        // save anytype of value in the prop and access the two props
      />
    </div>
  );
} 
  
export default App
