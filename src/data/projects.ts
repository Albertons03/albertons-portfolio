import type { PortfolioProject } from "../types/project";

export const projects: PortfolioProject[] = [
  {
    id: "ai-social-media-scheduler",
    status: "live",
    tier: "featured",
    titleKey: "projects.ai-social-media-scheduler.title",
    descriptionKey: "projects.ai-social-media-scheduler.description",
    images: [
      "/projects/scheduler-dashboard.webp",
      "/projects/scheduler-scheduling.webp",
      "/projects/scheduler-create-post.webp",
      "/projects/scheduler-publishing.webp",
    ],
    demoUrl: "https://www.landingbits.net/en",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "AI-Assisted Content Creation",
    ],
    github: "https://github.com/Albertons03/ai-social-media-scheduler",
  },
  {
    id: "apib-v1",
    status: "in-development",
    tier: "featured",
    titleKey: "projects.apib-v1.title",
    descriptionKey: "projects.apib-v1.description",
    images: [
      "/projects/apib-v1-dashboard-cover.webp",
      "/projects/apib-v1-dashboard-full.webp",
    ],
    tags: ["Next.js", "TypeScript", "OpenAI API", "Binance API", "CoinGecko"],
    github: "https://github.com/Albertons03/apib-v1",
  },
  {
    id: "forest-stay-v1",
    status: "prototype",
    tier: "featured",
    titleKey: "projects.forest-stay-v1.title",
    descriptionKey: "projects.forest-stay-v1.description",
    images: [
      "/projects/forest-stay/homepage.png",
      "/projects/forest-stay/cabins.png",
      "/projects/forest-stay/reservation.png",
      "/projects/forest-stay/reservation-success.png",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Zod",
    ],
  },
];
