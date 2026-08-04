import svcWedding from "@/assets/svc-wedding.jpg";
import svcReception from "@/assets/svc-reception.jpg";
import svcBirthday from "@/assets/svc-birthday.jpg";
import svcCorporate from "@/assets/svc-corporate.jpg";
import svcTemple from "@/assets/svc-temple.jpg";
import svcHousewarming from "@/assets/svc-housewarming.jpg";
import svcOutdoor from "@/assets/svc-outdoor.jpg";
import svcFestival from "@/assets/svc-festival.jpg";
import heroBiryani from "@/assets/hero-biryani.jpg";
import aboutKitchen from "@/assets/about-kitchen.jpg";
import galleryLive from "@/assets/gallery-live.jpg";

export const CONTACT = {
  phone: "+91 91234 56789",
  phoneHref: "tel:+919123456789",
  whatsapp: "https://wa.me/919123456789",
  email: "hello@srikanakadurgacaterings.in",
  address: "Beside Sai Temple, Main Road, Vijayawada, Andhra Pradesh 520010",
  hours: [
    { day: "Monday – Saturday", time: "8:00 AM – 9:00 PM" },
    { day: "Sunday", time: "9:00 AM – 6:00 PM" },
    { day: "Event Support", time: "24×7" },
  ],
  mapsEmbed:
    "https://www.google.com/maps?q=Vijayawada%2C%20Andhra%20Pradesh&output=embed",
};

export const IMAGES = { heroBiryani, aboutKitchen, galleryLive };

export type Service = {
  slug: string;
  title: string;
  copy: string;
  img: string;
  description: string;
  sampleMenu: { section: string; items: string[] }[];
  faqs: { q: string; a: string }[];
};

const commonFaqs = [
  {
    q: "How far in advance should we book?",
    a: "We recommend 3–4 weeks for large events, though we regularly manage bookings at shorter notice depending on the season.",
  },
  {
    q: "Do you travel outside the district?",
    a: "Yes. We serve across Andhra Pradesh, with our own transport, cooking crew and serving staff.",
  },
  {
    q: "Can the menu be fully customised?",
    a: "Absolutely. Start from one of our packages and add, remove or replace any dish — or build a completely custom menu.",
  },
];

export const SERVICES: Service[] = [
  {
    slug: "wedding",
    title: "Wedding Catering",
    copy: "Make your big day truly unforgettable.",
    img: svcWedding,
    description:
      "Multi-day wedding catering handled end to end — muhurtham breakfast, grand lunch buffets, live counters and late-night dinners, all cooked fresh on site by our senior chefs.",
    sampleMenu: [
      { section: "Welcome", items: ["Rose Milk", "Panakam", "Filter Coffee"] },
      { section: "Starters", items: ["Chicken 65", "Paneer Tikka", "Gobi Manchurian"] },
      { section: "Main Course", items: ["Hyderabadi Chicken Biryani", "Veg Biryani", "Pulka", "Dal Tadka"] },
      { section: "Desserts", items: ["Gulab Jamun", "Double Ka Meetha", "Fruit Custard"] },
    ],
    faqs: commonFaqs,
  },
  {
    slug: "reception",
    title: "Reception Catering",
    copy: "Celebrate love with delicious cuisine.",
    img: svcReception,
    description:
      "Elegant evening receptions with curated live counters, continental and Indian buffets, and uniformed serving staff who keep every table attended.",
    sampleMenu: [
      { section: "Live Counters", items: ["Chaat Counter", "Pasta Counter", "Dosa Counter"] },
      { section: "Starters", items: ["Apollo Fish", "Hara Bhara Kabab", "Chilli Paneer"] },
      { section: "Main Course", items: ["Mutton Curry", "Veg Kolhapuri", "Jeera Rice", "Naan"] },
      { section: "Desserts", items: ["Ice Cream Bar", "Rasmalai"] },
    ],
    faqs: commonFaqs,
  },
  {
    slug: "birthday",
    title: "Birthday Parties",
    copy: "Delicious food for memorable birthdays.",
    img: svcBirthday,
    description:
      "Playful, crowd-pleasing menus for kids and grown-ups alike — finger food, mocktail bars, snack counters and a dessert table that steals the show.",
    sampleMenu: [
      { section: "Snacks", items: ["Mini Samosa", "Veg Puffs", "French Fries"] },
      { section: "Main Course", items: ["Fried Rice", "Chilli Chicken", "Noodles"] },
      { section: "Desserts", items: ["Ice Cream", "Brownie", "Gulab Jamun"] },
    ],
    faqs: commonFaqs,
  },
  {
    slug: "corporate",
    title: "Corporate Events",
    copy: "Professional catering for every occasion.",
    img: svcCorporate,
    description:
      "Punctual, well-presented catering for conferences, launches, offsites and daily office lunches — with hygiene protocols and clean packaging as standard.",
    sampleMenu: [
      { section: "Breakfast", items: ["Idli Sambar", "Upma", "Poori Kurma", "Filter Coffee"] },
      { section: "Lunch", items: ["Veg Biryani", "Curd Rice", "Dal Tadka", "Chapati"] },
      { section: "High Tea", items: ["Veg Sandwich", "Samosa", "Tea & Coffee"] },
    ],
    faqs: commonFaqs,
  },
  {
    slug: "temple",
    title: "Temple Functions",
    copy: "Traditional taste for auspicious occasions.",
    img: svcTemple,
    description:
      "Pure-veg satvik cooking prepared with traditional methods, served on banana leaves, respecting every ritual requirement of your function.",
    sampleMenu: [
      { section: "Prasadam", items: ["Pulihora", "Chakkera Pongali", "Daddojanam"] },
      { section: "Main Course", items: ["Sambar", "Rasam", "Vada", "Appadam"] },
      { section: "Desserts", items: ["Laddu", "Payasam"] },
    ],
    faqs: commonFaqs,
  },
  {
    slug: "housewarming",
    title: "Housewarming",
    copy: "Warm meals for your new beginnings.",
    img: svcHousewarming,
    description:
      "Gruhapravesam catering with traditional Andhra spreads for family and neighbours, set up quickly and cleanly in and around your new home.",
    sampleMenu: [
      { section: "Breakfast", items: ["Idli", "Vada", "Pongal", "Coffee"] },
      { section: "Lunch", items: ["Pulihora", "Sambar", "Avakaya", "Curd Rice"] },
      { section: "Desserts", items: ["Bobbatlu", "Payasam"] },
    ],
    faqs: commonFaqs,
  },
  {
    slug: "outdoor",
    title: "Outdoor Events",
    copy: "Full setups anywhere you celebrate.",
    img: svcOutdoor,
    description:
      "Open-air catering with our own cooking units, lighting, dining furniture and serving crew — lawns, farmhouses, riversides and beach venues included.",
    sampleMenu: [
      { section: "Grill", items: ["Tandoori Chicken", "Paneer Tikka", "Grilled Corn"] },
      { section: "Main Course", items: ["Biryani", "Butter Naan", "Kadai Veg"] },
      { section: "Desserts", items: ["Ice Cream", "Jalebi"] },
    ],
    faqs: commonFaqs,
  },
  {
    slug: "festival",
    title: "Festival Catering",
    copy: "Grand spreads for community festivities.",
    img: svcFestival,
    description:
      "Large-volume festival and community catering — Sankranti, Ugadi, Dasara and annadanam events served to hundreds of guests without a single delay.",
    sampleMenu: [
      { section: "Sweets", items: ["Ariselu", "Laddu", "Boorelu"] },
      { section: "Main Course", items: ["Pulihora", "Sambar Rice", "Curd Rice"] },
      { section: "Sides", items: ["Vada", "Appadam", "Pickles"] },
    ],
    faqs: commonFaqs,
  },
];

export const WHY_CHOOSE = [
  { title: "Fresh Ingredients", copy: "Sourced daily from trusted local suppliers." },
  { title: "Professional Chefs", copy: "Senior cooks with decades of regional expertise." },
  { title: "Experienced Staff", copy: "Trained, uniformed serving teams at every event." },
  { title: "Hygienic Cooking", copy: "Clean kitchens, safe handling, covered transport." },
  { title: "Customized Menus", copy: "Every dish adjustable to your taste and rituals." },
  { title: "Timely Delivery", copy: "Setup completed well before your first guest." },
  { title: "Affordable Packages", copy: "Transparent quotes with no hidden charges." },
  { title: "Trusted Service", copy: "1000+ celebrations and a decade of referrals." },
];

export const HIGHLIGHTS = [
  { value: "10+", label: "Years Experience", note: "Of culinary excellence and trusted service" },
  { value: "1000+", label: "Successful Events", note: "Celebrations delivered across the state" },
  { value: "Multi", label: "Cuisine Kitchens", note: "Andhra, North Indian, Chinese & more" },
  { value: "24×7", label: "Support", note: "We're here for you, anytime, anywhere" },
  { value: "Statewide", label: "Service", note: "Delivering happiness to every district" },
];

export type Dish = {
  id: string;
  name: string;
  desc: string;
  category: string;
  cuisine: string;
  veg: boolean;
  popular?: boolean;
  isNew?: boolean;
  packages: string[];
};

export const MENU_CATEGORIES = [
  "Breakfast",
  "Welcome Drinks",
  "Starters",
  "Main Course",
  "Rice",
  "Curries",
  "Rotis",
  "Desserts",
  "Ice Cream",
  "Live Counters",
  "Beverages",
  "Pickles",
  "Accompaniments",
];

const d = (
  id: string,
  name: string,
  desc: string,
  category: string,
  cuisine: string,
  veg: boolean,
  packages: string[],
  extra: Partial<Dish> = {},
): Dish => ({ id, name, desc, category, cuisine, veg, packages, ...extra });

export const DISHES: Dish[] = [
  d("idli", "Idli Sambar", "Steamed rice cakes with hot sambar and chutney.", "Breakfast", "South Indian", true, ["Silver", "Gold", "Traditional Andhra"], { popular: true }),
  d("poori", "Poori Kurma", "Puffed pooris with spiced potato kurma.", "Breakfast", "South Indian", true, ["Gold", "Premium"]),
  d("upma", "Upma", "Soft semolina upma tempered with cashews.", "Breakfast", "South Indian", true, ["Silver"]),
  d("dosa", "Ghee Karam Dosa", "Crisp dosa with Andhra karam podi and ghee.", "Breakfast", "Andhra", true, ["Gold", "Traditional Andhra"], { popular: true }),
  d("rosemilk", "Rose Milk", "Chilled milk with rose syrup and basil seeds.", "Welcome Drinks", "Indian", true, ["Silver", "Gold", "Premium"]),
  d("panakam", "Panakam", "Traditional jaggery, ginger and cardamom cooler.", "Welcome Drinks", "Andhra", true, ["Traditional Andhra"]),
  d("mojito", "Virgin Mojito", "Mint, lime and soda over crushed ice.", "Welcome Drinks", "Continental", true, ["Premium", "Wedding Special"], { isNew: true }),
  d("chicken65", "Chicken 65", "Spicy, crispy and flavorful chicken starter.", "Starters", "Andhra", false, ["Gold", "Premium", "Wedding Special"], { popular: true }),
  d("paneertikka", "Paneer Tikka", "Char-grilled paneer in tandoori marinade.", "Starters", "North Indian", true, ["Gold", "Premium"], { popular: true }),
  d("gobi", "Gobi Manchurian", "Crispy cauliflower florets tossed in manchurian sauce.", "Starters", "Chinese", true, ["Silver", "Gold"]),
  d("apollofish", "Apollo Fish", "Boneless fish tossed with curry leaves and chilli.", "Starters", "Andhra", false, ["Premium", "Wedding Special"]),
  d("harabhara", "Hara Bhara Kabab", "Spinach and green pea patties.", "Starters", "North Indian", true, ["Silver", "Gold"]),
  d("chickenbiryani", "Hyderabadi Chicken Biryani", "Tender chicken dum-cooked with fragrant rice.", "Rice", "Hyderabadi", false, ["Gold", "Premium", "Wedding Special"], { popular: true }),
  d("vegbiryani", "Veg Biryani", "Aromatic basmati rice cooked with mixed vegetables.", "Rice", "Hyderabadi", true, ["Silver", "Gold", "Premium"], { popular: true }),
  d("jeerarice", "Jeera Rice", "Fragrant basmati rice tempered with cumin.", "Rice", "North Indian", true, ["Silver", "Gold"]),
  d("pulihora", "Pulihora", "Tamarind rice with peanuts and curry leaves.", "Rice", "Andhra", true, ["Traditional Andhra"]),
  d("curdrice", "Daddojanam", "Creamy curd rice with a light tempering.", "Rice", "Andhra", true, ["Silver", "Traditional Andhra"]),
  d("paneerbutter", "Paneer Butter Masala", "Soft paneer cubes in rich butter tomato gravy.", "Curries", "North Indian", true, ["Gold", "Premium"], { popular: true }),
  d("dal", "Dal Tadka", "Yellow lentils tempered with spices and herbs.", "Curries", "North Indian", true, ["Silver", "Gold"]),
  d("muttoncurry", "Mutton Curry", "Succulent mutton in traditional spicy gravy.", "Curries", "Andhra", false, ["Premium", "Wedding Special"]),
  d("gutti", "Gutti Vankaya", "Stuffed brinjal in peanut sesame masala.", "Curries", "Andhra", true, ["Traditional Andhra"], { isNew: true }),
  d("sambar", "Sambar", "Lentil stew with vegetables and tamarind.", "Curries", "South Indian", true, ["Silver", "Traditional Andhra"]),
  d("pulka", "Pulka", "Soft Indian flatbread made with wheat flour.", "Rotis", "North Indian", true, ["Silver", "Gold", "Premium"]),
  d("naan", "Butter Naan", "Tandoor-baked naan brushed with butter.", "Rotis", "North Indian", true, ["Gold", "Premium"]),
  d("chapati", "Chapati", "Everyday soft wheat rotis.", "Rotis", "North Indian", true, ["Silver"]),
  d("gulab", "Gulab Jamun", "Soft cottage cheese dumplings in sugar syrup.", "Desserts", "Indian", true, ["Silver", "Gold", "Premium"], { popular: true }),
  d("doubleka", "Double Ka Meetha", "Fried bread pudding in saffron milk.", "Desserts", "Hyderabadi", true, ["Gold", "Wedding Special"]),
  d("payasam", "Payasam", "Milk and vermicelli kheer with dry fruits.", "Desserts", "South Indian", true, ["Traditional Andhra"]),
  d("bobbatlu", "Bobbatlu", "Sweet stuffed flatbread with ghee.", "Desserts", "Andhra", true, ["Traditional Andhra"]),
  d("custard", "Fruit Custard", "Fresh fruits in creamy custard.", "Desserts", "Continental", true, ["Silver", "Gold"]),
  d("vanilla", "Vanilla Scoop", "Classic vanilla ice cream.", "Ice Cream", "Continental", true, ["Gold", "Premium"]),
  d("kulfi", "Malai Kulfi", "Slow-cooked milk kulfi with pistachio.", "Ice Cream", "Indian", true, ["Premium", "Wedding Special"], { popular: true }),
  d("chaat", "Chaat Counter", "Pani puri, bhel and sev puri, made to order.", "Live Counters", "North Indian", true, ["Premium", "Wedding Special"], { popular: true }),
  d("pasta", "Pasta Counter", "Penne tossed live in red or white sauce.", "Live Counters", "Continental", true, ["Premium"], { isNew: true }),
  d("dosacounter", "Dosa Counter", "Live dosas with three chutneys.", "Live Counters", "South Indian", true, ["Gold", "Premium"]),
  d("filtercoffee", "Filter Coffee", "Strong South Indian decoction coffee.", "Beverages", "South Indian", true, ["Silver", "Gold", "Premium"]),
  d("masalatea", "Masala Tea", "Spiced tea brewed with ginger and cardamom.", "Beverages", "Indian", true, ["Silver", "Gold"]),
  d("buttermilk", "Spiced Buttermilk", "Chilled majjiga with curry leaves.", "Beverages", "Andhra", true, ["Traditional Andhra"]),
  d("avakaya", "Avakaya", "Classic Andhra mango pickle.", "Pickles", "Andhra", true, ["Traditional Andhra", "Silver"]),
  d("gongura", "Gongura Pachadi", "Tangy sorrel leaf chutney.", "Pickles", "Andhra", true, ["Traditional Andhra"], { popular: true }),
  d("appadam", "Appadam", "Crisp fried papad.", "Accompaniments", "Andhra", true, ["Silver", "Gold", "Traditional Andhra"]),
  d("salad", "Garden Salad", "Fresh cut vegetables with lemon.", "Accompaniments", "Continental", true, ["Gold", "Premium"]),
  d("raita", "Mixed Raita", "Curd with onion, cucumber and tomato.", "Accompaniments", "North Indian", true, ["Gold", "Premium"]),
];

export const PACKAGES = [
  { name: "Silver", note: "Simple, well-loved everyday spread." },
  { name: "Gold", note: "Our most-booked balanced celebration menu." },
  { name: "Premium", note: "Grand spread with live counters and desserts." },
  { name: "Traditional Andhra", note: "Authentic satvik and regional classics." },
  { name: "Wedding Special", note: "Curated for large wedding gatherings." },
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

export const TESTIMONIALS = [
  {
    name: "Ramesh Varma",
    place: "Vijayawada",
    rating: 5,
    text: "They handled our daughter's wedding for 900 guests without a single complaint. The biryani is still being talked about.",
  },
  {
    name: "Sowmya Reddy",
    place: "Guntur",
    rating: 5,
    text: "Very clean setup, polite staff and food served exactly on time. We booked them again for our housewarming.",
  },
  {
    name: "Kiran Kumar",
    place: "Rajahmundry",
    rating: 5,
    text: "Our office annual day catering was flawless — live counters were the highlight of the evening.",
  },
  {
    name: "Lakshmi Prasanna",
    place: "Visakhapatnam",
    rating: 5,
    text: "Satvik prasadam for our temple function was prepared exactly as per tradition. Truly respectful service.",
  },
];

export const FAQS = [
  {
    q: "What areas do you serve?",
    a: "We cater across all districts of Andhra Pradesh, and travel to neighbouring states for large weddings on request.",
  },
  {
    q: "Is there a minimum guest count?",
    a: "Our standard minimum is 50 guests, though we handle smaller intimate gatherings during off-season.",
  },
  {
    q: "Do you provide serving staff and equipment?",
    a: "Yes — serving staff, dining tables, chairs, banana leaves, water service, live counters and cleaning crew can all be added to your booking.",
  },
  {
    q: "Can we taste the food before booking?",
    a: "Tasting sessions are available at our Vijayawada kitchen for confirmed large events. Contact us to schedule one.",
  },
  {
    q: "How do I get a quotation?",
    a: "Complete the booking request with your event details and menu. Our team reviews it and calls you with a detailed quotation, usually within 24 hours.",
  },
  {
    q: "Do you handle pure-veg and satvik requirements?",
    a: "Yes. We maintain separate vegetarian cooking units and can cook fully satvik menus without onion and garlic.",
  },
];

export const GALLERY_CATEGORIES = ["Food", "Buffet", "Events", "Kitchen", "Live Counters"];

export const GALLERY = [
  { src: heroBiryani, alt: "Biryani served in a brass handi", category: "Food" },
  { src: svcWedding, alt: "Wedding mandap catering setup", category: "Events" },
  { src: svcReception, alt: "Reception buffet hall", category: "Buffet" },
  { src: galleryLive, alt: "Live sweet counter at a wedding", category: "Live Counters" },
  { src: aboutKitchen, alt: "Chefs cooking in the central kitchen", category: "Kitchen" },
  { src: svcOutdoor, alt: "Outdoor buffet under string lights", category: "Buffet" },
  { src: svcFestival, alt: "Festival sweets in brass vessels", category: "Food" },
  { src: svcTemple, alt: "Temple prasadam service", category: "Events" },
  { src: svcCorporate, alt: "Corporate lunch service", category: "Events" },
  { src: svcBirthday, alt: "Birthday party snack table", category: "Food" },
  { src: svcHousewarming, alt: "Housewarming meal setup", category: "Buffet" },
];
