import { Outlet } from "react-router-dom";
import LanguageDropdown from "@/components/LanguageDropdown";
import useI18n from "@/hooks/useI18n";
import { Button } from "@/components/ui/button";

const UserLayout = () => {
  const { t } = useI18n();
  return (
    <div className="user-layout h-screen">
      <div className="flex h-full">
        <main className="page flex-1 flex flex-col gap-4 bg-gray-50 p-4 lg:h-full lg:overflow-auto">
          <div className="flex-1 flex flex-col gap-4 h-full">
            <div className="header bg-white p-4 rounded-xl">
              <div className="flex justify-end gap-4">
                <LanguageDropdown />
                <div>
                  <a href="/login">
                    <Button>{t("register.login")}</Button>
                  </a>
                </div>
              </div>
            </div>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
