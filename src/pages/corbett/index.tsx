import { useState } from "react";
import { LOCAL_STORAGE_KEY, PlayParameters } from "../../PlayParameters";
import ConeyChat from "../../ConeyChat";
import "../../styles/generics.css";
import "../../styles/App.css";
import Header from "../../Header";

// const apiKey = process.env.REACT_APP_CHARISMA_API_KEY;
const apiKey = "6bb93106-673e-47e0-9eed-57f7551e7c44";

const emptyParameters: PlayParameters = {
  storyId: 29564,
  version: 1,
  startGraphReferenceId: "adbc4d96-a0b2-4bd8-885d-c056673921e6",
  charismaUrl: "https://play.charisma.ai",
};

const emptyParametersString = JSON.stringify(emptyParameters);

function Betchley() {
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [conversationParameters, setConversationParameters] = useState(
    JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) || emptyParametersString,
    ) as PlayParameters,
  );
  // console.log("conversationParameters", conversationParameters);

  const sufficientParameters = conversationParameters.storyId;
  // console.log("sufficientParameters", sufficientParameters);
  // console.log("confirmed", confirmed);
  // console.log("apiKey", apiKey);

  return (
    <div className="App">
      <div className="appContainer">
        {!apiKey ? "Please set your API key" : null}
        {sufficientParameters && !confirmed && apiKey ? (
          <>
            <Header connectionStatus="" />
            <span className="button-wrapper">
              <button onClick={() => setConfirmed(true)}>Confirm</button>
            </span>
            <footer />
          </>
        ) : null}

        {confirmed ? (
          <ConeyChat
            conversationParameters={conversationParameters}
            apiKey={apiKey}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Betchley;
