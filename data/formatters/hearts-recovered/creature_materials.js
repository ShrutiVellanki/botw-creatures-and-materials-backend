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

let creature_materials = [
    {
        "id": 201,
        "name": "raw gourmet meat",
        "description": "This prized cut of meat is usually from a large animal. Any connoisseur would rank this tender, juicy cut of meat 'gourmet'. Expect an exquisite meal when cooking with this.",
        "hearts_recovered": 3,
        "dropped_by": [
            "water buffalo",
            "snowcoat fox",
            "maraudo wolf",
            "wasteland coyote",
            "cold-footed wolf",
            "tabantha moose",
            "great-horned rhinoceros",
            "honeyvore bear",
            "grizzlemaw bear"
        ],
        "cooking_effect": "",
        "image": "raw_gourmet_meat.png"
    },
    {
        "id": 202,
        "name": "raw meat",
        "description": "Meat obtained from animals in plains and forests. You can eat it raw, but cooking it will make it more delicious and nutritious.",
        "hearts_recovered": 1,
        "dropped_by": [
            "woodland boar",
            "mountain goat",
            "grassland fox"
        ],
        "cooking_effect": "",
        "image": "raw_meat.png"
    },
    {
        "id": 203,
        "name": "raw prime meat",
        "description": "A fresh, high-quality piece of animal meat. This stuff isn't easy to come by, so savor it. Cook it to recover more hearts.",
        "hearts_recovered": 1.5,
        "dropped_by": [
            "red-tusked boar",
            "mountain buck",
            "mountain doe",
            "water buffalo",
            "snowcoat fox",
            "maraudo wolf",
            "wasteland coyote",
            "cold-footed wolf",
            "tabantha moose",
            "great-horned rhinoceros",
            "honeyvore bear",
            "grizzlemaw bear"
        ],
        "cooking_effect": "",
        "image": "raw_prime_meat.png"
    },
    {
        "id": 204,
        "name": "raw bird thigh",
        "description": "A high-quality piece of meat that's hard to come by. You can eat it raw, but cooking it first will recover more hearts.",
        "hearts_recovered": "",
        "dropped_by": [
            "rainbow pigeon",
            "hotfeather pigeon",
            "white pigeon",
            "islander hawk",
            "eldin ostrich"
        ],
        "cooking_effect": "",
        "image": "raw_bird_thigh.png"
    },
    {
        "id": 205,
        "name": "raw bird drumstick",
        "description": "This meat is tougher and chewier than a standard steak. Tastes better cooked.",
        "hearts_recovered": "",
        "dropped_by": [
            "wood pigeon",
            "mountain crow",
            "bright-chested duck",
            "blue-winged heron",
            "pink heron",
            "seagull"
        ],
        "cooking_effect": "",
        "image": "raw_bird_drumstick.png"
    },
    {
        "id": 206,
        "name": "raw whole bird",
        "description": "This prized meat can be obtained from certain birds. It gets full points for flavor, nutrition, and volume. It pairs perfectly with other ingredients or can be enjoyed alone.",
        "hearts_recovered": "",
        "dropped_by": [
            "white pigeon",
            "eldin ostrich"
        ],
        "cooking_effect": "",
        "image": "raw_whole_bird.png"
    }
];

for (let material of creature_materials) {
    const name = material["name"];
    const hearts = hearts_recovered[name];
    if (hearts !== undefined) {
        console.log(material.name, hearts);
        material["hearts_recovered"] = hearts;
    }
}

console.log(creature_materials);

