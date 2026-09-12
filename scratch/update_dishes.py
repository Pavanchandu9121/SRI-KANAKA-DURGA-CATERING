import re

with open(r"D:\SKDC 2\delish-visuals-web\src\data\dishes.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Add SPECIAL constant
content = content.replace('const ALL =', 'const SPECIAL = ["Our Special Selection"];\nconst ALL =')

# 1. CLASSICS
# Add new items at the end of CLASSICS list
new_classics = """
  d("pink-cherry-shot", "Pink Cherry Shot", "పింక్ చెర్రీ షాట్", "Refreshing sweet cherry shot.", "తాజా తీపి చెర్రీ షాట్.", "Welcome Drinks", "Continental", true, SPECIAL, { isNew: true }),
  d("muskmelon-shot", "Muskmelon Shot", "కర్బూజ షాట్", "Cool muskmelon cooler.", "చల్లని కర్బూజ పానీయం.", "Welcome Drinks", "Continental", true, SPECIAL, { isNew: true }),
  d("butter-ghee", "Butter & Ghee", "వెన్న మరియు నెయ్యి", "Fresh butter and melted ghee.", "తాజా వెన్న మరియు కరిగించిన నెయ్యి.", "Accompaniments", "Indian", true, SPECIAL),
  d("vadiyalu-crisps", "Vadiyalu (Crisp Fritters)", "వడియాలు", "Sun-dried rice and dal crisps.", "ఎండబెట్టిన బియ్యం మరియు పప్పు వడియాలు.", "Accompaniments", "Andhra", true, SPECIAL),
  d("challa-mirchi", "Sun-dried Curd Chillies", "చల్ల మిర్చి", "Spicy chillies marinated in curd and sun-dried.", "పెరుగులో నానబెట్టి ఎండబెట్టిన మిరపకాయలు.", "Accompaniments", "Andhra", true, SPECIAL),
"""
classics_end = content.find('];\n\n/* ──────────────────────────── Non-veg catering')
content = content[:classics_end] + new_classics + content[classics_end:]

# Update raita
content = content.replace(
    'd("raita", "Mixed Raita", "మిక్స్‌డ్ రైతా", "Curd with onion, cucumber and tomato.", "ఉల్లిపాయ, దోసకాయ మరియు టమాటాతో పెరుగు.", "Curd Chutneys", "North Indian", true, ["Gold", "Premium"])',
    'd("raita", "Mixed Raita", "మిక్స్‌డ్ రైతా", "Curd with onion, cucumber and tomato.", "ఉల్లిపాయ, దోసకాయ మరియు టమాటాతో పెరుగు.", "Curd Chutneys", "North Indian", true, ["Gold", "Premium", ...SPECIAL])'
)

# Update sambar
content = content.replace(
    'd("sambar", "Sambar", "సాంబార్", "Lentil stew with vegetables and tamarind.", "కూరగాయలు మరియు చింతపండుతో పప్పు కూర.", "Rasam, Sambar & Soups", "South Indian", true, ["Silver", "Traditional Andhra"])',
    'd("sambar", "Sambar", "సాంబార్", "Lentil stew with vegetables and tamarind.", "కూరగాయలు మరియు చింతపండుతో పప్పు కూర.", "Rasam, Sambar & Soups", "South Indian", true, ["Silver", "Traditional Andhra", ...SPECIAL])'
)

# 2. VEG_STARTERS
veg_starters_end = content.find('  ],\n);\n\nconst VEG_RICE')
new_veg_starters = """    ["paneer-stick", "Paneer Stick", "పనీర్ స్టిక్", "Crisp fried paneer fingers.", "కరకరలాడే వేయించిన పనీర్ స్టిక్స్.", { packages: SPECIAL }],
    ["noodles-pop", "Noodles Pop", "నూడుల్స్ పాప్", "Crunchy noodle pops.", "కరకరలాడే నూడుల్స్ పాప్స్.", { packages: SPECIAL }],
    ["veg-tikki", "Vegetable Tikki", "వెజిటబుల్ టిక్కి", "Crispy spiced vegetable patties.", "కరకరలాడే మసాలా కూరగాయల ప్యాటీలు.", { packages: SPECIAL }],
"""
content = content[:veg_starters_end] + new_veg_starters + content[veg_starters_end:]
# Update plain-gare
content = content.replace('["plain-gare", "Plain Gare (Vada)", "ప్లెయిన్ గారె", "The classic urad dal vada, fried to order.", "ఆర్డర్ మీద వేయించిన సాంప్రదాయ మినప గారె.", {}]', '["plain-gare", "Plain Gare (Vada)", "ప్లెయిన్ గారె", "The classic urad dal vada, fried to order.", "ఆర్డర్ మీద వేయించిన సాంప్రదాయ మినప గారె.", { packages: SPECIAL }]')

# 3. SWEETS
sweets_end = content.find(']);\n\nconst VEG_STARTERS')
new_sweets = """  ["bhopal-sweet", "Bhopal Sweet", "భోపాల్ స్వీట్", "Traditional Bhopal delicacy.", "సాంప్రదాయ భోపాల్ స్వీట్.", { packages: SPECIAL }],
  ["malle-sweet", "Malle Sweet", "మల్లె స్వీట్", "Soft floral sweet.", "మెత్తని పూల స్వీట్.", { packages: SPECIAL }],
  ["jelly-sweet", "Fruit Jelly", "ఫ్రూట్ జెల్లీ", "Soft, fruit-flavoured jelly bites.", "పండ్ల రుచితో మెత్తని జెల్లీ ముక్కలు.", { packages: SPECIAL }],
"""
content = content[:sweets_end] + new_sweets + content[sweets_end:]
# Update poornam
content = content.replace('{ photo: "bobbatlu", cuisine: "Andhra", packages: ANDHRA }', '{ photo: "bobbatlu", cuisine: "Andhra", packages: [...ANDHRA, ...SPECIAL] }')

# 4. ROTIS
rotis_end = content.find(']);\n\nexport const DISHES:')
new_rotis = """  ["masala-kulcha", "Masala Kulcha", "మసాలా కుల్చా", "Spiced soft flatbread.", "మసాలా వేసిన మెత్తని రొట్టె.", { packages: SPECIAL }],
"""
content = content[:rotis_end] + new_rotis + content[rotis_end:]

# 5. CURRIES
curries_end = content.find('  ],\n);\n\nconst DALS =')
new_curries = """    ["kadai-paneer-veg", "Kadai Paneer", "కడాయి పనీర్", "Paneer tossed with capsicum and spices.", "క్యాప్సికమ్ మరియు మసాలాలతో పనీర్.", { cuisine: "North Indian", packages: SPECIAL }],
    ["navratna-korma-curry", "Navratna Korma", "నవరత్న కుర్మా", "Rich curry with nine vegetables and fruits.", "తొమ్మిది కూరగాయలు మరియు పండ్లతో గొప్ప కూర.", { packages: SPECIAL }],
    ["kaju-drumstick-curry", "Cashew Drumstick Curry", "కాజు మునగకాయ కూర", "Drumstick and cashew in a rich gravy.", "గొప్ప గ్రేవీలో మునగకాయ మరియు జీడిపప్పు.", { packages: SPECIAL }],
"""
content = content[:curries_end] + new_curries + content[curries_end:]

# 6. VEG_RICE
vegrice_end = content.find('  ],\n);\n\nconst CURD_CHUTNEYS =')
new_vegrice = """    ["gongura-mushroom-biryani", "Gongura Mushroom Biryani", "గోంగూర మష్రూమ్ బిర్యానీ", "Mushroom biryani with a sorrel tang.", "గోంగూర పులుపుతో మష్రూమ్ బిర్యానీ.", { cuisine: "Andhra", packages: SPECIAL }],
"""
content = content[:vegrice_end] + new_vegrice + content[vegrice_end:]
# update panasa-biryani
content = content.replace('{ photo: "vegbiryani", cuisine: "Andhra" }', '{ photo: "vegbiryani", cuisine: "Andhra", packages: SPECIAL }')

# 7. FRIES
fries_end = content.find(']);\n\nconst SIXTY_FIVES')
new_fries = """  ["ivy-gourd-chana-fry", "Ivy Gourd Chana Fry", "దొండకాయ శనగ ఫ్రై", "Crisp ivy gourd tossed with chana.", "కరకరలాడే దొండకాయ మరియు శనగలు.", { packages: SPECIAL }],
"""
content = content[:fries_end] + new_fries + content[fries_end:]

# 8. SIXTY_FIVES
sixty_fives_end = content.find(']);\n\nconst PICKLES')
new_sixty_fives = """  ["veg-chicken-65", "Veg Chicken - 65", "వెజ్ చికెన్ - 65", "Soy-based mock chicken in fiery 65 masala.", "కారపు 65 మసాలాలో సోయా ఆధారిత చికెన్.", { packages: SPECIAL }],
"""
content = content[:sixty_fives_end] + new_sixty_fives + content[sixty_fives_end:]

# 9. DALS
dals_end = content.find(']);\n\nconst FRIES')
new_dals = """  ["methi-tomato-dal", "Fenugreek Tomato Dal", "మెంతి టమాటో పప్పు", "Dal with tomato and fresh fenugreek.", "టమాటో మరియు తాజా మెంతికూరతో పప్పు.", { packages: SPECIAL }],
"""
content = content[:dals_end] + new_dals + content[dals_end:]

# 10. RASAMS
rasams_end = content.find('  ],\n);\n\nconst ROTIS')
new_rasams = """    ["ulava-charu-cream", "Ulava Charu with Cream", "క్రీమ్‌తో ఉలవ చారు", "Rich horsegram soup finished with fresh cream.", "తాజా క్రీమ్‌తో ఉలవ చారు.", { cuisine: "Andhra", packages: SPECIAL }],
"""
content = content[:rasams_end] + new_rasams + content[rasams_end:]

# 11. PICKLES
pickles_end = content.find('  ],\n);\n\nconst PODULU')
new_pickles = """    ["garlic-mango-pickle", "Garlic Mango Pickle", "వెల్లుల్లి ఆవకాయ", "Mango pickle spiked with whole garlic.", "వెల్లుల్లితో మామిడి ఆవకాయ.", { cuisine: "Andhra", packages: SPECIAL }],
    ["mixed-pickle-special", "Mixed Pickle", "మిక్స్‌డ్ పచ్చడి", "Assorted traditional pickle.", "సాంప్రదాయ మిశ్రమ పచ్చడి.", { packages: SPECIAL }],
"""
content = content[:pickles_end] + new_pickles + content[pickles_end:]

# 12. PODULU
# Update karivepaku-podi
content = content.replace('["karivepaku-podi", "Curry Leaves Podi", "కరివేపాకు పొడి", "Roasted curry leaf powder for hot rice and ghee.", "వేడి అన్నం, నెయ్యికి వేయించిన కరివేపాకు పొడి.", {}]', '["karivepaku-podi", "Curry Leaves Podi", "కరివేపాకు పొడి", "Roasted curry leaf powder for hot rice and ghee.", "వేడి అన్నం, నెయ్యికి వేయించిన కరివేపాకు పొడి.", { packages: SPECIAL }]')
# Update kandi-podi
content = content.replace('["kandi-podi", "Kandi Podi", "కంది పొడి", "Toor dal podi, the everyday Andhra staple.", "రోజువారీ ఆంధ్ర ప్రధానం — కంది పొడి.", {}]', '["kandi-podi", "Kandi Podi", "కంది పొడి", "Toor dal podi, the everyday Andhra staple.", "రోజువారీ ఆంధ్ర ప్రధానం — కంది పొడి.", { packages: SPECIAL }]')

# 13. CURD_CHUTNEYS
curd_chutneys_end = content.find('  ],\n);\n\nconst CURRIES =')
new_curd_chutneys = """    ["pot-curd", "Pot Curd (Kunda Perugu)", "కుండ పెరుగు", "Thick curd set in earthen pots.", "మట్టి కుండలో తోడుకున్న చిక్కని పెరుగు.", { packages: SPECIAL }],
"""
content = content[:curd_chutneys_end] + new_curd_chutneys + content[curd_chutneys_end:]

# 14. LIVE
live_end = content.find(']);\n\n/* ────────────────────────────── Veg catering ────────────────────────────── */')
new_live = """  ["calcutta-plain-paan", "Calcutta & Plain Paan", "కలకత్తా & ప్లెయిన్ పాన్", "Choice of Calcutta sweet paan or plain paan.", "కలకత్తా స్వీట్ పాన్ లేదా ప్లెయిన్ పాన్ ఎంపిక.", { packages: SPECIAL }],
  ["butterscotch-icecream", "Butterscotch Ice Cream", "బటర్‌స్కాచ్ ఐస్ క్రీం", "Rich butterscotch ice cream scoops.", "గొప్ప బటర్‌స్కాచ్ ఐస్ క్రీం.", { packages: SPECIAL }],
"""
content = content[:live_end] + new_live + content[live_end:]
# Update fruit-salad
content = content.replace('{ photo: "custard" }', '{ photo: "custard", packages: [...PREMIUM, ...SPECIAL] }')

with open(r"D:\SKDC 2\delish-visuals-web\src\data\dishes.ts", "w", encoding="utf-8") as f:
    f.write(content)
