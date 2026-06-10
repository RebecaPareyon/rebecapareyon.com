export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  keyMetric: string;
  metricLabel: string;
  tags: string[];
  results: string[];
  impactCategory: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  metrics: string[];
  tags: string[];
}

export interface ProductApproachItem {
  title: string;
  description: string;
  icon: string;
  metricsText: string;
  activities: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatarLetter: string;
  avatarBg: string;
  date: string;
}
