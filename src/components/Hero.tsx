import { useTranslation } from "react-i18next";
import { ArrowRight, Sparkles, Calendar } from "lucide-react";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-fadeIn">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-primary px-4 py-2 rounded-full mb-8 border border-blue-200 dark:border-blue-700">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Albertons Studio</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(59,130,246,0.3)]">
              {t("hero.headline")}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            {t("hero.subheading")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
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
              <span>Book a call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Optional: Animated background elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 animate-float" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
