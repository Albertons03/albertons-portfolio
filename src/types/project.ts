export type ProjectStatus =
  | "live"
  | "in-development"
  | "prototype"
  | "archived";

export type ProjectTier = "featured" | "secondary";

export interface ProjectCaseStudy {
  problemKey: string;
  solutionKey: string;
  techStack: string[];
  featureKeys: string[];
}

export interface PortfolioProject {
  id: string;
  status: ProjectStatus;
  tier: ProjectTier;
  titleKey: string;
  descriptionKey: string;
  images?: string[];
  videoUrl?: string;
  demoUrl?: string;
  tags: string[];
  github?: string;
  caseStudy?: ProjectCaseStudy;
}
