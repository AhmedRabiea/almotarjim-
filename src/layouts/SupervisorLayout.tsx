import { Outlet } from "react-router-dom";
import { HiChat, HiHome, HiReceiptTax } from "react-icons/hi";
import Sidebar from "@/containers/Sidebar";
import SidebarItem from "@/components/SidebarItem";
import LanguageDropdown from "@/components/LanguageDropdown";
import useI18n from "@/hooks/useI18n";
import { Button } from "@/components/ui/button";
import { RiNotification2Fill } from "react-icons/ri";

const SupervisorLayout = () => {
  const { t } = useI18n();
  return (
    <div className="supervisor-layout h-screen">
      <div className="flex h-full">
        <Sidebar>
          <SidebarItem to="/dashboard" end>
            <HiHome />
            <span className="hidden lg:block">
              {t("supervisor.layout.dashboard")}
            </span>
          </SidebarItem>
          <SidebarItem to="/internal-chat" end>
            <HiChat />
            <span className="hidden lg:block">Almotarjim Chat</span>
          </SidebarItem>
          <SidebarItem to="/chat">
            <HiChat />
            <span className="hidden lg:block">
              {t("supervisor.layout.chats")}
            </span>
          </SidebarItem>
          <SidebarItem to="/request">
            <HiReceiptTax />
            <span className="hidden lg:block">
              {t("supervisor.layout.requests")}
            </span>
          </SidebarItem>
        </Sidebar>

        <main className="page flex-1 flex flex-col gap-4 bg-gray-50 p-4 lg:h-full lg:overflow-auto">
          <div className="flex-1 flex flex-col gap-4 h-full">
            <div className="header bg-white p-4 rounded-xl">
              <div className="flex justify-end gap-4">
                <Button>
                  <RiNotification2Fill />
                </Button>
                <LanguageDropdown />
              </div>
            </div>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SupervisorLayout;
