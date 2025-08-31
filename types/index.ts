export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Stats {
  value: string;
  label: string;
  icon: string;
}

export interface Certification {
  id: number;
  name: string;
  image: string;
  year: string;
}