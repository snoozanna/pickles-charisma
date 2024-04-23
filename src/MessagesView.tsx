import { StoredMessage } from "@charisma-ai/react";
import "./styles/MessagesView.css";

type MessageViewProps = {
  messages: StoredMessage[];
};

const MessagesView = ({ messages }: MessageViewProps) => {
  return (
    <>
      <div className="messageContainer">
        {messages.map((message, index) => {
          if (message.type === "player") {
            const player = "You:";
            const text = `${message.message.text}`;
        
            return (
              <>
              <span>{player}</span>
              <div key={index} className="messageWrapper messagePlayer">
                <p>{text}</p>
              </div>
            </>);
          }
          if (message.type === "character") {
            const text = message.message.text;
            const character = `${message.message.character?.name || "???"}`;
            return (
              <>
              <span>{character}</span>
              <div key={index} className="messageWrapper messageChar">
                <p>{text}</p>
              </div>
            </>
            );
          }
          return (
            <div>
              A message was sent that did not have type "player" or "character".
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MessagesView;
