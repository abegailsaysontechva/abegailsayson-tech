export interface ProjectNode {
  id: string;
  label: string;
  type: 'trigger' | 'action' | 'condition' | 'complete' | 'router' | 'loop' | 'delay';
  app: string;
  desc: string;
}

export interface ProjectEdge {
  from: string;
  to: string;
  label?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  tools: string[];
  features: string[];
  stats: { label: string; value: string }[];
  icon: string; // Lucide icon name
  nodes?: ProjectNode[];
  edges?: ProjectEdge[];
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  bullets: string[];
  exampleWorkflow: {
    trigger: string;
    steps: string[];
    result: string;
  };
}

export interface WorkflowNode {
  id: string;
  label: string;
  type: 'trigger' | 'action' | 'condition' | 'complete';
  icon: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
  rating: number;
  highlight: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BookingSlot {
  time: string;
  available: boolean;
}

export interface BookingSubmission {
  name: string;
  email: string;
  businessType: string;
  challenges: string;
  date: string;
  time: string;
}

export interface FormSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
  businessType: string;
}
