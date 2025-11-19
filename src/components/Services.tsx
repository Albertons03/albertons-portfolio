import { useTranslation } from "react-i18next";
import { Layout, Palette, PenTool, TrendingUp } from "lucide-react";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Layout,
      title: t("services.service1.title"),
      description: t("services.service1.description"),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: t("services.service2.title"),
      description: t("services.service2.description"),
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: PenTool,
      title: t("services.service3.title"),
      description: t("services.service3.description"),
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: TrendingUp,
      title: t("services.service4.title"),
      description: t("services.service4.description"),
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeIn border border-gray-100 dark:border-gray-800 hover:border-blue-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon with Gradient */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
