import { useTranslation } from "react-i18next";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { projects } from "../data/projects";
import type { ProjectText } from "../types/project";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const resolveProjectText = (
  value: ProjectText,
  translate: (key: string) => string
) => ("translationKey" in value ? translate(value.translationKey) : value.text);

const Portfolio = () => {
  const { t } = useTranslation();
  const translatedProjects = projects.map((project) => ({
    ...project,
    title: resolveProjectText(project.title, t),
    description: resolveProjectText(project.description, t),
  }));

  return (
    <section
      id="portfolio"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("portfolio.subtitle")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {translatedProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Video or Image Carousel */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden group">
                {project.videoUrl ? (
                  /* Loom Video Embed */
                  <div className="relative w-full h-full">
                    <iframe
                      src={project.videoUrl}
                      frameBorder="0"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      title={`${project.title} Demo Video`}
                    ></iframe>
                  </div>
                ) : (
                  /* Image Carousel */
                  <>
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      navigation={{
                        prevEl: `.swiper-button-prev-${index}`,
                        nextEl: `.swiper-button-next-${index}`,
                      }}
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      loop={true}
                      className="h-full w-full"
                    >
                      {(project.images ?? []).map((image, imgIndex) => (
                        <SwiperSlide key={imgIndex}>
                          <img
                            src={image}
                            alt={`${project.title} - Screenshot ${
                              imgIndex + 1
                            }`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src =
                                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='16' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EImage Coming Soon%3C/text%3E%3C/svg%3E";
                            }}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button
                      className={`swiper-button-prev-${index} absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-gray-900/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-gray-900 shadow-lg`}
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-900 dark:text-white" />
                    </button>
                    <button
                      className={`swiper-button-next-${index} absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-gray-900/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-gray-900 shadow-lg`}
                    >
                      <ChevronRight className="w-5 h-5 text-gray-900 dark:text-white" />
                    </button>
                  </>
                )}

                {/* Overlay on Hover - csak ha nincs videó */}
                {!project.videoUrl && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-cyan-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors pointer-events-auto"
                    >
                      <span>{t("portfolio.ctaDemo")}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Case Study */}
                {project.caseStudy && (
                  <div className="mb-4 border-t border-gray-200 dark:border-gray-700 pt-4 space-y-3">
                    {/* Problem */}
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1 flex items-center space-x-2">
                        <span className="text-red-500">⚠️</span>
                        <span>Problem</span>
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.caseStudy.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1 flex items-center space-x-2">
                        <span className="text-green-500">✓</span>
                        <span>Solution</span>
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.caseStudy.solution}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center space-x-2">
                        <span className="text-blue-500">⚙️</span>
                        <span>Tech Stack</span>
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
                    {project.caseStudy.features.length > 0 && (
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center space-x-2">
                          <span className="text-yellow-500">⚙️</span>
                          <span>Features</span>
                        </h4>
                        <ul className="space-y-1">
                          {project.caseStudy.features.map(
                            (feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="text-xs text-gray-600 dark:text-gray-400 flex items-start space-x-2"
                              >
                                <span className="text-green-500 mt-0.5">•</span>
                                <span>{feature}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* CTA Links */}
                <div className="flex flex-wrap gap-3 items-center mt-2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary font-semibold hover:underline"
                  >
                    <span>{t("portfolio.ctaDemo")}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-gray-500 dark:text-gray-300 font-semibold hover:text-primary hover:underline transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
