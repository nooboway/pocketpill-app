import vencheckerCover from "@/assets/venchecker.jpeg";

export type ProductCategory =
  | "Wellness"
  | "Sexual Health"
  | "Men's Health"
  | "Diagnostics / Testing"
  | "Digital Resources"
  | "Other";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  productType: "physical" | "digital";
  shortDescription: string;
  fullDescription: string;
  coverImage: string | null;
  galleryImages: string[];
  price: number; // in kobo (NGN * 100)
  compareAtPrice: number | null; // in kobo
  stockQuantity: number;
  sku: string;
  brand: string | null;
  specifications: Record<string, string>;
  ingredients: string[] | null;
  packageContents: string[] | null;
  usageInformation: string | null;
  warnings: string[] | null;
  regulatoryInformation: {
    nafdacNumber: string | null;
    certifications: string[] | null;
  } | null;
  featured: boolean;
  active: boolean;
  seoTitle: string;
  seoDescription: string;
}

export const products: Product[] = [
  {
    id: "prod_wellness_01",
    slug: "wellness-supplement-package",
    name: "Wellness Supplement Package",
    category: "Wellness",
    productType: "physical",
    shortDescription: "A curated collection of everyday wellness products designed to support healthy routines and general wellbeing.",
    fullDescription: "Our Wellness Supplement Package is thoughtfully assembled to complement your daily routine. This package includes a selection of products aimed at supporting general wellbeing as part of a balanced lifestyle.",
    coverImage: null, // Placeholder to be updated with actual image
    galleryImages: [],
    price: 1500000, // 15,000 NGN (placeholder price)
    compareAtPrice: null,
    stockQuantity: 100,
    sku: "WLN-PKG-01",
    brand: null, // Placeholder for manufacturer info
    specifications: {},
    ingredients: null, // Placeholder for verified supplier ingredients
    packageContents: [
      "Wellness supplement items (To be detailed from verified supplier)"
    ],
    usageInformation: "Incorporate into your daily wellness routine as directed on individual product packaging.",
    warnings: [
      "This package is positioned as a general wellness product and is not intended to diagnose, treat, cure, or prevent any disease.",
      "Consult a healthcare professional before use if you have any existing medical conditions or are taking medication."
    ],
    regulatoryInformation: {
      nafdacNumber: null, // Placeholder
      certifications: null // Placeholder
    },
    featured: true,
    active: true,
    seoTitle: "Wellness Supplement Package | PocketPill Shop",
    seoDescription: "A curated collection of everyday wellness products designed to support healthy routines and general wellbeing."
  },
  {
    id: "prod_wellness_02",
    slug: "smoke-detox-package",
    name: "Smoke Detox Package",
    category: "Wellness",
    productType: "physical",
    shortDescription: "A one-month respiratory wellness package designed to support a healthy daily routine.",
    fullDescription: "The Smoke Detox Package provides a one-month supply of wellness products, including herbal wellness tea and respiratory comfort items, designed as a comprehensive wellness routine to support comfortable breathing.",
    coverImage: null, // Placeholder
    galleryImages: [],
    price: 2500000, // 25,000 NGN (placeholder)
    compareAtPrice: null,
    stockQuantity: 50,
    sku: "WLN-SMK-01",
    brand: null,
    specifications: {
      "Duration": "One-month supply"
    },
    ingredients: null,
    packageContents: [
      "One-month supply of herbal/wellness tea",
      "Respiratory/airway wellness product"
    ],
    usageInformation: "Use as part of a daily wellness routine for one month.",
    warnings: [
      "General Wellness Disclaimer: This product is not intended to treat, cure, prevent or relieve chest pain, persistent cough, asthma, COPD, bronchitis, lung disease, smoking-related disease, or any diagnosed medical condition.",
      "Safety Notice: Persistent cough, chest pain, breathing difficulty, or other concerning respiratory symptoms should be assessed immediately by a qualified healthcare professional."
    ],
    regulatoryInformation: {
      nafdacNumber: null,
      certifications: null
    },
    featured: true,
    active: true,
    seoTitle: "Smoke Detox Package - Respiratory Wellness | PocketPill Shop",
    seoDescription: "A one-month respiratory wellness package designed to support a healthy daily routine."
  },
  {
    id: "prod_diag_01",
    slug: "venchecker-4-in-1-sti-self-test-kit",
    name: "Venchecker 4-in-1 STI Self-Test Kit",
    category: "Diagnostics / Testing",
    productType: "physical",
    shortDescription: "A convenient at-home screening kit for four common infections: HIV-1/2, Syphilis, Hepatitis B, and Hepatitis C.",
    fullDescription: "The Venchecker 4-in-1 STI Self-Test Kit offers a private and convenient first-line screening option for four common infections. Utilizing a whole-blood/finger-prick method, it provides rapid results generally read within approximately 15–20 minutes.",
    coverImage: vencheckerCover,
    galleryImages: [],
    price: 500000, // 5,000 NGN
    compareAtPrice: 1500000,
    stockQuantity: 200,
    sku: "DIA-VEN-4IN1",
    brand: "Venchecker",
    specifications: {
      "Test Type": "Whole-blood/finger-prick rapid screening",
      "Result Time": "15-20 minutes",
      "Tests Included": "HIV-1/2, Syphilis, Hepatitis B, Hepatitis C"
    },
    ingredients: null,
    packageContents: [
      "1x Venchecker 4-in-1 test device",
      "Lancets",
      "Buffer solution",
      "Alcohol prep pad",
      "Instruction manual"
    ],
    usageInformation: "Follow the provided instruction manual carefully for accurate sample collection and testing.",
    warnings: [
      "This is a screening test, not a definitive diagnosis.",
      "Reactive (positive) screening results require appropriate confirmatory testing and professional follow-up by a healthcare provider."
    ],
    regulatoryInformation: {
      nafdacNumber: null, // Must come from verified documentation
      certifications: null
    },
    featured: true,
    active: true,
    seoTitle: "Venchecker 4-in-1 STI Self-Test Kit | PocketPill Shop",
    seoDescription: "A convenient at-home screening kit for four common infections: HIV-1/2, Syphilis, Hepatitis B, and Hepatitis C. Private and rapid results."
  },
  {
    id: "prod_dig_01",
    slug: "the-stamina-blueprint",
    name: "The Stamina Blueprint",
    category: "Digital Resources",
    productType: "digital",
    shortDescription: "The ultimate science-backed guide to optimizing physical resilience and building long-lasting stamina.",
    fullDescription: "The ultimate science-backed guide to optimizing physical resilience and building long-lasting stamina.",
    coverImage: "/src/assets/stamina_cover.png",
    galleryImages: [],
    price: 1078000,
    compareAtPrice: 2695000,
    stockQuantity: 9999,
    sku: "DIG-STAMINA-01",
    brand: "PocketPill",
    specifications: {},
    ingredients: null,
    packageContents: ["Digital E-Book Download"],
    usageInformation: null,
    warnings: null,
    regulatoryInformation: null,
    featured: false,
    active: true,
    seoTitle: "The Stamina Blueprint | PocketPill Shop",
    seoDescription: "The ultimate science-backed guide to optimizing physical resilience and building long-lasting stamina."
  }
];

export function getProductsByCategory(category: ProductCategory) {
  return products.filter(p => p.category === category && p.active);
}

export function getProductBySlug(slug: string) {
  return products.find(p => p.slug === slug && p.active);
}

export function getAllCategories() {
  const categories = new Set(products.filter(p => p.active).map(p => p.category));
  return Array.from(categories);
}
