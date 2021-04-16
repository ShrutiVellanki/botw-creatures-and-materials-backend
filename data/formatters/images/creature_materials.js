var monster_materials = [
    {   
        "id": 201,
        "name": "raw gourmet meat",
        "description": "This prized cut of meat is usually from a large animal. Any connoisseur would rank this tender, juicy cut of meat 'gourmet'. Expect an exquisite meal when cooking with this.",
        "hearts_recovered": 3.0,
        "creature_sources": [ 
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
        "common_locations": [
            "Hyrule Castle Dining Hall"
        ],
        "cooking_effect": "",
        "image": ""  
    },
    {
        "id": 202,
        "name": "raw meat",
        "description": "Meat obtained from animals in plains and forests. You can eat it raw, but cooking it will make it more delicious and nutritious.",
        "hearts_recovered": 1.0,
        "creature_sources": [
            "woodland boar", 
            "grassland fox", 
            "mountain goat"
        ],
        "common_locations": [
            "Hyrule Castle Dining Hall"
        ],
        "cooking_effect": "",
        "image": ""  
    },
    {
        "id": 203,
        "name": "raw prime meat",
        "description": "A fresh, high-quality piece of animal meat. This stuff isn't easy to come by, so savor it. Cook it to recover more hearts.",
        "hearts_recovered": 1.5,
        "creature_sources": [
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
        "common_locations": [
            "Hyrule Castle Dining Hall"
        ],
        "cooking_effect": "",
        "image": ""  
    },
    {
        "id": 204,
        "name": "raw bird thigh",
        "description": "A high-quality piece of meat that's hard to come by. You can eat it raw, but cooking it first will recover more hearts.",
        "hearts_recovered": "",
        "creature_sources": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": ""
    },
    {
        "id": 205,
        "name": "raw bird drumstick",
        "description": "This meat is tougher and chewier than a standard steak. Tastes better cooked.",
        "hearts_recovered": "",
        "creature_sources": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": ""
    },
    {
        "id": 206,
        "name": "raw whole bird",
        "description": "This prized meat can be obtained from certain birds. It gets full points for flavor, nutrition, and volume. It pairs perfectly with other ingredients or can be enjoyed alone.",
        "hearts_recovered": "",
        "creature_sources": [],
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