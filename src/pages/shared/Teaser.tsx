import RequestService from "@/components/RequestService";
import Spinner from "@/components/ui/Spinner";
import { Button } from "@/components/ui/button";
import useI18n from "@/hooks/useI18n";
import Service from "@/interfaces/requestServices";
import ChatService from "@/services/chat.service";
import ServiceService from "@/services/services.service";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaPhoneFlip } from "react-icons/fa6";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";

const Teaser = () => {
  const { t } = useI18n();

  const navigate = useNavigate();

  const handleCreateChat = async () => {
    const chat = await ChatService.createChat({});
    navigate(`/chat/${chat.id}`);
  };

  const { isLoading, data: services } = useQuery("services", () =>
    ServiceService.listServices(1)
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col flex-1 flex-wrap gap-6 items-start p-6 bg-white rounded-xl ">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-2xl">{t("user.home.title")}</h1>
          <p className="font-normal text-gray-600 text-base">
            {t("user.home.desc")}
          </p>
        </div>
        <div className="grid gird-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {services?.data.map((service: Service) => (
            <Link key={service.id} to={`/login`}>
              <RequestService {...service} />
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <span>{t("user.home.checkServices")}</span>
          </div>
          <div className="flex flex-wrap gap-6">
            <div>
              <Button className="flex gap-2" onClick={handleCreateChat}>
                <span>{t("user.home.chat")}</span> <BsFillChatDotsFill />
              </Button>
            </div>
            <div>
              <a
                href={`https://wa.me/+${import.meta.env.VITE_WHATSAPP_NUMBER}`}
                target="_blank"
              >
                <Button className="flex gap-2" variant={"success"}>
                  <span>{t("user.home.whatsapp")}</span>
                  <BsFillChatDotsFill />
                </Button>
              </a>
            </div>
            <div>
              <a href="">
                <Button className="flex gap-2" variant={"outline"}>
                  <span>920013736</span>
                  <FaPhoneFlip />
                </Button>
              </a>
            </div>
            <div>
              <a href="/contact">
                <Button className="flex gap-2" variant={"subtle"}>
                  <span>{t("user.home.contact")}</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teaser;
