const fs = require('fs');

const NEW_DISHES = [
  // Birthday
  { id: "egg-bajji", name: "Egg Bajji", nameTe: "ఎగ్ బజ్జీ", desc: "Deep-fried egg fritters.", category: "Hot Snacks & Starters", cuisine: "Andhra", veg: false },
  { id: "katta", name: "Katta (Sour gravy / Salan)", nameTe: "కట్టా (సాలన్)", desc: "Tangy gravy served with biryani.", category: "Curries & Gravies", cuisine: "Hyderabadi", veg: true },
  { id: "white-rice", name: "White Rice", nameTe: "వైట్ రైస్", desc: "Steamed white rice.", category: "Biryanis & Rice Specialties", cuisine: "South Indian", veg: true },
  { id: "prawns-fry", name: "Prawns Fry", nameTe: "రొయ్యల ఫ్రై", desc: "Spicy coastal prawns fry.", category: "Prawns Items", cuisine: "Andhra", veg: false },
  { id: "curd", name: "Curd", nameTe: "పెరుగు", desc: "Fresh plain curd.", category: "Curd Chutneys", cuisine: "Indian", veg: true },
  { id: "water-bottle", name: "Water Bottle", nameTe: "వాటర్ బాటిల్", desc: "Packaged drinking water.", category: "Beverages", cuisine: "Indian", veg: true },
  { id: "cool-drink", name: "Cool Drink", nameTe: "కూల్ డ్రింక్", desc: "Assorted soft drinks.", category: "Beverages", cuisine: "Continental", veg: true },
  { id: "saunf", name: "Saunf (Fennel Seeds)", nameTe: "సోంపు", desc: "Digestive fennel seeds.", category: "Accompaniments", cuisine: "Indian", veg: true },
  { id: "poosa", name: "Poosa", nameTe: "పూస", desc: "Sweet crisp spirals.", category: "Sweets", cuisine: "Andhra", veg: true },
  { id: "ragi-sankati", name: "Ragi Sankati", nameTe: "రాగి సంకటి", desc: "Nutritious finger millet balls.", category: "Biryanis & Rice Specialties", cuisine: "Andhra", veg: true },
  { id: "katte-pongali", name: "Katte Pongali", nameTe: "కట్టె పొంగలి", desc: "Savoury rice and lentil porridge.", category: "Breakfast", cuisine: "South Indian", veg: true },
  { id: "peanut-chutney", name: "Peanut (Palli) Chutney", nameTe: "పల్లీ చట్నీ", desc: "Creamy peanut chutney.", category: "Chutneys & Pickles", cuisine: "South Indian", veg: true },
  { id: "ginger-chutney", name: "Ginger (Allam) Chutney", nameTe: "అల్లం పచ్చడి", desc: "Sweet and spicy ginger chutney.", category: "Chutneys & Pickles", cuisine: "Andhra", veg: true },
  { id: "karam-podi", name: "Karam Podi", nameTe: "కారం పొడి", desc: "Spicy roasted lentil powder.", category: "Spice Powders", cuisine: "Andhra", veg: true },
  { id: "ghee", name: "Ghee", nameTe: "నెయ్యి", desc: "Pure clarified butter.", category: "Accompaniments", cuisine: "Indian", veg: true },

  // Reception
  { id: "carrot-halwa", name: "Carrot Halwa", nameTe: "క్యారెట్ హల్వా", desc: "Sweet carrot pudding with nuts.", category: "Sweets", cuisine: "North Indian", veg: true },
  { id: "veg-cutlet", name: "Veg Cutlet & Sauce", nameTe: "వెజ్ కట్లెట్", desc: "Crispy vegetable patties with sauce.", category: "Hot Snacks & Starters", cuisine: "Indian", veg: true },
  { id: "mirchi-cut-bajji", name: "Mirchi Cut Bajji & Sauce", nameTe: "మిర్చి కట్ బజ్జీ", desc: "Fried and sliced stuffed chillies.", category: "Hot Snacks & Starters", cuisine: "Andhra", veg: true },
  { id: "capsicum-butter-masala", name: "Capsicum Butter Masala", nameTe: "క్యాప్సికం బటర్ మసాలా", desc: "Capsicum cooked in rich butter tomato gravy.", category: "Curries & Gravies", cuisine: "North Indian", veg: true },
  { id: "dosakaya-tomato-dal", name: "Dosakaya Tomato Pappu", nameTe: "దోసకాయ టమాటో పప్పు", desc: "Yellow cucumber and tomato dal.", category: "Dals", cuisine: "Andhra", veg: true },
  { id: "mudda-pappu", name: "Mudda Pappu", nameTe: "ముద్ద పప్పు", desc: "Thick, plain boiled toor dal.", category: "Dals", cuisine: "Andhra", veg: true },
  { id: "aratikaya-chepa-pulusu", name: "Aratikaya Chepa Pulusu", nameTe: "అరటికాయ చేప పులుసు", desc: "Raw banana cooked in fish-style tamarind stew.", category: "Curries & Gravies", cuisine: "Andhra", veg: true },
  { id: "bendakaya-fry", name: "Bendakaya Fry", nameTe: "బెండకాయ ఫ్రై", desc: "Crisp lady finger fry.", category: "Fries", cuisine: "Andhra", veg: true },
  { id: "dosakaya-mukkala-chutney", name: "Dosakaya Mukkala Chutney", nameTe: "దోసకాయ ముక్కల పచ్చడి", desc: "Fresh yellow cucumber piece chutney.", category: "Chutneys & Pickles", cuisine: "Andhra", veg: true },

  // Corporate
  { id: "pineapple-rabdi", name: "Pineapple Rabdi Sweet", nameTe: "పైనాపిల్ రబ్డి", desc: "Rich condensed milk with pineapple chunks.", category: "Sweets", cuisine: "North Indian", veg: true },
  { id: "beetroot-halwa", name: "Beetroot Halwa", nameTe: "బీట్‌రూట్ హల్వా", desc: "Sweet and nutritious beetroot pudding.", category: "Sweets", cuisine: "North Indian", veg: true },
  { id: "veg-oriental-dum-biryani", name: "Veg Oriental Dum Biryani", nameTe: "వెజ్ ఓరియంటల్ దమ్ బిర్యానీ", desc: "Fusion veg biryani with oriental spices.", category: "Biryanis & Rice Specialties", cuisine: "Fusion", veg: true },
  { id: "gongura-rice", name: "Gongura Rice", nameTe: "గోంగూర రైస్", desc: "Tangy rice flavored with sorrel leaves.", category: "Biryanis & Rice Specialties", cuisine: "Andhra", veg: true },
  { id: "sambar-rice", name: "Sambar Rice", nameTe: "సాంబార్ రైస్", desc: "Rice cooked with flavorful sambar and ghee.", category: "Biryanis & Rice Specialties", cuisine: "South Indian", veg: true },
  { id: "pav-bhaji", name: "Pav Bhaji", nameTe: "పావ్ భాజీ", desc: "Spiced vegetable mash with buttered bread.", category: "Live Items", cuisine: "North Indian", veg: true },
  { id: "bhel-puri", name: "Bhel Puri", nameTe: "భేల్ పూరి", desc: "Puffed rice tossed with chutneys and veggies.", category: "Live Items", cuisine: "North Indian", veg: true },
  { id: "corn-mixture", name: "Corn Mixture", nameTe: "కార్న్ మిక్స్‌చర్", desc: "Spicy and tangy corn snack.", category: "Snacks", cuisine: "Indian", veg: true },
  { id: "noodles", name: "Noodles", nameTe: "నూడుల్స్", desc: "Stir-fried vegetable noodles.", category: "Live Items", cuisine: "Chinese", veg: true },
  { id: "veg-nuggets", name: "Veg Nuggets (with Mayonnaise)", nameTe: "వెజ్ నగ్గెట్స్", desc: "Crispy vegetable nuggets with mayo.", category: "Hot Snacks & Starters", cuisine: "Continental", veg: true },
  { id: "cheese-balls", name: "Cheese Balls (with Mayonnaise)", nameTe: "చీజ్ బాల్స్", desc: "Deep-fried cheesy bites.", category: "Hot Snacks & Starters", cuisine: "Continental", veg: true },
  { id: "prawn-tikka", name: "Prawn Tikka", nameTe: "ప్రాన్ టిక్కా", desc: "Tandoori marinated prawn skewers.", category: "Prawns Items", cuisine: "North Indian", veg: false },
  { id: "mocktails-5", name: "5 Types of Mocktails", nameTe: "5 రకాల మాక్‌టెయిల్స్", desc: "Assorted refreshing fruit mocktails.", category: "Welcome Drinks", cuisine: "Continental", veg: true },

  // Weddings
  { id: "mango-roll", name: "Mango Roll", nameTe: "మామిడి రోల్", desc: "Sweet rolled mango dessert.", category: "Sweets", cuisine: "Indian", veg: true },
  { id: "kulcha", name: "Kulcha", nameTe: "కుల్చా", desc: "Soft leavened flatbread.", category: "Rotis", cuisine: "North Indian", veg: true },
  { id: "gutti-vankaya-dum-biryani", name: "Gutti Vankaya Dum Biryani", nameTe: "గుత్తి వంకాయ దమ్ బిర్యానీ", desc: "Dum biryani layered with stuffed brinjals.", category: "Biryanis & Rice Specialties", cuisine: "Andhra", veg: true },
  { id: "pudina-rice", name: "Pudina Rice", nameTe: "పుదీనా రైస్", desc: "Aromatic mint flavored rice.", category: "Biryanis & Rice Specialties", cuisine: "South Indian", veg: true },
  { id: "navratna-kurma", name: "Navratna Kurma", nameTe: "నవరత్న కుర్మా", desc: "Rich curry with nine jewels of vegetables and nuts.", category: "Curries & Gravies", cuisine: "North Indian", veg: true },
  { id: "mushroom-cashew-gongura", name: "Mushroom Cashew Gongura Curry", nameTe: "మష్రూమ్ జీడిపప్పు గోంగూర", desc: "Mushrooms and cashew cooked in tangy gongura.", category: "Curries & Gravies", cuisine: "Andhra", veg: true },
  { id: "bendakaya-kaju-fry", name: "Bendakaya Kaju Fry", nameTe: "బెండకాయ జీడిపప్పు ఫ్రై", desc: "Crisp lady finger tossed with roasted cashews.", category: "Fries", cuisine: "Andhra", veg: true },
  { id: "kakarakaya-chips", name: "Kakarakaya Fry Chips", nameTe: "కాకరకాయ ఫ్రై చిప్స్", desc: "Crispy bitter gourd slices.", category: "Fries", cuisine: "Andhra", veg: true },
  { id: "ring-appadam", name: "Ring Appadam", nameTe: "రింగ్ అప్పడం", desc: "Crispy ring-shaped papad.", category: "Accompaniments", cuisine: "Indian", veg: true },
  { id: "majjiga-mirchi-vadiyalu", name: "Majjiga Mirchi & Vadiyalu", nameTe: "మజ్జిగ మిరపకాయలు, వడియాలు", desc: "Sun-dried curd chillies and fritters.", category: "Accompaniments", cuisine: "Andhra", veg: true },
  { id: "navratna-dry-fruit-sweet", name: "Navratna Dry Fruit Sweet", nameTe: "నవరత్న డ్రై ఫ్రూట్ స్వీట్", desc: "Premium sweet loaded with assorted dry fruits.", category: "Sweets", cuisine: "Indian", veg: true },
  { id: "welcome-drink-grape-pineapple", name: "Welcome Drink (Grape, Pineapple Mocktail)", nameTe: "వెల్‌కమ్ డ్రింక్", desc: "Grape and pineapple mocktail.", category: "Welcome Drinks", cuisine: "Continental", veg: true },
  { id: "fruit-stall-live", name: "Fruit Stall (Live)", nameTe: "ఫ్రూట్ స్టాల్", desc: "Freshly cut fruits served live.", category: "Live Items", cuisine: "Continental", veg: true },

  // Temple functions
  { id: "pappulam", name: "Pappulam", nameTe: "పప్పులమ్", desc: "Traditional dal preparation.", category: "Dals", cuisine: "South Indian", veg: true },
  { id: "beerakaya-senagapappu", name: "Beerakaya Senagapappu", nameTe: "బీరకాయ శనగపప్పు", desc: "Ridge gourd cooked with chana dal.", category: "Curries & Gravies", cuisine: "Andhra", veg: true },
  { id: "aloo-chinna-mukkala-fry", name: "Aloo Chinna Mukkala Fry", nameTe: "ఆలూ చిన్న ముక్కల ఫ్రై", desc: "Potato fried in small crisp pieces.", category: "Fries", cuisine: "Andhra", veg: true },
  { id: "punugulu", name: "Punugulu", nameTe: "పునుగులు", desc: "Deep fried batter snack.", category: "Breakfast", cuisine: "Andhra", veg: true },
  { id: "tomato-bath", name: "Tomato Bath", nameTe: "టమాటో బాత్", desc: "Spiced upma cooked with tomatoes.", category: "Breakfast", cuisine: "South Indian", veg: true },
  { id: "chutney-2-types", name: "Chutney (2 Types)", nameTe: "చట్నీ (2 రకాలు)", desc: "Two varieties of fresh chutney.", category: "Chutneys & Pickles", cuisine: "South Indian", veg: true },
  { id: "water-bottle-150", name: "Water Bottle - 150 pcs", nameTe: "వాటర్ బాటిల్ - 150", desc: "Bulk packaged drinking water.", category: "Beverages", cuisine: "Indian", veg: true },

  // House Warming
  { id: "palathalikalu", name: "Palathalikalu", nameTe: "పాలతాలికలు", desc: "Sweet rice noodle pudding.", category: "Sweets", cuisine: "Andhra", veg: true },
  { id: "poornalu", name: "Poornalu", nameTe: "పూర్ణాలు", desc: "Sweet lentil stuffed balls.", category: "Sweets", cuisine: "Andhra", veg: true }
];

const occasionMenu = {
  "Birthday": ["bread-halwa", "egg-bajji", "mutton-dum-biryani", "katta", "raita", "gongura", "white-rice", "chicken-curry", "prawns-fry", "head-meat-curry", "tomato-rasam", "curd", "salad", "water-bottle", "cool-drink", "saunf", "idli", "plain-gare", "poosa", "ragi-sankati", "katte-pongali", "peanut-chutney", "ginger-chutney", "sambar", "karam-podi", "ghee", "masalatea", "filtercoffee"],
  "Reception": ["carrot-halwa", "veg-cutlet", "mirchi-cut-bajji", "rumali-roti", "methi-chaman-curry", "panasa-biryani", "capsicum-butter-masala", "dosakaya-tomato-dal", "mudda-pappu", "pachi-pulusu", "aratikaya-chepa-pulusu", "bendakaya-fry", "baby-corn-65", "dosakaya-mukkala-chutney", "avakaya", "karam-podi", "white-rice", "ghee", "curd", "appadam", "water-bottle", "ice-creams", "sweet-paan", "dal", "mixed-vegetable-curry", "potato-fry", "tomato-chutney"],
  "Corporate": ["pineapple-rabdi", "beetroot-halwa", "pulka", "methi-chaman-curry", "veg-oriental-dum-biryani", "gongura-rice", "paneerbutter", "raita", "chicken-curry", "sambar-rice", "curdrice", "avakaya", "appadam", "water-bottle", "ice-creams", "sweet-paan", "pani-puri", "pav-bhaji", "samosa-chat", "bhel-puri", "corn-mixture", "noodles", "gobi", "spring-rolls", "veg-nuggets", "cheese-balls", "french-fries", "chicken-keema-balls", "prawn-tikka", "chicken65", "mocktails-5"],
  "Wedding": ["pineapple-rabdi", "mango-roll", "hazaman-pakodi", "paneertikka", "kulcha", "methi-chaman-curry", "gutti-vankaya-dum-biryani", "pudina-rice", "navratna-kurma", "raita", "mango-dal", "mushroom-cashew-gongura", "bendakaya-kaju-fry", "kakarakaya-chips", "beerakaya-chutney", "cucumber-avakaya", "sambar", "ulava-charu", "pachi-pulusu", "karivepaku-podi", "ghee", "white-rice", "curd", "ring-appadam", "majjiga-mirchi-vadiyalu", "water-bottle", "navratna-dry-fruit-sweet", "ice-creams", "sweet-paan", "welcome-drink-grape-pineapple", "fruit-stall-live", "pani-puri", "bhel-puri", "samosa-chat", "pav-bhaji", "corn-mixture"],
  "Temple": ["chakra-pongali", "poornam", "plain-gare", "tomato-chutney", "pulihora", "mudda-pappu", "pappulam", "beerakaya-senagapappu", "aloo-chinna-mukkala-fry", "mint-chutney", "tomato-rasam", "sambar", "methi-buttermilk", "white-rice", "curd", "appadam", "ice-creams", "gongura-rice", "paneerbutter", "raita", "idli", "punugulu", "tomato-bath", "chutney-2-types", "karam-podi", "ghee", "water-bottle-150", "filtercoffee", "masalatea"],
  "Housewarming": ["palathalikalu", "plain-gare", "poornalu", "vegbiryani", "mixed-vegetable-curry", "raita", "white-rice", "mango-dal", "potato-fry", "gongura", "drumstick-tomato-curry", "sambar", "curd"]
};

// 1. Update dishes.ts
const dishesPath = "src/data/dishes.ts";
let content = fs.readFileSync(dishesPath, "utf-8");

const newDishesStr = `\nconst NEW_ITEMS: Dish[] = [\n` + NEW_DISHES.map(d => 
  `  d("${d.id}", "${d.name}", "${d.nameTe}", "${d.desc}", "", "${d.category}", "${d.cuisine}", ${d.veg}, ["Our Special Selection"])`
).join(",\n") + `\n];\n`;

content = content.replace("export const DISHES: Dish[] = [", newDishesStr + "\nexport const DISHES: Dish[] = [");
content = content.replace("  ...ROTIS,\n];", "  ...ROTIS,\n  ...NEW_ITEMS,\n];");

fs.writeFileSync(dishesPath, content);

// 2. Update packages.ts
const packagesPath = "src/data/packages.ts";
let pkgContent = fs.readFileSync(packagesPath, "utf-8");

pkgContent += `\nexport const OCCASION_MENU: Record<string, string[]> = ${JSON.stringify(occasionMenu, null, 2)};\n`;
fs.writeFileSync(packagesPath, pkgContent);

console.log("Success");
