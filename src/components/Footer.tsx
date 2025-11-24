import { useTranslation } from "react-i18next";
import {
  Heart,
  Github,
  Linkedin,
  Mail,
  Instagram,
  Facebook,
} from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#home", label: t("nav.home") },
    { href: "#why", label: t("nav.why") },
    { href: "#services", label: t("nav.services") },
    { href: "#portfolio", label: t("nav.portfolio") },
    { href: "#testimonials", label: t("nav.testimonials") },
    { href: "#pricing", label: t("nav.pricing") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Albertons03",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/albertons-juhasz-7053a4397/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/alberto.juhasz/",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=100004694597813",
      label: "Facebook",
    },
    {
      icon: Mail,
      href: "mailto:albertons@landingbits.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Albertons Studio</h3>
            <p className="text-gray-400 dark:text-gray-500 mb-4">
              {t("footer.tagline")}
            </p>
            <p className="text-sm text-gray-500">{t("footer.built")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block bg-primary text-white dark:!bg-white dark:!text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 dark:hover:bg-gray-200 transition-colors"
              >
                {t("contact.title")}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 dark:text-gray-500">
          <p>
            © {currentYear} Albertons Studio. {t("footer.rights")}.
          </p>
          <p className="flex items-center space-x-1 mt-4 sm:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by Albertons</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
