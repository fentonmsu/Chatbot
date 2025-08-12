import { useState } from "react";
import { Chatbot } from "supersimpledev";
import './ChatInput.css'
// want to use the variable outside the file need to export it
export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState();
  // get current data for the current text get the second value out of the array
  function saveInputText(event) {
    setInputText(event.target.value);
    // every time we change the text it will change the function
    // use state to save data that changes over time
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      }
      // chat messages are not updated to the new matrix
    
    ];
    // use the updater function for the input text not update the html
    // external library creates a variable
    console.log("hello")
    setChatMessages(newChatMessages);
    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      // add the chatbox response
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
    setInputText("");
    // if we set it to empty and make the text box empty
  }
  return (
    
      <div className="chat-input-container">
        <input
          className="chat-input"
          placeholder="Send a message to Chatbot"
          value={inputText || ""}
          onChange={saveInputText}
        />
        {inputText}
        <button
          onClick={sendMessage}
          // click the button run the function
          className="send-button"
        >
          Send
        </button>
      </div>
  );
}
