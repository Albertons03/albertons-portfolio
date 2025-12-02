import { useTranslation } from "react-i18next";
import { ArrowRight, Calendar } from "lucide-react";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 animate-fadeIn">
          {/* Left: Text + Logo */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Logo */}
            <img
              src="/logo5.svg"
              alt="Albertons Studio Logo"
              className="h-14 w-auto mb-6"
            />

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(59,130,246,0.3)]">
                {t("hero.headline")}
              </span>
            </h1>

            {/* Starting Price Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-400 px-6 py-3 rounded-full mb-6 border-2 border-green-200 dark:border-green-700 shadow-md">
              <span className="text-lg font-bold">Starting from $129</span>
            </div>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl">
              {t("hero.subheading")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-8">
              <a
                href="#contact"
                className="group inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>{t("hero.ctaConsultation")}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>{t("hero.ctaPortfolio")}</span>
              </a>
            </div>

            {/* Calendly CTA Banner */}
            <div className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 dark:from-blue-400/10 dark:to-cyan-400/10 border-2 border-blue-200 dark:border-blue-800 rounded-2xl px-6 py-4 animate-fadeIn backdrop-blur-sm">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Hiring me for your next project?
              </span>
              <a
                href="#contact"
                className="text-primary font-bold hover:underline inline-flex items-center space-x-1 group"
              >
                <span>START PROJECT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Overlapping Project Images + GIF */}
          <div className="flex-1 flex flex-col md:flex-row justify-center md:justify-end items-center relative min-h-[260px] w-full md:w-auto mb-10 md:mb-0 gap-6">
            {/* Overlapping images container */}
            <div className="relative w-[340px] h-[220px] hidden md:block">
              {/* First image */}
              <img
                src="/hiro1.png"
                alt="Project 1"
                className="w-[260px] h-[160px] rounded-xl shadow-xl object-cover absolute left-0 top-8 z-10 border-4 border-white dark:border-gray-900 rotate-[-8deg] transition-transform duration-300 hover:scale-105"
                style={{ boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)" }}
              />
              {/* Second image */}
              <img
                src="/hiro2.png"
                alt="Project 2"
                className="w-[220px] h-[140px] rounded-xl shadow-lg object-cover absolute left-20 top-0 z-20 border-4 border-white dark:border-gray-900 rotate-[7deg] transition-transform duration-300 hover:scale-105"
                style={{ boxShadow: "0 8px 32px 0 rgba(0,0,0,0.12)" }}
              />
              {/* Third image, further offset */}
              <img
                src="/hero3.png"
                alt="Project 3"
                className="w-[180px] h-[110px] rounded-xl shadow-md object-cover absolute left-36 top-16 z-30 border-4 border-white dark:border-gray-900 rotate-[-4deg] transition-transform duration-300 hover:scale-105"
                style={{ boxShadow: "0 8px 24px 0 rgba(0,0,0,0.10)" }}
              />
            </div>
            {/* Responsive fallback for mobile: stack images */}
            <div className="md:hidden flex flex-col gap-4 w-full items-center relative">
              <img
                src="/hiro1.png"
                alt="Project 1"
                className="w-[90%] max-w-xs rounded-xl shadow-xl object-cover border-4 border-white dark:border-gray-900"
              />
              <img
                src="/hiro2.png"
                alt="Project 2"
                className="w-[80%] max-w-xs rounded-xl shadow-lg object-cover border-4 border-white dark:border-gray-900"
              />
              <img
                src="/hero3.png"
                alt="Project 3"
                className="w-[70%] max-w-xs rounded-xl shadow-md object-cover border-4 border-white dark:border-gray-900"
              />
            </div>
            {/* GIF or video on the right (desktop only) */}
            <div className="hidden md:flex items-center justify-center ml-4">
              <img
                src="/hero3video.gif"
                alt="Project Animation"
                className="w-[180px] h-[180px] rounded-2xl shadow-lg object-cover border-4 border-white dark:border-gray-900 bg-white dark:bg-gray-900"
                style={{ boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)" }}
              />
            </div>
          </div>
        </div>
        {/* Optional: Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>
    </section>
  );
};

export default Hero;
