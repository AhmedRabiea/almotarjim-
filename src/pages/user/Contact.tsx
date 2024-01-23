import useI18n from "@/hooks/useI18n";

import location from "../../assets/location.png";
import phone from "../../assets/phone.png";
import mail from "../../assets/mail.png";
import logo from "@/assets/logo.png";

import LanguageDropdown from "@/components/LanguageDropdown";

const Contact = () => {
  const { t } = useI18n();

  return (
    <div className="page" id="contcat">
      <div className="container mx-auto">
        <div className="header bg-white p-4 rounded-xl mt-5">
          <div className="flex justify-end gap-4">
            <LanguageDropdown />
          </div>
        </div>
        <section id="contact" className="h-screen">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4 text-center">
              <p className="text-center text-primary font-semibold">
                - Almotarjim platform -
              </p>
              <h1 className="text-3xl">We Would Love To Hear From You</h1>
            </div>
            <div className="gap-5">
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-3 p-5 border hover:shadow-xl transition-all border-primary rounded-lg">
                    <img
                      src={location}
                      alt="almotarjim-address"
                      className="w-20 h-20"
                    />
                    <div>
                      <h1>{t("user.contact.address")}</h1>
                      <p className="font-normal text-gray-600 text-base">
                        Visit Our Office HQ
                      </p>
                    </div>
                    <p className="font-normal text-gray-600 text-base">
                      Riyadh, Saudi Arabia
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 p-5 border hover:shadow-xl transition-all border-primary rounded-lg">
                    <img
                      src={phone}
                      alt="almotajim-phone"
                      className="w-20 h-20"
                    />
                    <div>
                      <h1>{t("user.contact.phone")}</h1>
                      <p className="font-normal text-gray-600 text-base">
                        Speek To Our Team
                      </p>
                    </div>
                    <p className="font-normal text-gray-600 text-base">
                      920013736
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 p-5 border hover:shadow-xl transition-all border-primary rounded-lg">
                    <img
                      src={mail}
                      alt="almotajim-mail"
                      className="w-20 h-20"
                    />
                    <div>
                      <h1>{t("user.contact.email")}</h1>
                      <p className="font-normal text-gray-600 text-base">
                        Chat With Our Friendly Team
                      </p>
                    </div>
                    <p className="font-normal text-gray-600 text-base">
                      support@almotarjim.net
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d998.2980273464084!2d31.271760796259198!3d29.97213898903551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1705349946591!5m2!1sen!2seg"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
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

export default Contact;
