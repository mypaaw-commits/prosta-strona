export interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

export interface ExtraService {
  title: string;
  price?: string;
  description?: string;
  notice?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}