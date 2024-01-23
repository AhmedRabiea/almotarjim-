// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import User from "@/interfaces/user";
import AdminService from "@/services/admin.service";
import { useEffect, useState } from "react";
import { HiChat } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const InternalUsers = () => {
  const [internalUsers, setInternalUsers] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const data = await AdminService.getInternalUsers();
    setInternalUsers(data.data);
  };

  const handleInternalChat = async (id: string) => {
    const res = await AdminService.createInternalUserChat(id);
    navigate(`/chat/${res.data.id}`);
    // console.log(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {internalUsers.map((internalUser: User) => (
        <div className="flex justify-between items-center bg-white p-4 rounded-xl">
          <div className="flex items-center gap-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://placehold.co/400x400/EEE/31343C"
              alt=""
            />
            <div className="details">
              <div className="flex items-center gap-2">
                <h4>{internalUser.name}</h4>
                {/* <Badge variant={chat.status === "closed" ? "success" : "warning"}>
              {chat.status}
            </Badge> */}
              </div>
              {/* {!lastMessage && (
            <p className="text-slate-400">there is not messages</p>
          )}
          {!!lastMessage &&
            (lastMessage.type === "text" ? (
              <p>{lastMessage.content}</p>
            ) : (
              <p>file</p>
            ))} */}
            </div>
          </div>

          <Button
            size="icon"
            onClick={() => handleInternalChat(internalUser.id)}
          >
            <HiChat />
          </Button>
        </div>
      ))}
    </>
  );
};

export default InternalUsers;
