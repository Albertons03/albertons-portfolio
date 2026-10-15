export type ProjectStatus =
  | "live"
  | "in-development"
  | "prototype"
  | "archived";

export type ProjectTier = "featured" | "secondary";

export type ProjectText =
  | { text: string }
  | { translationKey: string };

export interface ProjectCaseStudy {
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
}

export interface PortfolioProject {
  id: string;
  status: ProjectStatus;
  tier: ProjectTier;
  title: ProjectText;
  description: ProjectText;
  images?: string[];
  videoUrl?: string;
  demoUrl?: string;
  tags: string[];
  github?: string;
  caseStudy?: ProjectCaseStudy;
}
