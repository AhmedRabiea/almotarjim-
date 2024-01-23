import { Button } from "@/components/ui/button";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import home from "../../assets/auth/home.svg";
import ellipse from "../../assets/auth/Ellipse18.svg";
import ellipse2 from "../../assets/auth/Ellipse19.svg";
import ellipse3 from "../../assets/auth/Ellipsedown.svg";
import LanguageDropdown from "@/components/LanguageDropdown";
// import AuthService from "@/services/auth.service";
// import { useNavigate } from "react-router-dom";

import about from "@/assets/about.jpg";
import logo from "@/assets/logo.png";

import useI18n from "@/hooks/useI18n";

const Home = () => {
  // const navigate = useNavigate();
  const { t, language } = useI18n();

  // const handleGetStarted = async () => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     const isValidToken = await AuthService.getIsValidToken();
  //     console.log(isValidToken);
  //     if (isValidToken) {
  //       navigate("/landing");
  //       return;
  //     }
  //   }
  //   navigate("/landing");
  // };

  return (
    <div className="relative min-h-screen m-auto">
      <div className="flex flex-col h-screen justify-center relative z-10">
        <div className="absolute top-0 right-0 -z-10">
          <img
            src={ellipse}
            alt="ellipse"
            className="w-[100px] h-[100px] md:h-auto md:w-auto"
          />
        </div>
        <div className="absolute top-0 left-0 -z-10">
          <img
            src={ellipse2}
            alt="ellipse"
            className="w-[100px] h-[100px] md:h-auto md:w-auto"
          />
        </div>
        <div className="absolute bottom-0 left-0 -z-10">
          <img
            src={ellipse3}
            alt="ellipse"
            className="w-[100px] h-[100px] md:h-auto md:w-auto"
          />
        </div>
        <div className="container mx-auto mt-5">
          <div className="flex justify-end">
            <LanguageDropdown />
          </div>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-10 md:gap-40 items-center">
            <div className="col-span-2 md:col-span-1">
              <h1 className="text-4xl font-bold ">{t("home.title")}</h1>
              <p className="py-10">{t("home.content")}</p>
              <a href="/landing">
                <Button className="flex items-center gap-2">
                  {t("home.button")}
                  {language.dir === "ltr" ? (
                    <HiArrowNarrowRight />
                  ) : (
                    <HiArrowNarrowLeft />
                  )}
                </Button>
              </a>
            </div>
            <div className="col-span-2 md:col-span-1 order-first md:order-last">
              <img
                className="w-2/3 md:w-full"
                src={home}
                alt="almotarjm-home"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="my-24" id="about">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="preview">
              <img className="rounded-xl" src={about} alt="" />
            </div>
            <div className="details py-8">
              <h1 className="text-2xl lg:text-5xl mb-8">
                {t("home.aboutUs.title")}
              </h1>
              <p>{t("home.aboutUs.description")}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary-100 py-8">
        <div className="container mx-auto">
          <div className="flex items-center gap-4">
            <img className="w-12" src={logo} alt="" />
            <p>
              {t("shared.footer.copyright").replace(
                "{{year}}",
                new Date().getFullYear().toString()
              )}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
