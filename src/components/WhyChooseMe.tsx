import { useTranslation } from "react-i18next";
import { Code2, BrainCircuit, Blocks } from "lucide-react";

const WhyChooseMe = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Code2,
      title: t("why.feature1.title"),
      description: t("why.feature1.description"),
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-blue-400/10",
    },
    {
      icon: BrainCircuit,
      title: t("why.feature2.title"),
      description: t("why.feature2.description"),
      color: "text-cyan-700 dark:text-cyan-300",
      bgColor: "bg-cyan-50 dark:bg-cyan-400/10",
    },
    {
      icon: Blocks,
      title: t("why.feature3.title"),
      description: t("why.feature3.description"),
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-blue-400/10",
    },
  ];

  return (
    <section id="why" className="bg-white px-4 py-14 dark:bg-gray-900 sm:px-6 sm:py-16 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center animate-fadeIn motion-reduce:animate-none sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("why.title")}
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            {t("why.intro")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 p-6 transition-colors duration-300 hover:border-primary/40 hover:bg-gradient-to-br hover:from-blue-50/60 hover:to-cyan-50/60 hover:shadow-lg dark:border-gray-700 dark:hover:from-blue-950/30 dark:hover:to-cyan-950/20 sm:p-7 animate-fadeIn motion-reduce:animate-none"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${feature.bgColor} transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none`}
                >
                  <Icon className={`h-7 w-7 ${feature.color}`} aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-300 sm:text-base sm:leading-7">
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
