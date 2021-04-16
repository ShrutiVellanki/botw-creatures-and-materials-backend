 var monster_materials = [
        {
            "id": 207,
            "name": "goat butter",
            "description": "Butter made from the milk of a domesticated white goat. In addition to being used in dishes like stews and meunière, it's often used when making cakes and other sweets",
            "hearts_recovered": "",
            "common_locations": [],
            "cooking_effect": "",
            "image": ""
        },
        {
            "id": 208,
            "name": "star fragment",
            "description": "A mysterious stone fragment that fell from the sky. It looks like it would fetch a good price, but you may able to use it in certain recipes as well.",
            "hearts_recovered": "",
            "common_locations": [],
            "cooking_effect": "",
            "image": ""
        },
        {
            "id": 209,
            "name": "bird egg",
            "description": "A fresh bird egg necessary for making dishes such as omelets or crepes. You can snag them from birds' nests if you're sneaky. Nutritious and delicious, perfect for cooking.",
            "hearts_recovered": "",
            "common_locations": [],
            "cooking_effect": "",
            "image": ""
        },
        {
            "id": 210,
            "name": "fresh milk",
            "description": "This fresh milk comes from Hateno cows and white goats kept in the village. It's delicious on its own but can also be used as an ingredient in soups and stews.",
            "hearts_recovered": "",
            "common_locations": [],
            "cooking_effect": "",
            "image": ""
        },
        {
            "id": 211,
            "name": "acorn",
            "description": "Often found on the ground near trees. Squirrels adore this nut, so you may have competition while foraging. Add one to a meal for a nutty seasoning.",
            "hearts_recovered": "",
            "common_locations": [],
            "cooking_effect": "",
            "image": ""
        },
        {
            "id": 212,
            "name": "chickaloo tree nut",
            "description": "Small birds love this nut. You can eat it raw for a minor effect, but it can also be added as a spice to other recipes.",
            "hearts_recovered": "",
            "common_locations": [],
            "cooking_effect": "",
            "image": ""
        },
        {
            "id": 213,
            "name": "tabantha wheat",
            "description": "This grain is cultivated extensively on the Tabantha Plains. It's ground finely with a millstone to be used in cooking. Use it to make things such as stews and breads.",
            "hearts_recovered": "",
            "common_locations": [],
            "cooking_effect": "",
            "image": ""
        },
        {
            "id": 214,
            "name": "hylian rice",
            "description": "This grain is the favorite among residents of Kakariko Village. It's grown in regions with a lot of water and is quite versatile. Used as an ingredient in things like risotto and rice balls.",
            "hearts_recovered": "",
            "common_locations": [],
            "cooking_effect": "",
            "image": ""
        },
        {
            "id": 215,
            "name": "rock salt",
            "description": "Crystallized salt from the ancient sea commonly used to season meals. Cannot be eaten in this form.",
            "hearts_recovered": "",
            "common_locations": [],
            "cooking_effect": "",
            "image": ""
        },
        {
            "id": 216,
            "name": "cane sugar",
            "description": "When boiled with other ingredients, the cane breaks down into a sweet juice necessary for making cakes and other sweets. It's commonly found in ingredients stores",
            "hearts_recovered": "",
            "common_locations": [],
            "cooking_effect": "",
            "image": ""
        },
        {
            "id": 217,
            "name": "goron spice",
            "description": "Made from several types of spices, this secret Goron seasoning has been handed down for generations. An initial wave of spiciness paves the way for sweetness.",
            "hearts_recovered": "",
            "common_locations": [],
            "cooking_effect": "",
            "image": ""
        }
]

for (let material of monster_materials) {
    let name = material["name"];
    name = name.split("'").join("27");
    name = name.split(" ").join('_');
    material["image"] = name + ".png";
}

console.log(monster_materials);