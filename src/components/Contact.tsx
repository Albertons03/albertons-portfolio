import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Send, Phone, MessageCircle, CheckCircle } from "lucide-react";
import Spinner from "./ui/Spinner";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    // Validation
    if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setIsSubmitting(true);

      // Web3Forms integration - FREE & SIMPLE!
      // 1. Get API key: https://web3forms.com/ (1 perc regisztráció)
      // 2. Írd be az access_key-t alább
      // 3. Kész! Email-ek mennek a regisztrált címedre

      const formDataToSend = new FormData();
      formDataToSend.append(
        "access_key",
        "4cb9be18-9945-4e44-a45a-88492d3fee4e"
      ); // TODO: Add your key here
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
      formDataToSend.append(
        "subject",
        "New Portfolio Contact from " + formData.name
      );
      // Disable spam filter for testing
      formDataToSend.append("botcheck", "");

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Web3Forms response:", data);
          if (data.success) {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setIsSuccess(false), 5000);
          } else {
            throw new Error(data.message);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setIsSubmitting(false);
          alert(
            "Something went wrong. Please try again or contact via WhatsApp."
          );
        });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fadeIn">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-200 dark:border-gray-700"
                  } focus:border-primary focus:outline-none transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-200 dark:border-gray-700"
                  } focus:border-primary focus:outline-none transition-colors`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-200 dark:border-gray-700"
                  } focus:border-primary focus:outline-none transition-colors resize-none`}
                  placeholder="I need a landing page for..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Honeypot - Hidden field for spam protection */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`group w-full py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 ${
                  isSuccess
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                } text-white disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <>
                    <Spinner
                      size="sm"
                      className="border-white border-t-transparent"
                    />
                    <span>Sending...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>{t("contact.form.send")}</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className="flex flex-col justify-center space-y-8 animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            {/* WhatsApp */}
            <a
              href="https://wa.me/436608216865"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-green-500"
            >
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  {t("contact.whatsapp")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Quick response, 24/7
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+436608216865"
              className="group flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  {t("contact.phone")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  +43 660 821 6865
                </p>
              </div>
            </a>

            {/* Additional Info Card */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 rounded-xl border-2 border-blue-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                💡 Free Consultation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Not sure what you need? Book a free 30-minute consultation and
                let's discuss your project goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
