export type Service = {
  slug: string;
  title: string;
  titleTe: string;
  copy: string;
  copyTe: string;
  img: string;
  description: string;
  descriptionTe: string;
  sampleMenu: {
    section: string;
    sectionTe: string;
    items: string[];
    itemsTe: string[];
  }[];
  faqs: { q: string; qTe: string; a: string; aTe: string }[];
};

export type Dish = {
  id: string;
  name: string;
  nameTe: string;
  desc: string;
  descTe: string;
  category: string;
  cuisine: string;
  veg: boolean;
  popular?: boolean;
  isNew?: boolean;
  packages: string[];
  /*
   * Basename of the photo in assets/dishes, without the extension. Only needed
   * when a dish shares another dish's photograph — by default the lookup uses
   * the dish `id`, so dropping <id>.jpg into that folder is enough.
   */
  photo?: string;
};

export type Testimonial = {
  name: string;
  place: string;
  placeTe: string;
  rating: number;
  text: string;
  textTe: string;
};

export type WhyChooseItem = {
  title: string;
  titleTe: string;
  copy: string;
  copyTe: string;
};

export type HighlightItem = {
  value: string;
  label: string;
  labelTe: string;
  note: string;
  noteTe: string;
};

export type FaqItem = {
  q: string;
  qTe: string;
  a: string;
  aTe: string;
};

export type PackageItem = {
  name: string;
  nameTe: string;
  note: string;
  noteTe: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  altTe: string;
  category: string;
};
