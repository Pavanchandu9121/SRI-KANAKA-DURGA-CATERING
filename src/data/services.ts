import type { FaqItem, HighlightItem, Service, Testimonial, WhyChooseItem } from "@/types";

import svcWedding from "@/assets/svc-wedding.jpg";
import svcReception from "@/assets/svc-reception.jpg";
import svcBirthday from "@/assets/svc-birthday.jpg";
import svcCorporate from "@/assets/svc-corporate.jpg";
import svcTemple from "@/assets/svc-temple.jpg";
import svcHousewarming from "@/assets/svc-housewarming.jpg";
import svcOutdoor from "@/assets/svc-outdoor.jpg";
import svcFestival from "@/assets/svc-festival.jpg";

const commonFaqs: Service["faqs"] = [
  {
    q: "How far in advance should we book?",
    qTe: "మేము ఎంత ముందుగా బుక్ చేయాలి?",
    a: "We recommend 3–4 weeks for large events, though we regularly manage bookings at shorter notice depending on the season.",
    aTe: "పెద్ద ఈవెంట్‌లకు 3-4 వారాలు సిఫారసు చేస్తాము, అయినప్పటికీ సీజన్‌ను బట్టి తక్కువ నోటీసులో బుకింగ్‌లను క్రమం తప్పకుండా నిర్వహిస్తాము.",
  },
  {
    q: "Do you travel outside the district?",
    qTe: "మీరు జిల్లా బయటకు వెళ్తారా?",
    a: "Yes. We serve across Andhra Pradesh, with our own transport, cooking crew and serving staff.",
    aTe: "అవును. మేము ఆంధ్రప్రదేశ్ అంతటా సేవలు అందిస్తాము, మా స్వంత రవాణా, వంట సిబ్బంది మరియు సర్వింగ్ స్టాఫ్‌తో.",
  },
  {
    q: "Can the menu be fully customised?",
    qTe: "మెనూను పూర్తిగా అనుకూలీకరించవచ్చా?",
    a: "Absolutely. Start from one of our packages and add, remove or replace any dish — or build a completely custom menu.",
    aTe: "ఖచ్చితంగా. మా ప్యాకేజీలలో ఒకదాని నుండి ప్రారంభించి ఏ వంటకాన్నైనా జోడించండి, తీసివేయండి లేదా భర్తీ చేయండి — లేదా పూర్తిగా అనుకూల మెనూను నిర్మించుకోండి.",
  },
];

export const SERVICES: Service[] = [
  {
    slug: "wedding",
    title: "Wedding Catering",
    titleTe: "పెళ్ళి కేటరింగ్",
    copy: "Make your big day truly unforgettable.",
    copyTe: "మీ పెద్ద రోజును నిజంగా మరపురాని రోజుగా చేయండి.",
    img: svcWedding,
    description: "Multi-day wedding catering handled end to end — muhurtham breakfast, grand lunch buffets, live counters and late-night dinners, all cooked fresh on site by our senior chefs.",
    descriptionTe: "బహుళ-రోజుల పెళ్ళి కేటరింగ్ మొత్తం నిర్వహించబడుతుంది — ముహూర్తం బ్రేక్‌ఫాస్ట్, గ్రాండ్ లంచ్ బఫేలు, లైవ్ కౌంటర్‌లు మరియు లేట్-నైట్ డిన్నర్‌లు, అన్నీ మా సీనియర్ చెఫ్‌లచే సైట్‌లో తాజాగా వండబడతాయి.",
    sampleMenu: [
      { section: "Welcome", sectionTe: "స్వాగతం", items: ["Rose Milk", "Panakam", "Filter Coffee"], itemsTe: ["రోజ్ మిల్క్", "పానకం", "ఫిల్టర్ కాఫీ"] },
      { section: "Starters", sectionTe: "స్టార్టర్‌లు", items: ["Chicken 65", "Paneer Tikka", "Gobi Manchurian"], itemsTe: ["చికెన్ 65", "పనీర్ టిక్కా", "గోబీ మంచూరియన్"] },
      { section: "Main Course", sectionTe: "ప్రధాన వంటకం", items: ["Hyderabadi Chicken Biryani", "Veg Biryani", "Pulka", "Dal Tadka"], itemsTe: ["హైదరాబాదీ చికెన్ బిర్యానీ", "వెజ్ బిర్యానీ", "పుల్కా", "దాల్ తడ్కా"] },
      { section: "Desserts", sectionTe: "డెసర్ట్‌లు", items: ["Gulab Jamun", "Double Ka Meetha", "Fruit Custard"], itemsTe: ["గులాబ్ జామూన్", "డబల్ కా మీఠా", "ఫ్రూట్ కస్టర్డ్"] },
    ],
    faqs: commonFaqs,
  },
  {
    slug: "reception",
    title: "Reception Catering",
    titleTe: "రిసెప్షన్ కేటరింగ్",
    copy: "Celebrate love with delicious cuisine.",
    copyTe: "రుచికరమైన వంటకాలతో ప్రేమను జరుపుకోండి.",
    img: svcReception,
    description: "Elegant evening receptions with curated live counters, continental and Indian buffets, and uniformed serving staff who keep every table attended.",
    descriptionTe: "క్యూరేటెడ్ లైవ్ కౌంటర్‌లు, కాంటినెంటల్ మరియు ఇండియన్ బఫేలు, మరియు ప్రతి టేబుల్‌ను చూసుకునే యూనిఫారమ్ సర్వింగ్ స్టాఫ్‌తో సొగసైన సాయంత్రం రిసెప్షన్‌లు.",
    sampleMenu: [
      { section: "Live Counters", sectionTe: "లైవ్ కౌంటర్‌లు", items: ["Chaat Counter", "Pasta Counter", "Dosa Counter"], itemsTe: ["చాట్ కౌంటర్", "పాస్తా కౌంటర్", "దోశ కౌంటర్"] },
      { section: "Starters", sectionTe: "స్టార్టర్‌లు", items: ["Apollo Fish", "Hara Bhara Kabab", "Chilli Paneer"], itemsTe: ["అపోలో ఫిష్", "హరా భరా కబాబ్", "చిల్లీ పనీర్"] },
      { section: "Main Course", sectionTe: "ప్రధాన వంటకం", items: ["Mutton Curry", "Veg Kolhapuri", "Jeera Rice", "Naan"], itemsTe: ["మటన్ కర్రీ", "వెజ్ కొల్హాపురి", "జీరా రైస్", "నాన్"] },
      { section: "Desserts", sectionTe: "డెసర్ట్‌లు", items: ["Ice Cream Bar", "Rasmalai"], itemsTe: ["ఐస్ క్రీం బార్", "రస్మలై"] },
    ],
    faqs: commonFaqs,
  },
  {
    slug: "birthday",
    title: "Birthday Parties",
    titleTe: "పుట్టినరోజు పార్టీలు",
    copy: "Delicious food for memorable birthdays.",
    copyTe: "గుర్తుండిపోయే పుట్టినరోజులకు రుచికరమైన ఆహారం.",
    img: svcBirthday,
    description: "Playful, crowd-pleasing menus for kids and grown-ups alike — finger food, mocktail bars, snack counters and a dessert table that steals the show.",
    descriptionTe: "పిల్లలు మరియు పెద్దలకు ఇష్టమైన ప్లేఫుల్ మెనూలు — ఫింగర్ ఫుడ్, మొక్‌టెయిల్ బార్‌లు, స్నాక్ కౌంటర్‌లు మరియు ఆకర్షించే డెసర్ట్ టేబుల్.",
    sampleMenu: [
      { section: "Snacks", sectionTe: "స్నాక్‌లు", items: ["Mini Samosa", "Veg Puffs", "French Fries"], itemsTe: ["మినీ సమోసా", "వెజ్ పఫ్స్", "ఫ్రెంచ్ ఫ్రైస్"] },
      { section: "Main Course", sectionTe: "ప్రధాన వంటకం", items: ["Fried Rice", "Chilli Chicken", "Noodles"], itemsTe: ["ఫ్రైడ్ రైస్", "చిల్లీ చికెన్", "నూడుల్స్"] },
      { section: "Desserts", sectionTe: "డెసర్ట్‌లు", items: ["Ice Cream", "Brownie", "Gulab Jamun"], itemsTe: ["ఐస్ క్రీం", "బ్రౌనీ", "గులాబ్ జామూన్"] },
    ],
    faqs: commonFaqs,
  },
  {
    slug: "corporate",
    title: "Corporate Events",
    titleTe: "కార్పొరేట్ ఈవెంట్స్",
    copy: "Professional catering for every occasion.",
    copyTe: "ప్రతి సందర్భానికి ప్రొఫెషనల్ కేటరింగ్.",
    img: svcCorporate,
    description: "Punctual, well-presented catering for conferences, launches, offsites and daily office lunches — with hygiene protocols and clean packaging as standard.",
    descriptionTe: "కాన్ఫరెన్స్‌లు, లాంచ్‌లు, ఆఫ్‌సైట్‌లు మరియు రోజువారీ ఆఫీసు లంచ్‌లకు సమయానికి, చక్కగా ప్రెజెంట్ చేసిన కేటరింగ్ — పరిశుభ్రత ప్రోటోకాల్‌లు మరియు క్లీన్ ప్యాకేజింగ్ ప్రామాణికంగా.",
    sampleMenu: [
      { section: "Breakfast", sectionTe: "బ్రేక్‌ఫాస్ట్", items: ["Idli Sambar", "Upma", "Poori Kurma", "Filter Coffee"], itemsTe: ["ఇడ్లీ సాంబార్", "ఉప్మా", "పూరీ కుర్మా", "ఫిల్టర్ కాఫీ"] },
      { section: "Lunch", sectionTe: "లంచ్", items: ["Veg Biryani", "Curd Rice", "Dal Tadka", "Chapati"], itemsTe: ["వెజ్ బిర్యానీ", "పెరుగన్నం", "దాల్ తడ్కా", "చపాతీ"] },
      { section: "High Tea", sectionTe: "హై టీ", items: ["Veg Sandwich", "Samosa", "Tea & Coffee"], itemsTe: ["వెజ్ శాండ్‌విచ్", "సమోసా", "టీ & కాఫీ"] },
    ],
    faqs: commonFaqs,
  },
  {
    slug: "temple",
    title: "Temple Functions",
    titleTe: "దేవాలయ కార్యక్రమాలు",
    copy: "Traditional taste for auspicious occasions.",
    copyTe: "శుభ సందర్భాలకు సాంప్రదాయ రుచి.",
    img: svcTemple,
    description: "Pure-veg satvik cooking prepared with traditional methods, served on banana leaves, respecting every ritual requirement of your function.",
    descriptionTe: "సాంప్రదాయ పద్ధతులతో తయారు చేసిన శుద్ధ శాకాహార సాత్విక వంట, అరటి ఆకులపై వడ్డించబడుతుంది, మీ కార్యక్రమంలోని ప్రతి ఆచారాన్ని గౌరవిస్తూ.",
    sampleMenu: [
      { section: "Prasadam", sectionTe: "ప్రసాదం", items: ["Pulihora", "Chakkera Pongali", "Daddojanam"], itemsTe: ["పులిహోర", "చక్కెర పొంగలి", "దద్దోజనం"] },
      { section: "Main Course", sectionTe: "ప్రధాన వంటకం", items: ["Sambar", "Rasam", "Vada", "Appadam"], itemsTe: ["సాంబార్", "రసం", "వడ", "అప్పడం"] },
      { section: "Desserts", sectionTe: "డెసర్ట్‌లు", items: ["Laddu", "Payasam"], itemsTe: ["లడ్డు", "పాయసం"] },
    ],
    faqs: commonFaqs,
  },
  {
    slug: "housewarming",
    title: "Housewarming",
    titleTe: "గృహప్రవేశం",
    copy: "Warm meals for your new beginnings.",
    copyTe: "మీ కొత్త ఆరంభాలకు వెచ్చని భోజనం.",
    img: svcHousewarming,
    description: "Gruhapravesam catering with traditional Andhra spreads for family and neighbours, set up quickly and cleanly in and around your new home.",
    descriptionTe: "కుటుంబం మరియు పొరుగువారికి సాంప్రదాయ ఆంధ్ర విందులతో గృహప్రవేశ కేటరింగ్, మీ కొత్త ఇంట్లో మరియు చుట్టుపక్కల త్వరగా మరియు శుభ్రంగా సెటప్ చేయబడుతుంది.",
    sampleMenu: [
      { section: "Breakfast", sectionTe: "బ్రేక్‌ఫాస్ట్", items: ["Idli", "Vada", "Pongal", "Coffee"], itemsTe: ["ఇడ్లీ", "వడ", "పొంగల్", "కాఫీ"] },
      { section: "Lunch", sectionTe: "లంచ్", items: ["Pulihora", "Sambar", "Avakaya", "Curd Rice"], itemsTe: ["పులిహోర", "సాంబార్", "ఆవకాయ", "పెరుగన్నం"] },
      { section: "Desserts", sectionTe: "డెసర్ట్‌లు", items: ["Bobbatlu", "Payasam"], itemsTe: ["బొబ్బట్లు", "పాయసం"] },
    ],
    faqs: commonFaqs,
  },
  {
    slug: "outdoor",
    title: "Outdoor Events",
    titleTe: "బయట ఈవెంట్స్",
    copy: "Full setups anywhere you celebrate.",
    copyTe: "మీరు ఎక్కడ జరుపుకున్నా పూర్తి సెటప్‌లు.",
    img: svcOutdoor,
    description: "Open-air catering with our own cooking units, lighting, dining furniture and serving crew — lawns, farmhouses, riversides and beach venues included.",
    descriptionTe: "మా స్వంత వంట యూనిట్‌లు, లైటింగ్, డైనింగ్ ఫర్నిచర్ మరియు సర్వింగ్ క్రూతో బహిరంగ కేటరింగ్ — లాన్‌లు, ఫామ్‌హౌస్‌లు, నదీ తీరాలు మరియు బీచ్ వేదికలు చేర్చబడ్డాయి.",
    sampleMenu: [
      { section: "Grill", sectionTe: "గ్రిల్", items: ["Tandoori Chicken", "Paneer Tikka", "Grilled Corn"], itemsTe: ["తందూరీ చికెన్", "పనీర్ టిక్కా", "గ్రిల్డ్ కార్న్"] },
      { section: "Main Course", sectionTe: "ప్రధాన వంటకం", items: ["Biryani", "Butter Naan", "Kadai Veg"], itemsTe: ["బిర్యానీ", "బటర్ నాన్", "కడాయి వెజ్"] },
      { section: "Desserts", sectionTe: "డెసర్ట్‌లు", items: ["Ice Cream", "Jalebi"], itemsTe: ["ఐస్ క్రీం", "జిలేబి"] },
    ],
    faqs: commonFaqs,
  },
  {
    slug: "festival",
    title: "Festival Catering",
    titleTe: "పండుగ కేటరింగ్",
    copy: "Grand spreads for community festivities.",
    copyTe: "సమాజ పండుగలకు గొప్ప విందులు.",
    img: svcFestival,
    description: "Large-volume festival and community catering — Sankranti, Ugadi, Dasara and annadanam events served to hundreds of guests without a single delay.",
    descriptionTe: "పెద్ద మొత్తం పండుగ మరియు సమాజ కేటరింగ్ — సంక్రాంతి, ఉగాది, దసరా మరియు అన్నదాన కార్యక్రమాలు వందల మంది అతిథులకు ఒక్క ఆలస్యం లేకుండా వడ్డించబడతాయి.",
    sampleMenu: [
      { section: "Sweets", sectionTe: "స్వీట్‌లు", items: ["Ariselu", "Laddu", "Boorelu"], itemsTe: ["అరిసెలు", "లడ్డు", "బూరెలు"] },
      { section: "Main Course", sectionTe: "ప్రధాన వంటకం", items: ["Pulihora", "Sambar Rice", "Curd Rice"], itemsTe: ["పులిహోర", "సాంబార్ రైస్", "పెరుగన్నం"] },
      { section: "Sides", sectionTe: "సైడ్‌లు", items: ["Vada", "Appadam", "Pickles"], itemsTe: ["వడ", "అప్పడం", "ఊరగాయలు"] },
    ],
    faqs: commonFaqs,
  },
];

export const WHY_CHOOSE: WhyChooseItem[] = [
  { title: "Fresh Ingredients", titleTe: "తాజా పదార్థాలు", copy: "Sourced daily from trusted local suppliers.", copyTe: "నమ్మకమైన స్థానిక సరఫరాదారుల నుండి ప్రతిరోజూ సేకరించబడతాయి." },
  { title: "Professional Chefs", titleTe: "ప్రొఫెషనల్ చెఫ్‌లు", copy: "Senior cooks with decades of regional expertise.", copyTe: "దశాబ్దాల ప్రాంతీయ నైపుణ్యం ఉన్న సీనియర్ వంటగాళ్ళు." },
  { title: "Experienced Staff", titleTe: "అనుభవజ్ఞులైన సిబ్బంది", copy: "Trained, uniformed serving teams at every event.", copyTe: "ప్రతి ఈవెంట్‌లో శిక్షణ పొందిన, యూనిఫారమ్ ధరించిన సర్వింగ్ బృందాలు." },
  { title: "Hygienic Cooking", titleTe: "పరిశుభ్రమైన వంట", copy: "Clean kitchens, safe handling, covered transport.", copyTe: "శుభ్రమైన వంటగదులు, సురక్షిత నిర్వహణ, కవర్ చేసిన రవాణా." },
  { title: "Customized Menus", titleTe: "అనుకూల మెనూలు", copy: "Every dish adjustable to your taste and rituals.", copyTe: "ప్రతి వంటకం మీ రుచి మరియు ఆచారాలకు సర్దుబాటు చేయబడుతుంది." },
  { title: "Timely Delivery", titleTe: "సమయానికి డెలివరీ", copy: "Setup completed well before your first guest.", copyTe: "మీ మొదటి అతిథి రాకముందే సెటప్ పూర్తి." },
  { title: "Affordable Packages", titleTe: "సరసమైన ప్యాకేజీలు", copy: "Transparent quotes with no hidden charges.", copyTe: "దాచిన ఛార్జీలు లేని పారదర్శక కొటేషన్‌లు." },
  { title: "Trusted Service", titleTe: "నమ్మకమైన సేవ", copy: "1000+ celebrations and a decade of referrals.", copyTe: "1000+ వేడుకలు మరియు దశాబ్దం రెఫరల్‌లు." },
];

/*
 * `value` is the gold headline, `label` the line under it, `note` the two-line
 * caption. Kept short on purpose — the row is five columns wide, so anything
 * longer wraps to a third line and breaks the alignment across cards.
 */
export const HIGHLIGHTS: HighlightItem[] = [
  { value: "6+", label: "Years Experience", labelTe: "సంవత్సరాల అనుభవం", note: "Of culinary excellence and trusted service", noteTe: "వంట రంగంలో శ్రేష్ఠత మరియు నమ్మకమైన సేవ" },
  { value: "1000+", label: "Events Completed", labelTe: "పూర్తయిన ఈవెంట్‌లు", note: "Successful celebrations across the state", noteTe: "రాష్ట్రం అంతటా విజయవంతమైన వేడుకలు" },
  { value: "Multi-Cuisine", label: "Specialists", labelTe: "నిపుణులు", note: "Wide range of cuisines to suit every taste", noteTe: "ప్రతి రుచికి సరిపోయే విస్తృత వంటకాలు" },
  { value: "24/7", label: "Support", labelTe: "సపోర్ట్", note: "We're here for you, anytime, anywhere", noteTe: "ఎప్పుడైనా, ఎక్కడైనా మీ కోసం ఉన్నాము" },
  { value: "Across", label: "Andhra Pradesh", labelTe: "ఆంధ్రప్రదేశ్", note: "Delivering happiness to every corner", noteTe: "ప్రతి మూలకు ఆనందాన్ని అందిస్తూ" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ramesh Varma",
    place: "Vijayawada",
    placeTe: "విజయవాడ",
    rating: 5,
    text: "They handled our daughter's wedding for 900 guests without a single complaint. The biryani is still being talked about.",
    textTe: "వారు 900 మంది అతిథులతో మా కూతురు పెళ్ళిని ఒక్క ఫిర్యాదు లేకుండా నిర్వహించారు. ఆ బిర్యానీ గురించి ఇప్పటికీ మాట్లాడుకుంటున్నారు.",
  },
  {
    name: "Sowmya Reddy",
    place: "Guntur",
    placeTe: "గుంటూరు",
    rating: 5,
    text: "Very clean setup, polite staff and food served exactly on time. We booked them again for our housewarming.",
    textTe: "చాలా శుభ్రమైన సెటప్, మర్యాదగా ఉండే స్టాఫ్ మరియు సరిగ్గా సమయానికి వడ్డించిన ఆహారం. మా గృహప్రవేశానికి మళ్ళీ వారిని బుక్ చేసుకున్నాము.",
  },
  {
    name: "Kiran Kumar",
    place: "Rajahmundry",
    placeTe: "రాజమహేంద్రవరం",
    rating: 5,
    text: "Our office annual day catering was flawless — live counters were the highlight of the evening.",
    textTe: "మా ఆఫీసు వార్షికోత్సవ కేటరింగ్ ఖచ్చితంగా ఉంది — లైవ్ కౌంటర్‌లు సాయంత్రం హైలైట్.",
  },
  {
    name: "Lakshmi Prasanna",
    place: "Visakhapatnam",
    placeTe: "విశాఖపట్నం",
    rating: 5,
    text: "Satvik prasadam for our temple function was prepared exactly as per tradition. Truly respectful service.",
    textTe: "మా దేవాలయ కార్యక్రమానికి సాత్విక ప్రసాదం సాంప్రదాయం ప్రకారం ఖచ్చితంగా తయారు చేయబడింది. నిజంగా గౌరవప్రదమైన సేవ.",
  },
];

export const FAQS: FaqItem[] = [
  {
    q: "What areas do you serve?",
    qTe: "మీరు ఏ ప్రాంతాలలో సేవలు అందిస్తారు?",
    a: "We cater across all districts of Andhra Pradesh, and travel to neighbouring states for large weddings on request.",
    aTe: "మేము ఆంధ్రప్రదేశ్‌లోని అన్ని జిల్లాల్లో కేటరింగ్ అందిస్తాము, మరియు అభ్యర్థన మేరకు పెద్ద పెళ్ళిళ్ళ కోసం పొరుగు రాష్ట్రాలకు వెళ్తాము.",
  },
  {
    q: "Is there a minimum guest count?",
    qTe: "కనీస అతిథుల సంఖ్య ఉందా?",
    a: "Our standard minimum is 50 guests, though we handle smaller intimate gatherings during off-season.",
    aTe: "మా ప్రామాణిక కనీసం 50 అతిథులు, అయినప్పటికీ ఆఫ్-సీజన్‌లో చిన్న సన్నిహిత సమావేశాలను నిర్వహిస్తాము.",
  },
  {
    q: "Do you provide serving staff and equipment?",
    qTe: "మీరు సర్వింగ్ స్టాఫ్ మరియు పరికరాలను అందిస్తారా?",
    a: "Yes — serving staff, dining tables, chairs, banana leaves, water service, live counters and cleaning crew can all be added to your booking.",
    aTe: "అవును — సర్వింగ్ స్టాఫ్, డైనింగ్ టేబుల్‌లు, కుర్చీలు, అరటి ఆకులు, నీటి సేవ, లైవ్ కౌంటర్‌లు మరియు క్లీనింగ్ క్రూ అన్నీ మీ బుకింగ్‌కు జోడించవచ్చు.",
  },
  {
    q: "Can we taste the food before booking?",
    qTe: "బుకింగ్ చేయడానికి ముందు ఆహారాన్ని రుచి చూడవచ్చా?",
    a: "Tasting sessions are available at our Vijayawada kitchen for confirmed large events. Contact us to schedule one.",
    aTe: "నిర్ధారిత పెద్ద ఈవెంట్‌ల కోసం మా విజయవాడ కిచెన్‌లో రుచి చూడటం సెషన్‌లు అందుబాటులో ఉన్నాయి. ఒకదాన్ని షెడ్యూల్ చేయడానికి మమ్మల్ని సంప్రదించండి.",
  },
  {
    q: "How do I get a quotation?",
    qTe: "కొటేషన్ ఎలా పొందాలి?",
    a: "Complete the booking request with your event details and menu. Our team reviews it and calls you with a detailed quotation, usually within 24 hours.",
    aTe: "మీ ఈవెంట్ వివరాలు మరియు మెనూతో బుకింగ్ అభ్యర్థనను పూర్తి చేయండి. మా బృందం దాన్ని సమీక్షించి, సాధారణంగా 24 గంటల్లో వివరమైన కొటేషన్‌తో మీకు కాల్ చేస్తుంది.",
  },
  {
    q: "Do you handle pure-veg and satvik requirements?",
    qTe: "మీరు పూర్తి శాకాహార మరియు సాత్విక అవసరాలను నిర్వహిస్తారా?",
    a: "Yes. We maintain separate vegetarian cooking units and can cook fully satvik menus without onion and garlic.",
    aTe: "అవును. మేము ప్రత్యేక శాకాహార వంట యూనిట్‌లను నిర్వహిస్తాము మరియు ఉల్లిపాయ మరియు వెల్లుల్లి లేకుండా పూర్తి సాత్విక మెనూలను వండగలము.",
  },
];
