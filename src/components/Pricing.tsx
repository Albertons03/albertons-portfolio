import { useTranslation } from "react-i18next";
import { Check, Sparkles } from "lucide-react";

const Pricing = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: t("pricing.starter.name"),
      price: t("pricing.starter.price"),
      features: [
        t("pricing.starter.features.0"),
        t("pricing.starter.features.1"),
        t("pricing.starter.features.2"),
        t("pricing.starter.features.3"),
        t("pricing.starter.features.4"),
      ],
      cta: t("pricing.starter.cta"),
      popular: false,
    },
    {
      name: t("pricing.standard.name"),
      price: t("pricing.standard.price"),
      popular: t("pricing.standard.popular"),
      features: [
        t("pricing.standard.features.0"),
        t("pricing.standard.features.1"),
        t("pricing.standard.features.2"),
        t("pricing.standard.features.3"),
        t("pricing.standard.features.4"),
        t("pricing.standard.features.5"),
      ],
      cta: t("pricing.standard.cta"),
    },
    {
      name: t("pricing.pro.name"),
      price: t("pricing.pro.price"),
      features: [
        t("pricing.pro.features.0"),
        t("pricing.pro.features.1"),
        t("pricing.pro.features.2"),
        t("pricing.pro.features.3"),
        t("pricing.pro.features.4"),
        t("pricing.pro.features.5"),
        t("pricing.pro.features.6"),
      ],
      cta: t("pricing.pro.cta"),
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const isPopular = typeof plan.popular === "string";
            return (
              <div
                key={index}
                className={`relative bg-white dark:bg-gray-900 rounded-2xl p-8 transition-all duration-300 animate-fadeIn ${
                  isPopular
                    ? "border-2 border-primary shadow-2xl transform scale-105 bg-gradient-to-br from-blue-50/50 to-cyan-50/50"
                    : "border-2 border-gray-200 dark:border-gray-700 hover:border-primary/50 shadow-lg hover:shadow-xl"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      <span>{plan.popular}</span>
                    </div>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`block w-full text-center py-4 rounded-lg font-semibold transition-all duration-300 ${
                    isPopular
                      ? "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl"
                      : "bg-gray-100 text-gray-900 dark:text-white hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
