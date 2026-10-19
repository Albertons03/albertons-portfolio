import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { projects } from "../data/projects";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProjectScreenshotProps {
  src: string;
  alt: string;
  fallbackLabel: string;
}

const ProjectScreenshot = ({
  src,
  alt,
  fallbackLabel,
}: ProjectScreenshotProps) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={fallbackLabel}
        className="flex h-full w-full items-center justify-center text-sm text-gray-500 dark:text-gray-400"
      >
        {fallbackLabel}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-contain"
      onError={() => setHasError(true)}
    />
  );
};

const getValidHttpUrl = (value?: string) => {
  if (!value?.trim()) {
    return undefined;
  }

  try {
    const url = new URL(value.trim());
    return url.protocol === "http:" || url.protocol === "https:"
      ? url.href
      : undefined;
  } catch {
    return undefined;
  }
};

const Portfolio = () => {
  const { t } = useTranslation();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () =>
      setPrefersReducedMotion(mediaQuery.matches);

    mediaQuery.addEventListener("change", updateMotionPreference);
    return () =>
      mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  return (
    <section
      id="portfolio"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn motion-reduce:animate-none">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("portfolio.subtitle")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((project, index) => {
            const title = t(project.titleKey);
            const videoUrl = getValidHttpUrl(project.videoUrl);
            const demoUrl = getValidHttpUrl(project.demoUrl);
            const githubUrl = getValidHttpUrl(project.github);
            const screenshots = project.images ?? [];
            const isForestStay = project.id === "forest-stay-v1";
            const isLiveScheduler =
              project.id === "ai-social-media-scheduler" &&
              project.status === "live";

            return (
              <div
                key={project.id}
                className={`group/card overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-gray-700/80 dark:bg-gray-800/70 md:rounded-3xl md:hover:-translate-y-1 ${
                  isForestStay
                    ? "md:col-span-2 md:grid md:grid-cols-2 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
                    : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
              {/* Project Video or Image Carousel */}
              <div
                className={`group/media relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-900/70 ${
                  isForestStay
                    ? "lg:aspect-auto lg:h-[26rem] lg:min-h-0"
                    : ""
                }`}
              >
                {videoUrl ? (
                  /* Loom Video Embed */
                  <div className="relative w-full h-full">
                    <iframe
                      src={videoUrl}
                      frameBorder="0"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      title={`${title} Demo Video`}
                    ></iframe>
                  </div>
                ) : screenshots.length === 0 ? (
                  <div
                    role="img"
                    aria-label={t("portfolio.media.unavailable")}
                    className="flex h-full w-full items-center justify-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    {t("portfolio.media.unavailable")}
                  </div>
                ) : (
                  /* Image Carousel */
                  <>
                    <Swiper
                      modules={[
                        Navigation,
                        Pagination,
                        ...(!prefersReducedMotion ? [Autoplay] : []),
                      ]}
                      navigation={{
                        prevEl: `.swiper-button-prev-${index}`,
                        nextEl: `.swiper-button-next-${index}`,
                      }}
                      pagination={{ clickable: true }}
                      autoplay={
                        prefersReducedMotion
                          ? false
                          : { delay: 3000, disableOnInteraction: false }
                      }
                      loop={true}
                      className="h-full w-full"
                    >
                      {screenshots.map((image, imgIndex) => (
                        <SwiperSlide key={image}>
                          <ProjectScreenshot
                            src={image}
                            alt={`${title} - Screenshot ${imgIndex + 1}`}
                            fallbackLabel={t("portfolio.media.unavailable")}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button
                      type="button"
                      aria-label={t("portfolio.media.previousScreenshot")}
                      className={`swiper-button-prev-${index} absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-lg ring-1 ring-black/10 transition-opacity hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:bg-gray-900/95 dark:ring-white/10 dark:hover:bg-gray-900 md:opacity-0 md:group-hover/media:opacity-100 md:group-focus-within/media:opacity-100`}
                    >
                      <ChevronLeft className="h-5 w-5 text-gray-900 dark:text-white" />
                    </button>
                    <button
                      type="button"
                      aria-label={t("portfolio.media.nextScreenshot")}
                      className={`swiper-button-next-${index} absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-lg ring-1 ring-black/10 transition-opacity hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:bg-gray-900/95 dark:ring-white/10 dark:hover:bg-gray-900 md:opacity-0 md:group-hover/media:opacity-100 md:group-focus-within/media:opacity-100`}
                    >
                      <ChevronRight className="h-5 w-5 text-gray-900 dark:text-white" />
                    </button>
                  </>
                )}

                {/* Overlay on Hover - csak ha nincs videó */}
                {!videoUrl && screenshots.length > 0 && demoUrl && (
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600/80 to-cyan-600/80 opacity-0 transition-opacity duration-300 group-hover/media:opacity-100">
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
                    >
                      <span>{t("portfolio.ctaDemo")}</span>
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="flex min-w-0 flex-col p-6 sm:p-7 lg:p-8">
                {/* Tags */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary dark:bg-blue-400/10 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                {isLiveScheduler ? (
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                      {title}
                    </h3>
                    <span
                      role="status"
                      aria-label={t("portfolio.status.live")}
                      className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold tracking-wide text-emerald-700 ring-1 ring-inset ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-800"
                    >
                      LIVE
                    </span>
                  </div>
                ) : (
                  <h3 className="mb-4 text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                    {title}
                  </h3>
                )}

                {/* Description */}
                <p className="mb-6 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                  {t(project.descriptionKey)}
                </p>

                {/* Case Study */}
                {project.caseStudy && (
                  <div className="mb-4 border-t border-gray-200 dark:border-gray-700 pt-4 space-y-3">
                    {/* Problem */}
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1 flex items-center space-x-2">
                        <span className="text-red-500">⚠️</span>
                        <span>{t("portfolio.caseStudy.problem")}</span>
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {t(project.caseStudy.problemKey)}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1 flex items-center space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>{t("portfolio.caseStudy.solution")}</span>
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {t(project.caseStudy.solutionKey)}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center space-x-2">
                        <span className="text-blue-500">⚙️</span>
                        <span>{t("portfolio.caseStudy.techStack")}</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.caseStudy.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    {project.caseStudy.featureKeys.length > 0 && (
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center space-x-2">
                          <span className="text-yellow-500">⚙️</span>
                          <span>{t("portfolio.caseStudy.features")}</span>
                        </h4>
                        <ul className="space-y-1">
                          {project.caseStudy.featureKeys.map(
                            (feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="text-xs text-gray-600 dark:text-gray-400 flex items-start space-x-2"
                              >
                                <span className="text-green-500 mt-0.5">•</span>
                                <span>{t(feature)}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* CTA Links */}
                <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-gray-100 pt-5 dark:border-gray-700/80">
                  {demoUrl && (
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800"
                    >
                      <span>{t("portfolio.ctaDemo")}</span>
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:border-gray-600 dark:text-gray-200 dark:hover:text-blue-300 dark:focus-visible:ring-offset-gray-800"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
