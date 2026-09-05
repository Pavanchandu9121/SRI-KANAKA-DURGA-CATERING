import type { PackageItem } from "@/types";

export const PACKAGES: PackageItem[] = [
  { name: "Silver", nameTe: "సిల్వర్", note: "Simple, well-loved everyday spread.", noteTe: "సాధారణమైన, అందరికీ ఇష్టమైన ప్రతిరోజూ విస్తరణ." },
  { name: "Gold", nameTe: "గోల్డ్", note: "Our most-booked balanced celebration menu.", noteTe: "మా అత్యధికంగా బుక్ అయిన సమతుల్య వేడుక మెనూ." },
  { name: "Premium", nameTe: "ప్రీమియం", note: "Grand spread with live counters and desserts.", noteTe: "లైవ్ కౌంటర్‌లు మరియు డెసర్ట్‌లతో గొప్ప విస్తరణ." },
  { name: "Traditional Andhra", nameTe: "సాంప్రదాయ ఆంధ్ర", note: "Authentic satvik and regional classics.", noteTe: "ప్రామాణికమైన సాత్విక మరియు ప్రాంతీయ క్లాసిక్‌లు." },
  { name: "Wedding Special", nameTe: "వెడ్డింగ్ స్పెషల్", note: "Curated for large wedding gatherings.", noteTe: "పెద్ద పెళ్ళి సమావేశాల కోసం క్యూరేట్ చేయబడింది." },
];

export const ADDITIONAL_SERVICES = [
  "Serving Staff",
  "Dining Tables",
  "Chairs",
  "Banana Leaves",
  "Disposable Plates",
  "Live Counters",
  "Tea & Coffee",
  "Sweet Stall",
  "Water Service",
  "Decoration",
  "Lighting",
  "Music System",
  "Cleaning Staff",
];

export const EVENT_TYPES = [
  "Wedding",
  "Reception",
  "Birthday",
  "Corporate",
  "Temple",
  "Festival",
  "Housewarming",
  "Other",
];

// Maps a service slug (see @/data/services) to its canonical booking event
// type, so "Book this service" preselects the right option on the booking form.
export const SERVICE_EVENT_TYPE: Record<string, string> = {
  wedding: "Wedding",
  reception: "Reception",
  birthday: "Birthday",
  corporate: "Corporate",
  temple: "Temple",
  housewarming: "Housewarming",
  outdoor: "Other",
  festival: "Festival",
};
