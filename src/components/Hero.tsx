import { useTranslation } from "react-i18next";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-fadeIn">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-primary px-4 py-2 rounded-full mb-8 border border-blue-200">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Albertons Studio</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(59,130,246,0.3)]">
              {t("hero.headline")}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            {t("hero.subheading")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>{t("hero.ctaConsultation")}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold border-2 border-gray-200 hover:border-primary hover:text-primary transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>{t("hero.ctaPortfolio")}</span>
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
