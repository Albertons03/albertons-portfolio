import type { PortfolioProject } from "../types/project";

export const projects: PortfolioProject[] = [
  {
    id: "ai-powered-customer-support-saas",
    status: "prototype",
    tier: "featured",
    title: { text: "AI-Powered Customer Support SaaS" },
    description: {
      text: "Full-stack SaaS application with React, FastAPI, Supabase & OpenAI. Users can chat with AI 24/7, all messages saved.",
    },
    images: [],
    videoUrl: "https://www.loom.com/embed/77b5675cabaf46fa94b71b821b54a0a8",
    demoUrl: "https://customer-support-saas.vercel.app",
    tags: [
      "React",
      "TypeScript",
      "Tailwind",
      "FastAPI",
      "Supabase",
      "OpenAI API",
    ],
    github: "https://github.com/Albertons03/customer-support-Saas",
    caseStudy: {
      problem:
        "Customer support teams struggle to provide 24/7 instant answers and store all chat history reliably.",
      solution:
        "Developed a SaaS platform where users can chat with an AI assistant anytime, with all conversations securely saved and searchable.",
      techStack: [
        "React",
        "TypeScript",
        "Tailwind",
        "FastAPI",
        "Supabase",
        "OpenAI API",
      ],
      features: [
        "All messages are saved and searchable",
        "Easy integration for any business website",
        "Built-in analytics for support quality",
      ],
    },
  },
  {
    id: "marketing-analytics-ai-chatbot",
    status: "prototype",
    tier: "featured",
    title: { text: "Marketing Analytics with AI Chatbot" },
    description: {
      text: "Analytics dashboard and AI chatbot for marketing teams. Ask questions, get instant insights, and visualize your data. Built with FastAPI, OpenAI, React, Supabase, Tailwind, deployed on Vercel & Railway.",
    },
    images: [],
    videoUrl: "https://www.loom.com/embed/16d4dd470f7147e9aaed40e43287e2a3",
    demoUrl: "https://marketing-analitycs.vercel.app",
    tags: [
      "React",
      "FastAPI",
      "OpenAI",
      "Supabase",
      "Tailwind",
      "Vercel",
      "Railway",
    ],
    github: "https://github.com/Albertons03/marketing-analitycs",
    caseStudy: {
      problem:
        "Marketing teams need fast, AI-powered answers from their data, but most dashboards are slow and require manual work.",
      solution:
        "Built a dashboard where users can chat with an AI to get instant analytics, charts, and actionable insights from their marketing data.",
      techStack: [
        "React",
        "FastAPI",
        "OpenAI",
        "Supabase",
        "Tailwind",
        "Vercel",
        "Railway",
      ],
      features: ["Data visualizations update in real time"],
    },
  },
  {
    id: "smartfit-pro-x",
    status: "prototype",
    tier: "featured",
    title: { translationKey: "portfolio.project1.title" },
    description: { translationKey: "portfolio.project1.description" },
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
    caseStudy: {
      problem:
        "Fitness centers struggled with outdated booking systems, leading to missed appointments and poor user experience on mobile devices.",
      solution:
        "Built a modern, mobile-first fitness booking platform with real-time class scheduling, membership management, and intuitive UI/UX design.",
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Responsive Design",
      ],
      features: [],
    },
  },
  {
    id: "vienna-personal-trainer",
    status: "prototype",
    tier: "featured",
    title: { translationKey: "portfolio.project2.title" },
    description: { translationKey: "portfolio.project2.description" },
    images: [
      "/projects/personal-training1.png",
      "/projects/personal-training2.png",
      "/projects/personal-training3.png",
      "/projects/personal-training4.png",
      "/projects/personal-training5.png",
      "/projects/personal-training6.png",
      "/projects/personal-training7.png",
    ],
    videoUrl: "https://www.loom.com/embed/a4f1bf5b67b545f39df11cf169ad7a34",
    demoUrl: "https://vienna-personal-trainer.vercel.app",
    tags: ["React", "i18n", "Responsive"],
    caseStudy: {
      problem:
        "Personal trainers in Vienna needed multilingual websites to reach international clients, but lacked technical expertise and budget for custom development.",
      solution:
        "Created a fully multilingual landing page with German, English, Hungarian, and Serbian support, featuring automated contact forms and SEO optimization.",
      techStack: [
        "React",
        "i18next",
        "Responsive Design",
        "Web3Forms",
        "SEO",
      ],
      features: [],
    },
  },
  {
    id: "it-career-mentoring",
    status: "prototype",
    tier: "featured",
    title: { translationKey: "portfolio.project3.title" },
    description: { translationKey: "portfolio.project3.description" },
    images: [
      "/projects/career-coach1.png",
      "/projects/career-coach2.png",
      "/projects/career-coach3.png",
      "/projects/career-coach4.png",
      "/projects/career-coach5.png",
      "/projects/career-coach6.png",
      "/projects/career-coach7.png",
    ],
    videoUrl: "https://www.loom.com/embed/3e0b5415188a4c08a8f07df56aa3a5ab",
    demoUrl: "https://career-code-coach-94db.vercel.app",
    tags: ["React", "Multilingual", "Shadcn/ui"],
    caseStudy: {
      problem:
        "Career coaching services struggled to showcase credibility and convert website visitors into paying clients due to generic landing pages.",
      solution:
        "Developed a professional landing page with testimonial sections, service breakdowns, pricing transparency, and conversion-optimized CTAs using modern UI components.",
      techStack: [
        "React",
        "TypeScript",
        "Shadcn/ui",
        "Tailwind CSS",
        "i18next",
      ],
      features: [],
    },
  },
];
