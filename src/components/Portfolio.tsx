import { useTranslation } from "react-i18next";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("portfolio.project1.title"),
      description: t("portfolio.project1.description"),
      images: [
        "/projects/smatfitPro1.png",
        "/projects/smatfitPro2.png",
        "/projects/smatfitPro3.png",
        "/projects/smatfitPro4.png",
        "/projects/smatfitPro5.png",
        "/projects/smatfitPro6.png",
        "/projects/smatfitPro7.png",
      ],
      videoUrl: "https://www.loom.com/embed/c1a8a8e5924c49b99beb48e530df70a0",
      demoUrl: "https://smart-fit-pro.vercel.app",
      tags: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: t("portfolio.project2.title"),
      description: t("portfolio.project2.description"),
      images: [
        "/projects/personal-training1.png",
        "/projects/personal-training2.png",
        "/projects/personal-training3.png",
        "/projects/personal-training4.png",
        "/projects/personal-training5.png",
        "/projects/personal-training6.png",
        "/projects/personal-training7.png",
      ],
      videoUrl: undefined,
      demoUrl: "https://vienna-personal-trainer.vercel.app",
      tags: ["React", "i18n", "Responsive"],
    },
    {
      title: t("portfolio.project3.title"),
      description: t("portfolio.project3.description"),
      images: [
        "/projects/career-coach1.png",
        "/projects/career-coach2.png",
        "/projects/career-coach3.png",
        "/projects/career-coach4.png",
        "/projects/career-coach5.png",
        "/projects/career-coach6.png",
        "/projects/career-coach7.png",
      ],
      videoUrl: undefined,
      demoUrl: "https://career-code-coach-94db.vercel.app",
      tags: ["React", "Multilingual", "Shadcn/ui"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
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
          {projects.map((project, index) => (
            <div
              key={index}
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
                      {project.images.map((image, imgIndex) => (
                        <SwiperSlide key={imgIndex}>
                          <img
                            src={image}
                            alt={`${project.title} - Screenshot ${imgIndex + 1}`}
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

                {/* CTA Link */}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary font-semibold hover:underline"
                >
                  <span>{t("portfolio.ctaDemo")}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
