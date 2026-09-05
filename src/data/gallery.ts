import type { GalleryItem } from "@/types";

import heroBiryani from "@/assets/hero-biryani.jpg";
import svcWedding from "@/assets/svc-wedding.jpg";
import svcReception from "@/assets/svc-reception.jpg";
import svcOutdoor from "@/assets/svc-outdoor.jpg";
import svcFestival from "@/assets/svc-festival.jpg";
import svcTemple from "@/assets/svc-temple.jpg";
import svcCorporate from "@/assets/svc-corporate.jpg";
import svcBirthday from "@/assets/svc-birthday.jpg";
import svcHousewarming from "@/assets/svc-housewarming.jpg";
import aboutKitchen from "@/assets/about-kitchen.jpg";
import galleryLive from "@/assets/gallery-live.jpg";

export const GALLERY_CATEGORIES = ["Food", "Buffet", "Events", "Kitchen", "Live Counters"];

export const GALLERY: GalleryItem[] = [
  { src: heroBiryani, alt: "Biryani served in a brass handi", altTe: "ఇత్తడి హండీలో వడ్డించిన బిర్యానీ", category: "Food" },
  { src: svcWedding, alt: "Wedding mandap catering setup", altTe: "పెళ్ళి మండపం కేటరింగ్ సెటప్", category: "Events" },
  { src: svcReception, alt: "Reception buffet hall", altTe: "రిసెప్షన్ బఫే హాల్", category: "Buffet" },
  { src: galleryLive, alt: "Live sweet counter at a wedding", altTe: "పెళ్ళిలో లైవ్ స్వీట్ కౌంటర్", category: "Live Counters" },
  { src: aboutKitchen, alt: "Chefs cooking in the central kitchen", altTe: "సెంట్రల్ కిచెన్‌లో వంట చేస్తున్న చెఫ్‌లు", category: "Kitchen" },
  { src: svcOutdoor, alt: "Outdoor buffet under string lights", altTe: "స్ట్రింగ్ లైట్ల కింద బయట బఫే", category: "Buffet" },
  { src: svcFestival, alt: "Festival sweets in brass vessels", altTe: "ఇత్తడి పాత్రలలో పండుగ స్వీట్లు", category: "Food" },
  { src: svcTemple, alt: "Temple prasadam service", altTe: "దేవాలయ ప్రసాదం సేవ", category: "Events" },
  { src: svcCorporate, alt: "Corporate lunch service", altTe: "కార్పొరేట్ లంచ్ సేవ", category: "Events" },
  { src: svcBirthday, alt: "Birthday party snack table", altTe: "పుట్టినరోజు పార్టీ స్నాక్ టేబుల్", category: "Food" },
  { src: svcHousewarming, alt: "Housewarming meal setup", altTe: "గృహప్రవేశ భోజన సెటప్", category: "Buffet" },
];
