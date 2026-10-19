import { useTranslation } from "react-i18next";
import { Monitor, Database, BrainCircuit, Blocks } from "lucide-react";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Monitor,
      title: t("services.service1.title"),
      description: t("services.service1.description"),
      iconColor: "text-blue-700 dark:text-blue-300",
      iconBg: "bg-blue-50 dark:bg-blue-400/10",
    },
    {
      icon: Database,
      title: t("services.service2.title"),
      description: t("services.service2.description"),
      iconColor: "text-cyan-700 dark:text-cyan-300",
      iconBg: "bg-cyan-50 dark:bg-cyan-400/10",
    },
    {
      icon: BrainCircuit,
      title: t("services.service3.title"),
      description: t("services.service3.description"),
      iconColor: "text-blue-700 dark:text-blue-300",
      iconBg: "bg-blue-50 dark:bg-blue-400/10",
    },
    {
      icon: Blocks,
      title: t("services.service4.title"),
      description: t("services.service4.description"),
      iconColor: "text-cyan-700 dark:text-cyan-300",
      iconBg: "bg-cyan-50 dark:bg-cyan-400/10",
    },
  ];

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-white to-gray-50 px-4 py-14 dark:from-gray-900 dark:to-gray-800 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center animate-fadeIn sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("services.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 sm:p-7 motion-reduce:transform-none motion-reduce:transition-none animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon with Gradient */}
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${service.iconBg} transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none`}
                >
                  <Icon className={`h-7 w-7 ${service.iconColor}`} aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-300 sm:text-base sm:leading-7">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
