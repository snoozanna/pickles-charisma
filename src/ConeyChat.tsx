import {
  Playthrough,
  createConversation,
  createPlaythroughToken,
} from "@charisma-ai/react";
import { useEffect, useState } from "react";
import { PlayParameters } from "./PlayParameters";
import ConversationView from "./ConversationView";
import "./styles/ConeyChat.css";

type MyChatProps = {
  conversationParameters: PlayParameters;
  apiKey: string | undefined;
};

const MyChat = ({ conversationParameters, apiKey }: MyChatProps) => {
  const { storyId, version, startGraphReferenceId, charismaUrl } =
    conversationParameters;

  const [playthroughToken, setPlaythroughToken] = useState<string>();
  const [conversationUuid, setConversationUuid] = useState<string>();

  useEffect(() => {
    async function run() {
      const tokenResult = await createPlaythroughToken({
        storyId,
        version,
        apiKey,
      });
      const conversationResult = await createConversation(tokenResult.token);
      setPlaythroughToken(tokenResult.token);
      setConversationUuid(conversationResult.conversationUuid);
    }
    run();
  }, [storyId, version, apiKey]);

  return (
    <Playthrough
      playthroughToken={playthroughToken}
      autoconnect
      charismaUrl={charismaUrl}
    >
      <ConversationView
        conversationUuid={conversationUuid}
        startGraphReferenceId={startGraphReferenceId}
        // startGraphReferenceId={undefined}
      />
    </Playthrough>
  );
};

export default MyChat;
