let locations_mapping = {};

var items = [
    {
      "No.": 170,
      "Item": "Apple",
      "Location": ["Hyrule Field","East Necluda"]
    },
    {
      "No.": 171,
      "Item": "Palm Fruit",
      "Location": ["East Necluda","Gerudo Desert"]
    },
    {
      "No.": 172,
      "Item": "Wildberry",
      "Location": ["Gerudo Highlands","Hebra Mountains"]
    },
    {
      "No.": 173,
      "Item": "Hearty Durian",
      "Location": ["West Necluda","Faron Grasslands"]
    },
    {
      "No.": 174,
      "Item": "Hydromelon",
      "Location": ["Gerudo Desert","Faron Grasslands"]
    },
    {
      "No.": 175,
      "Item": "Spicy Pepper",
      "Location": ["Gerudo Desert","Tabantha Frontier"]
    },
    {
      "No.": 176,
      "Item": "Voltfruit",
      "Location": ["Gerudo Desert","Gerudo Highlands"]
    },
    {
      "No.": 177,
      "Item": "Fleet-Lotus Seeds",
      "Location": ["Lanayru Wetlands","Lanayru Great Spring"]
    },
    {
      "No.": 178,
      "Item": "Mighty Bananas",
      "Location": ["Faron"]
    },
    {
      "No.": 179,
      "Item": "Hylian Shroom",
      "Location": ["Hyrule Field","West Necluda"]
    },
    {
      "No.": 180,
      "Item": "Endura Shroom",
      "Location": ["Hyrule Ridge","Hyrule Field"]
    },
    {
      "No.": 181,
      "Item": "Stamella Shroom",
      "Location": ["Hyrule Ridge","Hyrule Field"]
    },
    {
      "No.": 182,
      "Item": "Hearty Truffle",
      "Location": ["Great Hyrule Forest","Hyrule Field"]
    },
    {
      "No.": 183,
      "Item": "Big Hearty Truffle",
      "Location": ["Hebra Mountains","Great Hyrule Forest"]
    },
    {
      "No.": 184,
      "Item": "Chillshroom",
      "Location": ["Hebra Mountains","Mount Lanayru"]
    },
    {
      "No.": 185,
      "Item": "Sunshroom",
      "Location": ["Eldin Canyon","Gerudo Highlands"]
    },
    {
      "No.": 186,
      "Item": "Zapshroom",
      "Location": ["Deep Akkala","Gerudo Highlands"]
    },
    {
      "No.": 187,
      "Item": "Rushroom",
      "Location": ["Gerudo Highlands","Hyrule Ridge"]
    },
    {
      "No.": 188,
      "Item": "Razorshroom",
      "Location": ["Great Hyrule Forest","Tabantha Frontier"]
    },
    {
      "No.": 189,
      "Item": "Ironshroom",
      "Location": ["West Necluda","East Necluda"]
    },
    {
      "No.": 190,
      "Item": "Silent Shroom",
      "Location": ["Lanayru Great Spring","West Necluda"]
    },
    {
      "No.": 191,
      "Item": "Hyrule Herb",
      "Location": ["Hyrule Field","Akkala Highlands"]
    },
    {
      "No.": 192,
      "Item": "Hearty Radish",
      "Location": ["Hyrule Ridge","East Necluda"]
    },
    {
      "No.": 193,
      "Item": "Big Hearty Radish",
      "Location": ["Akkala Highlands","Lanayru Great Spring"]
    },
    {
      "No.": 194,
      "Item": "Cool Safflina",
      "Location": ["Hebra Mountains","Gerudo Highlands"]
    },
    {
      "No.": 195,
      "Item": "Warm Safflina",
      "Location": ["Gerudo Desert","Hyrule Ridge"]
    },
    {
      "No.": 196,
      "Item": "Electric Safflina",
      "Location": ["Gerudo Desert","Hyrule Ridge"]
    },
    {
      "No.": 197,
      "Item": "Swift Carrot",
      "Location": ["Kakariko Village"]
    },
    {
      "No.": 198,
      "Item": "Endura Carrot",
      "Location": ["Hyrule Ridge","Faron Grasslands"]
    },
    {
      "No.": 199,
      "Item": "Fortified Pumpkin",
      "Location": ["Kakariko Village"]
    },
    {
      "No.": 200,
      "Item": "Swift Violet",
      "Location": ["Gerudo Highlands","Hebra Mountains"]
    },
    {
      "No.": 201,
      "Item": "Mighty Thistle",
      "Location": ["West Necluda","Faron Grasslands"]
    },
    {
      "No.": 202,
      "Item": "Armoranth",
      "Location": ["Akkala Highlands","Hyrule Ridge"]
    },
    {
      "No.": 203,
      "Item": "Blue Nightshade",
      "Location": ["West Necluda","Lanayru Great Spring"]
    },
    {
      "No.": 204,
      "Item": "Silent Princess",
      "Location": ["Hyrule Ridge","West Necluda"]
    },
    {
      "No.": 205,
      "Item": "Courser Bee Honey",
      "Location": ["Hyrule Field","Tabantha Frontier"]
    },
    {
     "Item": "Acorn",
     "Location": ["Trees"]
   },
   {
     "Item": "Bird Egg",
     "Location": []
   },
   {
     "Item": "Cane Sugar",
     "Location": ["Shop"]
   },
   {
     "Item": "Chickaloo Tree Nut",
     "Location": []
   },
   {
     "Item": "Flint",
     "Location": ["Ores","Monster Drop"]
   },
   {
     "Item": "Fresh Milk",
     "Location": ["Shop"]
   },
   {
     "Item": "Goat Butter",
     "Location": ["Shop"]
   },
   {
     "Item": "Goron Spice",
     "Location": ["Shop"]
   },
   {
     "Item": "Hylian Rice",
     "Location": ["Shops","Cutting grass in Hyrule Field"]
   },
   {
     "Item": "Monster Extract",
     "Location": ["Kilton's Monster Shop"]
   },
   {
     "Item": "Raw Bird Drumstick",
     "Location": []
   },
   {
     "Item": "Raw Bird Thigh",
     "Location": []
   },
   {
     "Item": "Raw Gourmet Meat",
     "Location": []
   },
   {
     "Item": "Raw Meat",
     "Location": []
   },
   {
     "Item": "Raw Prime Meat",
     "Location": []
   },
   {
     "Item": "Raw Whole Bird",
     "Location": []
   },
   {
     "Item": "Rock Salt",
     "Location": ["Shops","Ores"]
   },
   {
     "Item": "Tabantha Wheat",
     "Location": ["Shops","Cutting grass in the Tabantha regions"]
   },
   {
     "Item": "Wood",
     "Location": ["Trees"]
   }
   ];
var misc_items = [
    {
        "id": 207,
        "name": "goat butter",
        "description": "Butter made from the milk of a domesticated white goat. In addition to being used in dishes like stews and meunière, it's often used when making cakes and other sweets",
        "hearts_recovered": "",
        "common_locations": [],
        "cooking_effect": "",
        "image": "goat_butter.png"
    },
    {
        "id": 208,
        "name": "star fragment",
        "description": "A mysterious stone fragment that fell from the sky. It looks like it would fetch a good price, but you may able to use it in certain recipes as well.",
        "hearts_recovered": "",
        "common_locations": [],
        "cooking_effect": "",
        "image": "star_fragment.png"
    },
    {
        "id": 209,
        "name": "bird egg",
        "description": "A fresh bird egg necessary for making dishes such as omelets or crepes. You can snag them from birds' nests if you're sneaky. Nutritious and delicious, perfect for cooking.",
        "hearts_recovered": "",
        "common_locations": [],
        "cooking_effect": "",
        "image": "bird_egg.png",
        "dropped_by": [
            "cucco"
        ]
    },
    {
        "id": 210,
        "name": "fresh milk",
        "description": "This fresh milk comes from Hateno cows and white goats kept in the village. It's delicious on its own but can also be used as an ingredient in soups and stews.",
        "hearts_recovered": "",
        "common_locations": [],
        "cooking_effect": "",
        "image": "fresh_milk.png"
    },
    {
        "id": 211,
        "name": "acorn",
        "description": "Often found on the ground near trees. Squirrels adore this nut, so you may have competition while foraging. Add one to a meal for a nutty seasoning.",
        "hearts_recovered": "",
        "common_locations": [],
        "cooking_effect": "",
        "image": "acorn.png",
        "dropped_by": [
            "bushy-tailed squirrel"
        ]
    },
    {
        "id": 212,
        "name": "chickaloo tree nut",
        "description": "Small birds love this nut. You can eat it raw for a minor effect, but it can also be added as a spice to other recipes.",
        "hearts_recovered": "",
        "common_locations": [],
        "cooking_effect": "",
        "image": "chickaloo_tree_nut.png",
        "dropped_by": [
            "common sparrow",
            "red sparrow",
            "blue sparrow",
            "rainbow sparrow",
            "sand sparrow",
            "golden sparrow"
        ]
    },
    {
        "id": 213,
        "name": "tabantha wheat",
        "description": "This grain is cultivated extensively on the Tabantha Plains. It's ground finely with a millstone to be used in cooking. Use it to make things such as stews and breads.",
        "hearts_recovered": "",
        "common_locations": [],
        "cooking_effect": "",
        "image": "tabantha_wheat.png"
    },
    {
        "id": 214,
        "name": "hylian rice",
        "description": "This grain is the favorite among residents of Kakariko Village. It's grown in regions with a lot of water and is quite versatile. Used as an ingredient in things like risotto and rice balls.",
        "hearts_recovered": "",
        "common_locations": [],
        "cooking_effect": "",
        "image": "hylian_rice.png"
    },
    {
        "id": 215,
        "name": "rock salt",
        "description": "Crystallized salt from the ancient sea commonly used to season meals. Cannot be eaten in this form.",
        "hearts_recovered": "",
        "common_locations": [],
        "cooking_effect": "",
        "image": "rock_salt.png"
    },
    {
        "id": 216,
        "name": "cane sugar",
        "description": "When boiled with other ingredients, the cane breaks down into a sweet juice necessary for making cakes and other sweets. It's commonly found in ingredients stores",
        "hearts_recovered": "",
        "common_locations": [],
        "cooking_effect": "",
        "image": "cane_sugar.png"
    },
    {
        "id": 217,
        "name": "goron spice",
        "description": "Made from several types of spices, this secret Goron seasoning has been handed down for generations. An initial wave of spiciness paves the way for sweetness.",
        "hearts_recovered": "",
        "common_locations": [],
        "cooking_effect": "",
        "image": "goron_spice.png"
    }
];

for (let item of items) {
    let item_name = item["Item"].toLowerCase();
    locations_mapping[item_name] = item.Location;
}

for (let item of misc_items) {
    let item_name = item["name"];
    item.common_locations = locations_mapping[item_name];
}

console.log(misc_items);