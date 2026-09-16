export type PageRoute = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'programs' 
  | 'case-studies' 
  | 'testimonials' 
  | 'insights' 
  | 'contact';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  result: string;
  scope: string[];
  ctaLabel: string;
  iconName: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  shortDescription: string;
  whatYouLearn: string[];
  skillsBuilt: string[];
  whoItsFor: string;
  certification: string;
  careerOutcomes: string[];
  featured?: boolean;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  clientIndustry: string;
  category: 'social' | 'performance' | 'branding' | 'content' | 'strategy';
  challenge: string;
  objective: string;
  strategy: string;
  execution: string;
  outcome: string;
  learnings: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  category: 'client' | 'learner';
  impactHighlight: string;
  isFeaturedVideo?: boolean;
}

export interface ArticleItem {
  id: string;
  category: 'MARKETING' | 'AI' | 'BRANDING' | 'PERFORMANCE' | 'CONTENT' | 'GROWTH' | 'ANALYTICS';
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  content: string[];
  keyTakeaways: string[];
}

export interface TeamRoleItem {
  role: string;
  department: string;
  responsibility: string;
  focus: string;
}

export interface ContactFormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  website: string;
  businessType: string;
  serviceInterest: string;
  budget: string;
  message: string;
}
