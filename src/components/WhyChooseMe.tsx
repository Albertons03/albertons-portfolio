import { useTranslation } from "react-i18next";
import { Zap, Smartphone, Sparkles } from "lucide-react";

const WhyChooseMe = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Zap,
      title: t("why.feature1.title"),
      description: t("why.feature1.description"),
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Smartphone,
      title: t("why.feature2.title"),
      description: t("why.feature2.description"),
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Sparkles,
      title: t("why.feature3.title"),
      description: t("why.feature3.description"),
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section id="why" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("why.title")}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-primary/30 hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-cyan-50/50 transition-all duration-300 hover:shadow-xl animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
