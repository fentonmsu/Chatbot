import UserProfileImage from "../assets/img/user.png";
import RobotProfileImage from "../assets/img/robot.png";
import './ChatMessage.css'
export function ChatMessage({ message, sender }) {
  // saves them in a variable called message and sender
  // const message = props.message;
  // const sender = props.sender;
  // shortcut for props
  // const { message, sender } = props
  // guard operate const result = value1 && value2
  // if the value of the
  // als de waarde aan linkerkant waar is, dan zal het resultaat de waarde aan de recterkant zijn.
  // Dit is een soort snelkoppeling voar de if statement en hiermee kunnen rechtstreeks in onze JSX invoegen
  /*
        if (sender === "robot"){
          return (
          <div>
            <img src="img/robot.png" width="50"></img>
              {message}
          </div>
          )a
      state is data that is connected to the HTML, when we update this data, it will update the HTML
      to convert into state, we use use state gives us two values the current data, and a function to update the data
      Use the updater function, it will update the HTML
      Array destructuring get the variable out of the array and save it as a variable called chat message, use it to get the second value out of the array and save it in a variable in arrya destructing since we are taking stuff out of the array deconstructing it adn the order matters, we don't save it as a variable in the middle
      */
  // ternary operation works like an if statement insert an if-else statement directly in the JSX
  // auto scrolling hooks, lets us insert react features into our component react.usesState is an hook
  return (
    <div className="app-container">
      {sender === "user" ? "chat-message-user" : "chat-message-robot"}
      {sender === "robot" && (
        <img className="chat-message-profile" src={RobotProfileImage}></img>
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img className="chat-message-profile" src={UserProfileImage}></img>
      )}
    </div>
  );
}
// put hooks at top of a component

