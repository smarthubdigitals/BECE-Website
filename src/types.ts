export interface Project {
  id: string;
  title: string;
  category: 'Graphic Design' | 'Website Design' | 'Content Creation' | 'Video Editing' | 'All';
  description: string;
  image: string;
  tools: string[];
  longDescription: string;
  clientType: string;
  impact?: string;
  completedDate?: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  items: string[];
  iconName: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: string;
  priceEstimate: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatar: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  serviceOfInterest?: string;
  timestamp: string;
}
