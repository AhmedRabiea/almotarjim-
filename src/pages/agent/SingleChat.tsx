import Chat from "@/containers/Chat";
import usePusher from "@/hooks/usePusher";
import ChatType from "@/interfaces/chat";
import ChatService from "@/services/chat.service";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleChat = () => {
  const pusher = usePusher();
  const { id = "" } = useParams();
  const [chat, setChat] = useState<Partial<ChatType>>({});

  const getChat = useCallback(async () => {
    const res = await ChatService.getSingleChat(id);
    setChat(res);
  }, [id]);

  const handleSend = useCallback(
    async (message: { type: string; content: any }) => {
      await ChatService.sendMessage(message, id);
    },
    [id]
  );

  useEffect(() => {
    const channel = pusher.subscribe(`chat.${id}`);
    channel.bind("message-sent", (data: any) => {
      setChat((prev: any) => ({
        ...prev,
        messages: [...prev.messages, data],
      }));
    });

    return () => {
      channel.unbind("message-sent");
    };
  }, [id, pusher]);

  useEffect(() => {
    getChat();
  }, [getChat]);

  return (
    <Chat {...chat} onSend={handleSend}>
      <Chat.Header>
        <Chat.Header.Title></Chat.Header.Title>
      </Chat.Header>
      <Chat.Body />
      <Chat.Footer />
    </Chat>
  );
};

export default SingleChat;
