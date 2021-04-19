const hearts_recovered = {
    "fairy": 5,
    "raw gourmet meat": 3,
    "raw whole bird": 3,
    "raw prime meat": 1.5,
    "raw bird thigh": 1.5,
    "palm fruit": 1,
    "hyrule herb": 1,
    "raw meat": 1,
    "raw bird drumstick": 1,
    "hylian rice": 1,
    "bird egg": 1,
    "tabantha wheat": 1,
    "hyrule bass": 1,
    "sanke carp": 1,
    "fresh milk": 0.5,
    "apple": 0.5,
    "wildberry": 0.5,
    "hylian shroom": 0.5,
    "acorn": 0.25,
    "chickaloo tree nut": 0.25,
    "hearty raddish" : 4,
    "hearty salmon" : 4,
    "hearty durian" : 3,
    "big hearty truffle" : 3,
    "hearty blueshell snail" : 3,
    "hearty raddish" : 2.5,
    "hearty truffle" : 2,
    "hearty bass" : 2,
    "hearty lizard" : 0,
    "fairy" : 5,
    "raw gourmet meat" : 3,
    "raw whole bird" : 3,
    "raw prime meat" : 1.5,
    "raw bird thigh" : 1.5,
    "palm fruit" : 1,
    "hyrule herb" : 1,
    "raw meat" : 1,
    "raw bird drumstick" : 1,
    "hylian rice" : 1,
    "bird egg" : 1,
    "tabantha wheat" : 1,
    "hyrule bass" : 1,
    "sanke carp" : 1,
    "fresh milk" : 0.5,
    "apple" : 0.5,
    "wildberry" : 0.5,
    "hylian shroom" : 0.5,
    "acorn" : 0.25,
    "chickaloo tree nut" : 0.2,
}

// https://www.eurogamer.net/articles/2018-03-02-zelda-breath-of-the-wild-cooking-ingredients-list-bonus-effects-how-to-cook-with-the-cooking-pot-4857

let misc_materials = [
    {
        "id": 207,
        "name": "goat butter",
        "description": "Butter made from the milk of a domesticated white goat. In addition to being used in dishes like stews and meunière, it's often used when making cakes and other sweets",
        "hearts_recovered": "",
        "common_locations": [
            "Shops"
        ],
        "cooking_effect": "",
        "image": "goat_butter.png"
    },
    {
        "id": 208,
        "name": "star fragment",
        "description": "A mysterious stone fragment that fell from the sky. It looks like it would fetch a good price, but you may able to use it in certain recipes as well.",
        "hearts_recovered": "",
        "cooking_effect": "",
        "image": "star_fragment.png",
        "dropped_by": [
            "silver lynel"
        ]
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
        "common_locations": [
            "Shops"
        ],
        "cooking_effect": "",
        "image": "fresh_milk.png"
    },
    {
        "id": 211,
        "name": "acorn",
        "description": "Often found on the ground near trees. Squirrels adore this nut, so you may have competition while foraging. Add one to a meal for a nutty seasoning.",
        "hearts_recovered": "",
        "common_locations": [
            "Trees"
        ],
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
        "common_locations": [
            "Shops",
            "Cutting grass in the Tabantha regions"
        ],
        "cooking_effect": "",
        "image": "tabantha_wheat.png"
    },
    {
        "id": 214,
        "name": "hylian rice",
        "description": "This grain is the favorite among residents of Kakariko Village. It's grown in regions with a lot of water and is quite versatile. Used as an ingredient in things like risotto and rice balls.",
        "hearts_recovered": "",
        "common_locations": [
            "Shops",
            "Cutting grass in Hyrule Field"
        ],
        "cooking_effect": "",
        "image": "hylian_rice.png"
    },
    {
        "id": 215,
        "name": "rock salt",
        "description": "Crystallized salt from the ancient sea commonly used to season meals. Cannot be eaten in this form.",
        "hearts_recovered": "",
        "common_locations": [
            "Shops",
            "Ores"
        ],
        "cooking_effect": "",
        "image": "rock_salt.png"
    },
    {
        "id": 216,
        "name": "cane sugar",
        "description": "When boiled with other ingredients, the cane breaks down into a sweet juice necessary for making cakes and other sweets. It's commonly found in ingredients stores",
        "hearts_recovered": "",
        "common_locations": [
            "Shops"
        ],
        "cooking_effect": "",
        "image": "cane_sugar.png"
    },
    {
        "id": 217,
        "name": "goron spice",
        "description": "Made from several types of spices, this secret Goron seasoning has been handed down for generations. An initial wave of spiciness paves the way for sweetness.",
        "hearts_recovered": "",
        "common_locations": [
            "Shops"
        ],
        "cooking_effect": "",
        "image": "goron_spice.png"
    }
]

for (let material of misc_materials) {
    const name = material["name"];
    const hearts = hearts_recovered[name];
    if (hearts !== undefined) {
        console.log(material.name, hearts);
        material["hearts_recovered"] = hearts;
    }
}

console.log(misc_materials);
