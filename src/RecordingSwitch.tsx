import {
  SpeechRecognitionStartEvent,
  usePlaythroughContext,
} from "@charisma-ai/react";
import { useState } from "react";
import mic1 from "./assets/img/mic1.png";
import mic2 from "./assets/img/mic2.png";
import RecordingIndicator from "./RecordingIndicator";

type RecordingSwitchProps = {
  service: string; // Ensure that service is a string
};

const speechRecognitionStartEvent: SpeechRecognitionStartEvent = {
  service: "unified:deepgram",
  languageCode: "en-US",
};

const RecordingSwitch = ({ service }: RecordingSwitchProps) => {
  const [recording, setRecording] = useState(false);
  const playthroughContext = usePlaythroughContext();
  const playthrough = playthroughContext?.playthrough;
  console.log(recording, "recording");
  const recordingSwitch = () => {
    if (!playthrough) {
      return;
    }
    if (recording) {
      playthrough.stopSpeechRecognition({});
      setRecording(false);
    } else {
      playthrough.startSpeechRecognition(speechRecognitionStartEvent);
      setRecording(true);
    }
  };
  return (
    <div className="micBtnWrapper">
      <button onClick={recordingSwitch} disabled={!playthrough}>
        {recording ? <img src={mic1} /> : <img src={mic2} />}
      </button>
      <RecordingIndicator service={service} />
    </div>
  );
};

export default RecordingSwitch;
