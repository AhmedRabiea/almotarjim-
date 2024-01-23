import { Outlet } from "react-router-dom";
import { HiChat, HiHome, HiReceiptTax } from "react-icons/hi";
import Sidebar from "@/containers/Sidebar";
import SidebarItem from "@/components/SidebarItem";
import LanguageDropdown from "@/components/LanguageDropdown";
import { Button } from "@/components/ui/button";
import { RiNotification2Fill } from "react-icons/ri";
import useI18n from "@/hooks/useI18n";

const AdminLayout = () => {
  const { t } = useI18n();
  return (
    <div className="admin-layout h-none lg:h-screen">
      <div className="flex h-full">
        <Sidebar>
          <SidebarItem to="/dashboard" end>
            <HiHome />
            <span className="hidden lg:block">
              {t("admin.layout.dashboard")}
            </span>
          </SidebarItem>
          <SidebarItem to="/internal-chat" end>
            <HiChat />
            <span className="hidden lg:block">Almotarjim Chat</span>
          </SidebarItem>
          <SidebarItem to="/services" end>
            <HiHome />
            <span className="hidden lg:block">
              {t("admin.layout.services")}
            </span>
          </SidebarItem>
          <SidebarItem to="/chat">
            <HiChat />
            <span className="hidden lg:block">{t("admin.layout.chats")}</span>
          </SidebarItem>
          <SidebarItem to="/request">
            <HiReceiptTax />
            <span className="hidden lg:block">
              {t("admin.layout.requests")}
            </span>
          </SidebarItem>
          <SidebarItem to="/agents">
            <HiReceiptTax />
            <span className="hidden lg:block">{t("admin.layout.agents")}</span>
          </SidebarItem>
          <SidebarItem to="/translators">
            <HiReceiptTax />
            <span className="hidden lg:block">
              {t("admin.layout.tanslators")}
            </span>
          </SidebarItem>
          <SidebarItem to="/supervisors">
            <HiReceiptTax />
            <span className="hidden lg:block">
              {t("admin.layout.supervisors")}
            </span>
          </SidebarItem>
          <SidebarItem to="/users">
            <HiReceiptTax />
            <span className="hidden lg:block">{t("admin.layout.users")}</span>
          </SidebarItem>
          <SidebarItem to="/reports">
            <HiReceiptTax />
            <span className="hidden lg:block">{t("admin.layout.reports")}</span>
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

export default AdminLayout;
