const misc_materials = [
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
        "hearts_recovered": 1.5,
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
        "hearts_recovered": 1,
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
        "hearts_recovered": 3,
        "dropped_by": [
            "white pigeon",
            "eldin ostrich"
        ],
        "cooking_effect": "",
        "image": "raw_whole_bird.png"
    }
]

const cooking_effects = {
"hearty raddish" : "extra hearts",
"hearty salmon" : "extra hearts",
"hearty durian" : "extra hearts",
"big hearty truffle" : "extra hearts",
"hearty blueshell snail" : "extra hearts",
"hearty raddish" : "extra hearts",
"hearty truffle" : "extra hearts",
"hearty bass" : "extra hearts",
"hearty lizard" : "extra hearts",
"fairy": "energizing",
"raw gourmet meat": "energizing",
"raw whole bird": "energizing",
"raw prime meat": "energizing",
"raw bird thigh": "energizing",
"palm fruit": "energizing",
"hyrule herb": "energizing",
"raw meat": "energizing",
"raw bird drumstick": "energizing",
"hylian rice": "energizing",
"bird egg": "energizing",
"tabantha wheat": "energizing",
"hyrule bass": "energizing",
"sanke carp": "energizing",
"fresh milk": "energizing",
"apple": "energizing",
"wildberry": "energizing",
"hylian shroom": "energizing",
"acorn": "energizing",
"chickaloo tree nut": "energizing",
};

for (let material of misc_materials) {
const material_name = material["name"];
const effect = cooking_effects[material_name]
if (effect) {
    material["cooking_effect"] = effect;
}
}

console.log(misc_materials);