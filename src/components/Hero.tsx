import { useTranslation } from "react-i18next";
import { ArrowRight, Github } from "lucide-react";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-4 pb-16 pt-28 transition-colors duration-300 dark:from-slate-950 dark:via-gray-900 dark:to-slate-900 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
        <div className="min-w-0 max-w-2xl">
          <h1 className="max-w-[16ch] break-words text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent dark:from-blue-300 dark:to-cyan-300">
              {t("hero.headline")}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
            {t("hero.subheading")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#portfolio"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/10 transition-colors hover:bg-primary/90 motion-reduce:transition-none sm:w-auto"
            >
              <span>{t("hero.ctaProjects")}</span>
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>

            <a
              href="https://github.com/Albertons03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white/80 px-6 py-3.5 font-semibold text-slate-800 transition-colors hover:border-primary hover:text-primary motion-reduce:transition-none dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 sm:w-auto"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
              <span>{t("hero.ctaGithub")}</span>
            </a>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-xl rounded-2xl border border-slate-200/80 bg-white/70 p-2 shadow-2xl shadow-slate-950/10 dark:border-slate-700/80 dark:bg-slate-800/70 sm:rounded-3xl sm:p-3 lg:max-w-none">
          <img
            src="/projects/forest-stay/homepage.png"
            alt={t("hero.visualAlt")}
            className="aspect-[4/3] w-full rounded-xl object-cover object-top sm:rounded-2xl"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
