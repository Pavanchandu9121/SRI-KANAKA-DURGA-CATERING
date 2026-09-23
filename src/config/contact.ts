import heroBiryani from "@/assets/hero-biryani.jpg";
import aboutKitchen from "@/assets/about-kitchen-v2.jpg";
import galleryLive from "@/assets/gallery-live-v2.jpg";

/** Single source of truth for all contact details across the site. */
export const CONTACT = {
  phone: "+91 9247364197",
  phoneHref: "tel:+919247364197",
  whatsapp: "https://wa.me/919247364197",
  email: "srikanakadurgacaterings112@gmail.com",
  address: "Beside Sai Temple, Main Road, Gollapudi, Andhra Pradesh 521225",
  addressTe: "సాయి టెంపుల్ పక్కన, మెయిన్ రోడ్, విజయవాడ, ఆంధ్రప్రదేశ్ 521225",
  hours: [
    { day: "Monday – Saturday", dayTe: "సోమవారం – శనివారం", time: "8:00 AM – 9:00 PM", timeTe: "ఉదయం 8:00 – రాత్రి 9:00" },
    { day: "Sunday", dayTe: "ఆదివారం", time: "9:00 AM – 6:00 PM", timeTe: "ఉదయం 9:00 – సాయంత్రం 6:00" },
    { day: "Event Support", dayTe: "ఈవెంట్ సపోర్ట్", time: "24×7", timeTe: "24×7" },
  ],
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3824.5529960276135!2d80.57932517514621!3d16.54864958420247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDMyJzU1LjEiTiA4MMKwMzQnNTQuOCJF!5e0!3m2!1sen!2sin!4v1788779884618!5m2!1sen!2sin",
  instagram: "https://www.instagram.com/srikanakadurgacaterings",
};

/** Web3Forms access key — safe for client-side use per Web3Forms docs. */
export const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export const IMAGES = { heroBiryani, aboutKitchen, galleryLive };
