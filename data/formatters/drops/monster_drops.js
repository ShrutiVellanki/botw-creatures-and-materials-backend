var monsters = [
    {
        "id": 84,
        "name": "chuchu",
        "description": "This low-level, gel-based monster can be found all over Hyrule. It tends to spring its attacks on unsuspecting prey from the ground or from trees. Its strength varies by size, and the type of jelly it drops varies depending on whether the Chuchu was heated up, cooled down, or shocked.",
        "common_locations": [
            "Hyrule Field",
            "West Necluda"
        ],
        "drops": [
            "chuchu jelly"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/chuchu/image"
    },
    {
        "id": 85,
        "name": "fire chuchu",
        "description": "This low-level gel monster is engulfed in flames. Its strength varies depending on its size. It tends to explode if attacked from close range, so the use of spears, arrows, and other ranged weapons is advised.",
        "common_locations": [
            "Eldin Canyon",
            "Eldin Mountains"
        ],
        "drops": [
            "red chuchu jelly"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/fire_chuchu/image"
    },
    {
        "id": 86,
        "name": "ice chuchu",
        "description": "This low-level gel monster is engulfed in freezing-cold air. Its strength varies depending on its size. It tends to explode if attacked from close range, so the use of spears, arrows, and other ranged weapons is advised.",
        "common_locations": [
            "Gerudo Highlands",
            "Hebra Mountains"
        ],
        "drops": [
            "white chuchu jelly"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/ice_chuchu/image"
    },
    {
        "id": 87,
        "name": "electric chuchu",
        "description": "This low-level gel monster is engulfed in electricity. Its strength varies depending on its size. It tends to explode if attacked from close range, so the use of spears, arrows, and other ranged weapons is advised.",
        "common_locations": [
            "Gerudo Highlands",
            "East Necluda"
        ],
        "drops": [
            "yellow chuchu jelly"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/electric_chuchu/image"
    },
    {
        "id": 88,
        "name": "keese",
        "description": "The unpredictable flight pattern of this noctoural bat-like species can make fighting them a nuisance, but they're weak enough to fell with a single strike. Sometimes they'll attack in packs, but even then, a pack can be sent packing with a single attack.",
        "common_locations": [
            "Hyrule Field",
            "East Necluda"
        ],
        "drops": [
            "keese wing",
            "keese eyeball"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/keese/image"
    },
    {
        "id": 89,
        "name": "fire keese",
        "description": "The fire that engulfs the bodies of these bat-like Keese makes them more dangerous than the standard type. They're capable of setting fire to anything they touch.",
        "common_locations": [
            "Eldin Canyon",
            "Eldin Mountains"
        ],
        "drops": [
            "fire keese wing",
            "keese eyeball"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/fire_keese/image"
    },
    {
        "id": 90,
        "name": "ice keese",
        "description": "The intense frost that engulfs the bodies of these bat-like Keese makes them more dangerous than the standard type. They're capable of freezing anything they touch.",
        "common_locations": [
            "Hebra Mountains",
            "Gerudo Highlands"
        ],
        "drops": [
            "ice keese wing",
            "keese eyeball"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/ice_keese/image"
    },
    {
        "id": 91,
        "name": "electric keese",
        "description": "The electricity that engulfs the bodies of these bat-like Keese makes them more dangerous than the standard type. They're capable of shocking anything they touch.",
        "common_locations": [
            "Lanayru Great Spring",
            "East Necluda"
        ],
        "drops": [
            "electric keese wing",
            "keese eyeball"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/electric_keese/image"
    },
    {
        "id": 92,
        "name": "water octorok",
        "description": "Although they spend most of their time in water, the drop in barometric pressure that occurs when it rains causes an air sac within these octopus-like monsters to inflate and lift them into the air. The rocks they spit out can be bounced back with a shield.",
        "common_locations": [
            "West Necluda",
            "Hyrule Field"
        ],
        "drops": [
            "octorok tentacle",
            "octo balloon",
            "octorok eyeball"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/water_octorok/image"
    },
    {
        "id": 93,
        "name": "forest octorok",
        "description": "Although originally an aquatic species, this type has adapted to life in the forest. They hide among the trees, disguising themselves as grass or unassuming shrubbery, and then attack when someone wanders by.",
        "common_locations": [
            "Hyrule Ridge",
            "Deep Akkala"
        ],
        "drops": [
            "octorok tentacle",
            "octo balloon",
            "octorok eyeball"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/forest_octorok/image"
    },
    {
        "id": 94,
        "name": "rock octorok",
        "description": "This octopus-like species of monster lives in volcanic regions. When they inhale, they're preparing to spit out flaming rocks but have been known to suck up weapons or bombs in the same breath.",
        "common_locations": [
            "Eldin Canyon",
            "Gerudo Highlands"
        ],
        "drops": [
            "octorok tentacle",
            "octo balloon",
            "octorok eyeball"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/rock_octorok/image"
    },
    {
        "id": 95,
        "name": "snow octorok",
        "description": "These octopus-like monsters live in snowy fields and disguise themselves as grass. When someone wanders by, they spring into action and attack by spitting snowballs.",
        "common_locations": [
            "Gerudo Highlands",
            "Tabantha Frontier"
        ],
        "drops": [
            "octorok tentacle",
            "octo balloon",
            "octorok eyeball"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/snow_octorok/image"
    },
    {
        "id": 96,
        "name": "treasure octorok",
        "description": "These particularly clever monsters bury themselves in deep sand or snow and disguise themselves as treasure chests. Anyone who approaches the chests is attacked. The treasures chests are not magnetic, which proves that they are actually a part of these monsters' bodies.",
        "common_locations": [
            "Gerudo Highlands",
            "Gerudo Desert"
        ],
        "drops": [
            "octorok tentacle",
            "octo balloon",
            "octorok eyeball",
            "green rupee",
            "blue rupee",
            "red rupee",
            "purple rupee",
            "silver rupee"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/treasure_octorok/image"
    },
    {
        "id": 97,
        "name": "fire wizzrobe",
        "description": "These spell-casting monsters can be found all over Hyrule. They use their fire rods to hurl fireballs or to summon flaming monsters and have been known to severely raise the temperature around them. The weather will normalize once the Wizzrobe is defeated.",
        "common_locations": [
            "Hyrule Field",
            "Great Hyrule Forest"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/fire_wizzrobe/image"
    },
    {
        "id": 98,
        "name": "ice wizzrobe",
        "description": "These spell-casting monsters can be found all over Hyrule. They use their ice rods to create freezing blasts of air or to summon frozen monsters and have been known to cause blizzards to severely decrease the temperatures around them. The weather will normalize once the Wizzrobe is defeated.",
        "common_locations": [
            "Gerudo Highlands",
            "Hyrule Field"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/ice_wizzrobe/image"
    },
    {
        "id": 99,
        "name": "electric wizzrobe",
        "description": "These spell-casting monsters can be found all over Hyrule. They use their lightning rods to hurl balls of electricity or to summon monsters surging with electricity and have been known to cause thunderstorms in the area. The weather will normalize once the Wizzrobe has been defeated.",
        "common_locations": [
            "Hyrule Ridge",
            "West Necluda"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/electric_wizzrobe/image"
    },
    {
        "id": 100,
        "name": "meteo wizzrobe",
        "description": "These spell-casting monsters can be found all over Hyrule. They use their meteor rods to hurl fireballs or to summon flaming monsters and have been known to severely raise the temperature around them. The weather will normalize once the Wizzrobe is defeated.",
        "common_locations": [
            "Hyrule Field",
            "Eldin Canyon"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/meteo_wizzrobe/image"
    },
    {
        "id": 101,
        "name": "blizzrobe",
        "description": "These spell-casting monsters can be found all over Hyrule. They use their blizzard rods to create freezing blasts of air or to summon frozen monsters and have been known to cause blizzards to severely decrease the temperature around them. The weather will normalize once the Blizzrobe is defeated.",
        "common_locations": [
            "Hyrule Field",
            "Hebra Mountains"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/blizzrobe/image"
    },
    {
        "id": 102,
        "name": "thunder wizzrobe",
        "description": "These spell-casting monsters can be found all over Hyrule. They use their thunderstorm rods to hurl balls of electricity or to summon monsters surging with electricity and have been known to cause thunderstorms in the area. The weather will normalize once the Wizzrobe is defeated.",
        "common_locations": [
            "Hyrule Field",
            "Tabantha Frontier"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/thunder_wizzrobe/image"
    },
    {
        "id": 103,
        "name": "bokoblin",
        "description": "This common species is a nuisance all over Hyrule. Some have unified in the time following the Great Calamity and have formed factions of bandits. While not very clever, they are at least intelligent enough to hunt beasts and grill their meat for food. Though they're typically ferocious carnivores, they actually enjoy fruit as well.",
        "common_locations": [
            "Hyrule Field",
            "West Necluda"
        ],
        "drops": [
            "bokoblin horn",
            "bokoblin fang"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/bokoblin/image"
    },
    {
        "id": 104,
        "name": "blue bokoblin",
        "description": "This common species is a nuisance all over Hyrule. They're tougher and have stronger weapons than the red Bokoblins - and are a little more clever, as well. At the very least, they have figured out that they can simply kick a Remote Bomb out of the way to avoid its blast.",
        "common_locations": [
            "Gerudo Desert",
            "Gerudo Highlands"
        ],
        "drops": [
            "bokoblin horn",
            "bokoblin fang",
            "bokoblin guts"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/blue_bokoblin/image"
    },
    {
        "id": 105,
        "name": "black bokoblin",
        "description": "Although Bokoblins are generally a nuisance, the Black Bokoblins are among the most dangerous type. They're extremely resilient, and many are armed with more advanced weapons.",
        "common_locations": [
            "Hyrule Field",
            "Gerudo Highlands"
        ],
        "drops": [
            "bokoblin horn",
            "bokoblin fang",
            "bokoblin guts"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/black_bokoblin/image"
    },
    {
        "id": 106,
        "name": "stalkoblin",
        "description": "The remains of Bokoblins appear in the dark of the night. While they're fragile enough to crumble from a single blow, as long as a skull remains intact, they'll continue to pull themselves back together and go on fighting. Sometimes the body will pick up the wrong skull, but this doesn't seem to be a problem...",
        "common_locations": [
            "Hyrule Field",
            "Great Hyrule Forest"
        ],
        "drops": [
            "bokoblin horn",
            "bokoblin fang"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/stalkoblin/image"
    },
    {
        "id": 107,
        "name": "silver bokoblin",
        "description": "You would be foolish to call these Silver Bokoblins a mere nuisance. They have been influenced by Ganon's fiendish magic, so they are stronger than even the Black Bokoblins. They're called \"silver\" not only because of their coloring but also to denote their rarity. The purple markings help them to stand out even more.",
        "common_locations": [],
        "drops": [
            "bokoblin horn",
            "bokoblin fang",
            "bokoblin guts",
            "amber",
            "opal",
            "topaz",
            "ruby",
            "sapphire",
            "diamond"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/silver_bokoblin/image"
    },
    {
        "id": 108,
        "name": "moblin",
        "description": "This heavyweight species of monster can be found all over Hyrule. They're physically very strong, their legs along strong enough to resist the force of a bomb blast. They're much more dangerous than the Bokoblins. In fact, Moblins have been known to pick up Bokoblins and throw them as makeshift projectile weapons.",
        "common_locations": [
            "Hyrule Field",
            "East Necluda"
        ],
        "drops": [
            "moblin horn",
            "moblin fang"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/moblin/image"
    },
    {
        "id": 109,
        "name": "blue moblin",
        "description": "These heavyweight monsters can be found all over Hyrule. They're much tougher than their standard counterparts and often have much stronger weapons equipped.",
        "common_locations": [
            "Hyrule Field",
            "Deep Akkala"
        ],
        "drops": [
            "moblin horn",
            "moblin fang",
            "moblin guts"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/blue_moblin/image"
    },
    {
        "id": 110,
        "name": "black moblin",
        "description": "These heavyweight monsters can be found all over Hyrule and are among the most dangerous types of Moblin. They're extremely resilient and are often armed with some of the strongest weapons Moblins can carry.",
        "common_locations": [
            "Hyrule Field",
            "Eldin Canyon"
        ],
        "drops": [
            "moblin horn",
            "moblin fang",
            "moblin guts"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/black_moblin/image"
    },
    {
        "id": 111,
        "name": "stalmoblin",
        "description": "The remains of Moblins appear in the dark of the night. Even the toughest Moblins become fragile when they're little more than a pile of bones, so they'll crumble after just a few attacks. However, as long as a skull remains intact, they'll continue to pull themselves back together and go on fighting.",
        "common_locations": [
            "Great Hyrule Forest",
            "Gerudo Highlands"
        ],
        "drops": [
            "moblin horn",
            "moblin fang"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/stalmoblin/image"
    },
    {
        "id": 112,
        "name": "silver moblin",
        "description": "The strongest of all Moblins, Ganon's fiendish magic has allowed them to surpass even the Black Moblins in strength and resilience. They're called \"silver\" for both their body color as well as their rarity. The purple patterns on their bodies also help them to stand out.",
        "common_locations": [],
        "drops": [
            "moblin horn",
            "moblin fang",
            "moblin guts",
            "amber",
            "opal",
            "topaz",
            "ruby",
            "sapphire",
            "diamond"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/silver_moblin/image"
    },
    {
        "id": 113,
        "name": "lizalfos",
        "description": "These quick-witted, lizard-like monsters can be found all over Hyrule. They're a sly species that lurks underwater or uses camouflage to blend in with the environment to launch ambushes. Moreover, they never sleep. They're meat eaters by nature but will enjoy the occasional insect or two.",
        "common_locations": [
            "Lanayru Great Spring",
            "Gerudo Desert"
        ],
        "drops": [
            "lizalfos horn",
            "lizalfos talon"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/lizalfos/image"
    },
    {
        "id": 114,
        "name": "blue lizalfos",
        "description": "These quick-witted, lizard-like monsters can be found all over Hyrule. Compared to the green Lizalfos, many of these carry much stronger weapons and are generally much tougher.",
        "common_locations": [
            "Tabantha Frontier",
            "Gerudo Desert"
        ],
        "drops": [
            "lizalfos horn",
            "lizalfos talon",
            "lizalfos tail"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/blue_lizalfos/image"
    },
    {
        "id": 115,
        "name": "black lizalfos",
        "description": "These quick-witted, lizard-like monsters can be found all over Hyrule. This particular type tends to carry some pretty strong weapons, so they are among the most dangerous Lizalfos.",
        "common_locations": [
            "Hyrule Field",
            "Hebra Mountains"
        ],
        "drops": [
            "lizalfos horn",
            "lizalfos talon",
            "lizalfos tail"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/black_lizalfos/image"
    },
    {
        "id": 116,
        "name": "stalizalfos",
        "description": "The remains of Lizalfos appear in the dark of night. They're as sly as ever, even now that they're just some bones stacked atop each other. However, their bodies are much more fragile, and a single solid hit can reduce them to pieces. If a skull remains intact, they will pull themselves back up and continue to fight. They've been known to grab the wrong skull at times, but they never seem to mind...",
        "common_locations": [
            "Gerudo Desert",
            "Hyrule Ridge"
        ],
        "drops": [
            "lizalfos horn",
            "lizalfos talon"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/stalizalfos/image"
    },
    {
        "id": 117,
        "name": "fire-breath lizalfos",
        "description": "These quick-witted, lizard-like monsters can be found all over Hyrule. Their fiery breath makes them pretty dangerous, but exposure to cold will kill them instantly. They mainly make their homes in volcanic areas but have also been sighed in the Akkala region.",
        "common_locations": [
            "Eldin Canyon",
            "Gerudo Desert"
        ],
        "drops": [
            "lizalfos horn",
            "lizalfos talon",
            "red lizalfos tail"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/fire-breath_lizalfos/image"
    },
    {
        "id": 118,
        "name": "ice-breath lizalfos",
        "description": "These quick-witted, lizard-like monsters can be found all over Hyrule. The balls of ice they spit make them particularly troublesome, but exposure to fire will kill them instantly. Their homes are mainly on snowy mountains.",
        "common_locations": [
            "Gerudo Highlands",
            "Hebra Mountains"
        ],
        "drops": [
            "lizalfos horn",
            "lizalfos talon",
            "icy lizalfos tail"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/ice-breath_lizalfos/image"
    },
    {
        "id": 119,
        "name": "electric lizalfos",
        "description": "These quick-witted, lizard-like monsters can be found all over Hyrule. The can emit strong electrical currents from their bodies, so don't get too close. Their horns are brimming with electricity, which will discharge and arc to nearby areas if struck by an arrow. They tend to live in desert climates.",
        "common_locations": [
            "Gerudo Desert",
            "Hyrule Ridge"
        ],
        "drops": [
            "lizalfos horn",
            "lizalfos tail",
            "yellow lizalfos tail"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/electric_lizalfos/image"
    },
    {
        "id": 120,
        "name": "silver lizalfos",
        "description": "These Lizalfos have been influenced by Ganon's fiendish magic to become the strongest Lizalfos of all. They're called \"silver\" for their unique coloring and also to denote their rarity. Their purple pattern makes them even more distinct.",
        "common_locations": [],
        "drops": [
            "lizalfos horn",
            "lizalfos talon",
            "lizalfos tail",
            "amber",
            "opal",
            "topaz",
            "ruby",
            "sapphire",
            "diamond"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/silver_lizalfos/image"
    },
    {
        "id": 121,
        "name": "lynel",
        "description": "These fearsome monsters have lived in Hyrule since ancient times. They possess intense intelligence, resilience, and strength, making them among the most dangerous monsters in all the land. This is compounded by the fact that they have a natural resistance to all elements. You would be wise to challenge a Lynel only if you're very well prepared.",
        "common_locations": [
            "Lanayru Great Spring",
            "Hyrule Field"
        ],
        "drops": [
            "lynel horn",
            "lynel hoof",
            "lynel guts"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/lynel/image"
    },
    {
        "id": 122,
        "name": "blue-maned lynel",
        "description": "These fearsome monsters have lived in Hyrule since ancient times. Compared to the standard Lynel, those with blue manes much tougher and equipped with much stronger weapons. Facing off against a Lynel is ill-advised, but if you must, be sure you're well prepared.",
        "common_locations": [
            "Hyrule Field",
            "Deep Akkala"
        ],
        "drops": [
            "lynel horn",
            "lynel hoof",
            "lynel guts"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/blue-maned_lynel/image"
    },
    {
        "id": 123,
        "name": "white-maned lynel",
        "description": "These fearsome monsters have lived in Hyrule since ancient times. Their ability to breathe fire makes White-Maned Lynels among the toughest of the species; each one of their attacks is an invitation to the grave. There are so few eyewitness accounts of this breed because a White-Maned Lynel is not one to let even simple passersby escape with their lives.",
        "common_locations": [
            "Hyrule Field",
            "Hebra Mountains"
        ],
        "drops": [
            "lynel horn",
            "lynel hoof",
            "lynel guts"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/white-maned_lynel/image"
    },
    {
        "id": 124,
        "name": "silver lynel",
        "description": "Silver Lynels are not to be trifled with. They have been influenced by Ganon's fiendish magic, so they are the strongest among the Lynel species, surpassing even the strength of those with white manes. The term \"silver\" denotes not only their color but also their rarity. The purple stripes help them to stand out even more.",
        "common_locations": [],
        "drops": [
            "lynel horn",
            "lynel hoof",
            "lynel guts",
            "topaz",
            "ruby",
            "sapphire",
            "diamond",
            "star fragment"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/silver_lynel/image"
    },
    {
        "id": 125,
        "name": "guardian stalker",
        "description": "The Sheikah of ancient Hyrule developed this as a weapon to combat Ganon. Its six legs give it extraordinary mobility compared to most current vehicles, and its powerful laser provides far greater offensive capability than conventional weaponry. Destroying the legs severely reduces its mobility.",
        "common_locations": [
            "Hyrule Field"
        ],
        "drops": [
            "ancient screw",
            "ancient spring",
            "ancient gear",
            "ancient shaft",
            "ancient core",
            "giant ancient core"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/guardian_stalker/image"
    },
    {
        "id": 126,
        "name": "guardian skywatcher",
        "description": "The Sheikah of ancient Hyrule developed this as a weapon to combat Ganon. This flying model is an improvement over the walking type, capable of either attacking or surveying from the air. Destroying the propeller will ground it.",
        "common_locations": [
            "Hyrule Field",
            "Akkala Highlands"
        ],
        "drops": [
            "ancient screw",
            "ancient spring",
            "ancient gear",
            "ancient shaft",
            "ancient core",
            "giant ancient core"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/guardian_skywatcher/image"
    },
    {
        "id": 127,
        "name": "guardian turret",
        "description": "The Sheikah of ancient Hyrule developed this as a weapon to combat Ganon. This stationary model was used for defending important structures. Its offensive power is on par with other Guardians, and omitting the legs kept the manufacturing costs low.",
        "common_locations": [
            "Hyrule Castle"
        ],
        "drops": [
            "ancient screw",
            "ancient spring",
            "ancient gear",
            "ancient shaft",
            "ancient core",
            "giant ancient core"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/guardian_turret/image"
    },
    {
        "id": 128,
        "name": "sentry",
        "description": "These sentries dispatched from Divine Beast Vah Rudania are equipped with searchlights that can spot intruders.",
        "common_locations": [
            "Death Mountain"
        ],
        "drops": [
            "ancient screw",
            "ancient spring",
            "ancient gear",
            "ancient shaft",
            "ancient core"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/sentry/image"
    },
    {
        "id": 129,
        "name": "decayed guardian",
        "description": "The Sheikah of ancient Hyrule developed this as a weapon to combat Ganon, but it was destroyed during the Great Calamity. Ages of weather and neglect have left it in a state of disrepair. Approach with caution; some of the derelict models have been known to awaken from stasis and attack when approached.",
        "common_locations": [
            "Hyrule Field",
            "Hyrule Castle"
        ],
        "drops": [
            "ancient screw",
            "ancient spring",
            "ancient gear",
            "ancient shaft"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/decayed_guardian/image"
    },
    {
        "id": 130,
        "name": "guardian scout i",
        "description": "Guardians were originally designed by an ancient civilization to combat Ganon, but these smaller models were placed inside shrines as part of the trials found within. The multiple legs and beam functionality were scaled down but kept mostly intact.",
        "common_locations": [],
        "drops": [
            "ancient screw",
            "ancient spring"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/guardian_scout_i/image"
    },
    {
        "id": 131,
        "name": "guardian scout ii",
        "description": "Although originally designed by an ancient civilization to combat Ganon, these scaled-down Guardians were placed inside shrines as part of the trials. In additional to the beam functionality, this particular model was designed to handle weaponry as a means of further testing the combat prowess of one undertaking the trials. It takes some serious skill to go toe-to-toe with one of these.",
        "common_locations": [],
        "drops": [
            "ancient screw",
            "ancient spring",
            "ancient gear",
            "ancient shaft"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/guardian_scout_ii/image"
    },
    {
        "id": 132,
        "name": "guardian scout iii",
        "description": "Although originally designed by an ancient civilisation to combat Ganon, these scaled-down Guardians were placed inside shrines as part or the trials. This model is equipped with twin-blade functionality to further test the combat prowess of one undertaking the trials. It takes a nimble fighter to overcome this one.",
        "common_locations": [],
        "drops": [
            "ancient screw",
            "ancient spring",
            "ancient gear",
            "ancient shaft",
            "ancient core"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/guardian_scout_iii/image"
    },
    {
        "id": 133,
        "name": "guardian scout iv",
        "description": "An ancient civilization originally designed Guardians to combat Ganon but then scaled them down to place in shrines as part of the trials. This model is very resilient and has been outfitted with triple-blade functionality, allowing it to wield three weapons. This will put any would-be hero to the test for sure. A great deal of strength and confidence alike are required to contend with one of these.",
        "common_locations": [],
        "drops": [
            "ancient screw",
            "ancient spring",
            "ancient gear",
            "ancient shaft",
            "ancient core"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/guardian_scout_iv/image"
    },
    {
        "id": 134,
        "name": "yiga footsoldier",
        "description": "The lowest-ranked members of the Yiga Clan. They've been dispatched all across Hyrule with a single task: seek out Link and end his life. They're a crafty bunch, sometimes disguising themselves as simple travelers or villagers to get the jump on you. Be wary of suspicious people you encounter. They're very agile and carry a bow and one-handed sword.",
        "common_locations": [],
        "drops": [
            "green rupee",
            "blue rupee",
            "red rupee",
            "purple rupee",
            "mighty bananas"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/yiga_footsoldier/image"
    },
    {
        "id": 135,
        "name": "yiga blademaster",
        "description": "These are the elite soldiers of the Yiga Clan. They favor the windcleaver blade and are extremely agile despite their bulky build. At this Yiga Clan rank, they have mastered a technique that allows them to manipulate the very earth. By striking the ground, they can create stone pillars and blasts of air.",
        "common_locations": [],
        "drops": [
            "amber",
            "opal",
            "topaz",
            "ruby",
            "sapphire",
            "mighty bananas"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/yiga_blademaster/image"
    },
    {
        "id": 136,
        "name": "master kohga",
        "description": "The leader of the Yiga Clan, a group formed with just a single objective: eliminate Link. He sends his minions all over Hyrule in search of you but tends to spend most of his time napping and generally loafing about. Despite this, his mastery of the esoteric arts has earned him a deep respect. Even if he were to die, his followers would never give up on their one and only task.",
        "common_locations": [
            "Yiga Clan Hideout"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/master_kohga/image"
    },
    {
        "id": 137,
        "name": "monk maz koshia",
        "description": "The arbiter of worthiness for the hero who wishes to control a Divine Beast, following a revelation from the Goddess Hylia. As the last part of the final trial, the monk offers a challenge of ancient techniques.",
        "common_locations": [],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/monk_maz_koshia/image"
    },
    {
        "id": 138,
        "name": "stone talus",
        "description": "This enormous monster is naturally camouflaged as a rock formation. Neither sword nor arrow can pierce its stony form, but a cunning adventurer knows to scale its body and attack the ore sprouting from its peak.",
        "common_locations": [
            "West Necluda",
            "East Necluda"
        ],
        "drops": [
            "flint",
            "amber",
            "opal",
            "ruby"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/stone_talus/image"
    },
    {
        "id": 139,
        "name": "stone talus (luminous)",
        "description": "This enormous monster is naturally camouflaged as a rock formation. Neither sword nor arrow can pierce its stony form, but a cunning adventurer knows to scale its body and attack the ore sprouting from its peak. Unlike your average Stone Talus, this type's ore deposit consists mostly of luminous stone.",
        "common_locations": [
            "Gerudo Highlands",
            "Hyrule Field"
        ],
        "drops": [
            "flint",
            "amber",
            "opal",
            "luminous stone",
            "topaz",
            "diamond"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/stone_talus_(luminous)/image"
    },
    {
        "id": 140,
        "name": "stone talus (rare)",
        "description": "This enormous monster is naturally camouflaged as a rock formation. Neither stone nor arrow can pierce its stony form, but a cunning adventurer knows to scale its body and attack the ore sprouting from its peak. Unlike your average Stone Talus, this type's ore deposit contains a large amount of precious ore.",
        "common_locations": [
            "Hyrule Field",
            "Tabantha Frontier"
        ],
        "drops": [
            "flint",
            "amber",
            "opal",
            "topaz",
            "ruby",
            "sapphire",
            "diamond"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/stone_talus_(rare)/image"
    },
    {
        "id": 141,
        "name": "igneo talus",
        "description": "This enormous monster is naturally camouflaged as molten rock. Neither sword nor arrow can pierce its fiery form. Merely touching its magma-hot body can burn you pretty badly, but you may be able to scale it if you can use something to chill its flames.",
        "common_locations": [
            "Eldin Canyon"
        ],
        "drops": [
            "flint",
            "opal",
            "ruby",
            "diamond"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/igneo_talus/image"
    },
    {
        "id": 142,
        "name": "frost talus",
        "description": "This enormous monster is naturally camouflaged as a frozen rock formation. Neither sword nor arrow can pierce its frigid form. Merely touching its frosty body can leave you with severe frostbite, but you may be able to scale it if you use something to thaw its icy exterior.",
        "common_locations": [
            "Hebra Mountains",
            "Gerudo Highlands"
        ],
        "drops": [
            "flint",
            "opal",
            "sapphire",
            "diamond"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/frost_talus/image"
    },
    {
        "id": 143,
        "name": "stone pebblit",
        "description": "A very young Stone Talus. Their bodies toughen as they mature, becoming as tough as boulders by adulthood. As a child, however, their bodies are light enough to be lifted and fragile enough to break when thrown.",
        "common_locations": [
            "Greater Hyrule"
        ],
        "drops": [
            "flint",
            "amber",
            "opal"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/stone_pebblit/image"
    },
    {
        "id": 144,
        "name": "igneo pebblit",
        "description": "A very young Igneo Talus. Their bodies toughen as they mature and convert fully into lava by adulthood. As a child, however, while still covered in fire, their bodies are fragile and light enough to be blown away by a bomb's blast.",
        "common_locations": [
            "Eldin Canyon",
            "Eldin Mountains"
        ],
        "drops": [
            "flint",
            "amber",
            "ruby"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/igneo_pebblit/image"
    },
    {
        "id": 145,
        "name": "frost pebblit",
        "description": "A very young Frost Talus. Their bodies toughen and frost over as they mature, becoming entirely made of ice by adulthood. As a child, however, their bodies are awfully fragile and are light enough to be blown away by a bomb's blast.",
        "common_locations": [
            "Hebra Mountains",
            "Gerudo Highlands"
        ],
        "drops": [
            "flint",
            "amber",
            "sapphire"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/frost_pebblit/image"
    },
    {
        "id": 146,
        "name": "igneo talus titan",
        "description": "This monster is an Igneo Talus subspecies that is camouflaged as molten rock. It lives in lava for many years before emerging at an enormous size. It is wildly powerful and emits a tremendous amount of heat, causing a constant updraft in its vicinity. This monster is so fearsome it has earned the title of Titan.",
        "common_locations": [],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/igneo_talus_titan/image"
    },
    {
        "id": 147,
        "name": "hinox",
        "description": "The largest monster to make its home in Hyrule, the Hinox lives primarily in forested areas. A keen awareness of your surroundings is paramount when facing one, as Hinox are known for tearing entire trees from the ground and using them as weapons. A deft hand can steal weapons off the necklaces they wear.",
        "common_locations": [
            "East Necluda",
            "West Necluda"
        ],
        "drops": [
            "hinox toenail",
            "hinox tooth",
            "hinox guts",
            "apple",
            "wildberry",
            "palm fruit",
            "voltfruit",
            "mighty bananas",
            "fortified pumpkin",
            "hearty durian"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/hinox/image"
    },
    {
        "id": 148,
        "name": "blue hinox",
        "description": "The largest monster to make its home in Hyrule, the Hinox lives primarily in forested areas. A keen awareness of your surroundings is paramount when facing one, as Hinox are known for tearing entire trees from the ground and using them as weapons. Blue Hinox wear greaves that can be burnt away to expose their feet. A deft hand can steal weapons off the necklaces they wear.",
        "common_locations": [
            "Hyrule Field",
            "Lanayru Great Spring"
        ],
        "drops": [
            "hinox toenail",
            "hinox tooth",
            "hinox guts",
            "roasted bass",
            "roasted hearty bass",
            "roasted hearty salmon",
            "roasted trout",
            "roasted carp",
            "roasted porgy",
            "sneaky river escargot",
            "blueshell escargot",
            "blackened crab"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/blue_hinox/image"
    },
    {
        "id": 149,
        "name": "black hinox",
        "description": "The largest monster to make its home in Hyrule, the Hinox lives primarily in forested areas. A keen awareness of your surroundings is paramount when facing one, as Hinox are known for tearing entire trees from the ground and using them as weapons. Black Hinox wear metal greaves that conduct electricity rather well. A deft hand can steal weapons off the necklaces they wear.",
        "common_locations": [
            "East Necluda",
            "Hyrule Field"
        ],
        "drops": [
            "hinox toenail",
            "hinox tooth",
            "hinox guts",
            "seared steak",
            "seared prime steak",
            "seared gourmet steak",
            "roasted bird drumstick",
            "roasted bird thigh",
            "roasted whole bird"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/black_hinox/image"
    },
    {
        "id": 150,
        "name": "stalnox",
        "description": "The mere remains of what was once a giant monster known as a Hinox. These skeletal beasts appear at nighttime. Much like their living counterparts, the Stalnox will tear entire trees from the ground to use as weapons. Furthermore, even if it appears defeated at first, it will keep coming back for more as long as its eye is left intact.",
        "common_locations": [
            "Hyrule Field",
            "West Necluda"
        ],
        "drops": [
            "hinox tooth"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/stalnox/image"
    },
    {
        "id": 151,
        "name": "molduga",
        "description": "This massive monster swims beneath the desert's sand. It spends most of its time submerged, but if it senses sound, it will breach the surface to feast on whatever it can grab. Running around carelessly can be dangerous if you suspect there may be one in the area.",
        "common_locations": [
            "Gerudo Desert"
        ],
        "drops": [
            "molduga fin",
            "molduga guts"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/molduga/image"
    },
    {
        "id": 152,
        "name": "molduking",
        "description": "This massive monster swims beneath the desert's sand. It is a subspecies of Molduga that stored up a great deal of energy by sleeping underground for hundreds of years. Its power is superior to Molduga, as its skin is rich with iron and acts as a protective shield.",
        "common_locations": [],
        "drops": [
            "treasures"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/molduking/image"
    },
    {
        "id": 153,
        "name": "dinraal",
        "description": "A spirit of fire has taken the form of this giant dragon. Making its home in the Eldin region, it's said to have served the Spring of Power since ancient times. An old saying goes, \"The dragon ascends to the heavens as the sun begins to set,\" but nobody has witnessed this in the current age. The flames that coat its body make it dangerous to get near, but Dinraal bears no ill will toward people.",
        "common_locations": [
            "Eldin Mountains",
            "Tabantha Frontier"
        ],
        "drops": [
            "dinraal's claw",
            "dinraal's scale",
            "shard of dinraal's fang",
            "shard of dinraal's horn"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/dinraal/image"
    },
    {
        "id": 154,
        "name": "naydra",
        "description": "A spirit of ice has taken the form of this giant dragon. Making its home in the Lanayru region, it's said to have served the Spring of Wisdom since ancient times. An old saying goes, \"The dragon ascends to the heavens as the sun begins to set,\" but nobody has seen this in the current age. The ice that coats its body makes it dangerous to get near, but Naydra bears no ill will toward people.",
        "common_locations": [
            "Mount Lanayru"
        ],
        "drops": [
            "naydra's claw",
            "naydra's scale",
            "shard of naydra's fang",
            "shard of naydra's horn"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/naydra/image"
    },
    {
        "id": 155,
        "name": "farosh",
        "description": "A spirit of lightning has taken the form of this giant dragon. Making its home in the Faron region, it's said to have served the Spring of Courage since ancient times. An old saying goes, \"The dragon ascends to the heavens as the sun begins to set,\" but nobody has seen this in the current age. The electricity that coats its body makes it dangerous to get near, but Farosh bears no ill will toward people.",
        "common_locations": [
            "Lake Hylia",
            "Lake Floria"
        ],
        "drops": [
            "farosh's claw",
            "farosh's scale",
            "shard of farosh's fang",
            "shard of farosh's horn"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/farosh/image"
    },
    {
        "id": 156,
        "name": "cursed bokoblin",
        "description": "The Malice has given these Bokoblin skulls a sort of life. Devoid of any intelligence the Bokoblin it once belonged to may have had, these pitiful things now exist only to attack anything that gets too close.",
        "common_locations": [],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/cursed_bokoblin/image"
    },
    {
        "id": 157,
        "name": "cursed moblin",
        "description": "The Malice has given these Moblin skulls a pitiful life after death. The only fragment of their former selves they've held on to is the ferocity innate to all Moblins, so they will attack anyone that approaches.",
        "common_locations": [],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/cursed_moblin/image"
    },
    {
        "id": 158,
        "name": "cursed lizalfos",
        "description": "The Malice has given these Lizalfos skulls a sorry form of life after death. Only the slyness of their former selves remains, making them faster than Bokoblin skulls. They thoughtlessly attack anyone who approaches.",
        "common_locations": [],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/cursed_lizalfos/image"
    },
    {
        "id": 159,
        "name": "thunderblight ganon",
        "description": "This phantom of Ganon attacked the Divine Beast Vah Naboris and was responsible for the demise of the Champion Urbosa. It specializes in quick, lightning-based attacks.",
        "common_locations": [
            "Divine Beast Vah Naboris"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/thunderblight_ganon/image"
    },
    {
        "id": 160,
        "name": "fireblight ganon",
        "description": "This phantom of Ganon attacked the Divine Beast Vah Rudania and was responsible for the demise of the Champion Daruk. It attacks with a greatsword and fire magic.",
        "common_locations": [
            "Divine Beast Vah Rudania"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/fireblight_ganon/image"
    },
    {
        "id": 161,
        "name": "waterblight ganon",
        "description": "This phantom of Ganon attacked the Divine Beast Vah Ruta and was responsible for the demise of the Champion Mipha. It attacks with a spear and ice magic.",
        "common_locations": [
            "Divine Beast Vah Ruta"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/waterblight_ganon/image"
    },
    {
        "id": 162,
        "name": "windblight ganon",
        "description": "This phantom of Ganon attacked the Divine Beast Vah Medoh and was responsible for the demise of the Champion Revali. It specializes in long-ranged wind attacks.",
        "common_locations": [
            "Divine Beast Vah Medoh"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/windblight_ganon/image"
    },
    {
        "id": 163,
        "name": "calamity ganon",
        "description": "The source of the darkness that has appeared time and again throughout Hyrule's history. It's been called many names, from \"Great King of Evil\" to \"Calamity.\" Hibernating within a cocoon, it attempted to regenerate a physical form after Link awoke but was forced to confront him in an incomplete state.",
        "common_locations": [
            "Hyrule Castle"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/calamity_ganon/image"
    },
    {
        "id": 164,
        "name": "dark beast ganon",
        "description": "After Ganon was defeated by Link, the remaining Malice pulled itself together to form this bestial creature. Its appearance and fiendish magic eared it the name of Dark Beast. This form is considered to be Ganon's original, although in this state, his awareness has been consumed entirely by Malice, and all he knows is a desire to rampage and destroy.",
        "common_locations": [
            "Hyrule Field"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/dark_beast_ganon/image"
    }
];

var monster_materials = [
    {
        "id": 218,
        "name": "dinraal's claw",
        "description": "This valuable claw was plucked from the red spirit Dinraal. It was extremely hot before it was removed. You could sell it to a store, but it must have some other use.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "dinraal27s_claw.png"
    },
    {
        "id": 219,
        "name": "dinraal's scale",
        "description": "This precious scale fell from the red spirit Dinraal. It emanates a great heat. You can use it in cooking, but just eating it seems like a waste.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "dinraal27s_scale.png"
    },
    {
        "id": 220,
        "name": "farosh's claw",
        "description": "This claw was plucked from the golden spirit Farosh. Its electricity was expelled before it was removed, so it's safe to handle. A store will buy it, but it must have some other use.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "farosh27s_claw.png"
    },
    {
        "id": 221,
        "name": "farosh's scale",
        "description": "This precious scale fell from the golden spirit Farosh. It contains powerful electricity within. You can cook with it, but just eating it seems like a waste.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "farosh27s_scale.png"
    },
    {
        "id": 222,
        "name": "naydra's claw",
        "description": "This valuable claw was plucked from the blue spirit Naydra. It was freezing cold before it was removed. You could sell it, but there must be some other use for it.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "naydra27s_claw.png"
    },
    {
        "id": 223,
        "name": "naydra's scale",
        "description": "This precious scale fell from the blue spirit Naydra. It contains a bitter cold within. You can use it in cooking, but just eating it seems like a waste.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "naydra27s_scale.png"
    },
    {
        "id": 224,
        "name": "shard of dinraal's fang",
        "description": "This shard fell from the red spirit Dinraal's fang. It's exceptionally hard and therefore impossible to process, but apparently it can be used as a material for something.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "shard_of_dinraal27s_fang.png"
    },
    {
        "id": 225,
        "name": "shard of dinraal's horn",
        "description": "This shard chipped and fell off the red spirit Dinraal. Its horn is said to be the crystallized power of fire itself. It sells for a high price, but rumors say there's some other use for it.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "shard_of_dinraal27s_horn.png"
    },
    {
        "id": 226,
        "name": "shard of farosh's fang",
        "description": "This shard fell from the golden spirit Farosh's fang. It's so hard, hammers bounce right off it, so it's impossible to process. Yet rumors say it does have some use as a material.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "shard_of_farosh27s_fang.png"
    },
    {
        "id": 227,
        "name": "shard of farosh's horn",
        "description": "This shard fell off the golden spirit Farosh. It's said the horn is the crystallized power of electricity itself. It sells for a lot, but there must be some other use for it.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "shard_of_farosh27s_horn.png"
    },
    {
        "id": 228,
        "name": "shard of naydra's fang",
        "description": "This shard fell from the blue spirit Naydra's fang. It's much harder than any metal, so it's impossible to process. Yet rumors say it can be used as a material for something.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "shard_of_naydra27s_fang.png"
    },
    {
        "id": 229,
        "name": "shard of naydra's horn",
        "description": "This shard chipped and fell off the blue spirit Naydra. It's said the horn is the crystallized power of ice itself. It sells for quite a bit, but rumors say it has some other use.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "shard_of_naydra27s_horn.png"
    },
    {
        "id": 230,
        "name": "octo balloon",
        "description": "This inflatable Octorok organ has a lot of lift, so attach it to items you want to see float. Hold it in your hands, and then place it on an object to attach it.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "octo_balloon.png"
    },
    {
        "id": 231,
        "name": "red chuchu jelly",
        "description": "A jiggly substance that normally comes from a Fire Chuchu. It consistently gives off heat. If struck, it will explode in a ball of flame.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "red_chuchu_jelly.png"
    },
    {
        "id": 232,
        "name": "bokoblin fang",
        "description": "A tooth obtained from a Bokoblin. It's worn down and not very sharp, but it's still pretty hard. Cook it alongside a critter to make an elixir.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "bokoblin_fang.png"
    },
    {
        "id": 233,
        "name": "bokoblin guts",
        "description": "A rare material obtained by defeating a Bokoblin. It convulses on its own every now and then, which is really creepy, but perhaps it has a use.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "bokoblin_guts.png"
    },
    {
        "id": 234,
        "name": "bokoblin horn",
        "description": "The severed horn of a Bokoblin, a creature often encountered on the plains of Hyrule. It isn't edible, but it can be tossed into a stew with some critters to make an elixir.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "bokoblin_horn.png"
    },
    {
        "id": 235,
        "name": "chuchu jelly",
        "description": "A gelatinous substance that came from a Chuchu. It's unusable in this state, but applying a bit of elemental stimulation will change its form.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "chuchu_jelly.png"
    },
    {
        "id": 236,
        "name": "electric keese wing",
        "description": "A rare Electric Keese wing. The part of the Electric Keese that produces electricity is not in its wings, so it won't shock you. Toss it in with some critters to make elixirs.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "electric_keese_wing.png"
    },
    {
        "id": 237,
        "name": "fire keese wing",
        "description": "A rare Fire Keese wing. There isn't enough Fire Keese attached to it to burn you, but it does have a slight warmth to it. It can be used as an ingredient for elixirs.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "fire_keese_wing.png"
    },
    {
        "id": 238,
        "name": "hinox guts",
        "description": "A giant, smelly Hinox organ of unknown function. Upon close inspection, it appears to be quivering. It can be used to make an elixir, but some say it has other uses, as well.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "hinox_guts.png"
    },
    {
        "id": 239,
        "name": "hinox toenail",
        "description": "A nail obtained from a Hinox. It's as thick as a plate of armor and can be stewed with critters to make elixirs.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "hinox_toenail.png"
    },
    {
        "id": 240,
        "name": "hinox tooth",
        "description": "A tooth obtained from a Hinox. It's so large, it's hard to believe it's a real tooth. It can be used to make elixirs.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "hinox_tooth.png"
    },
    {
        "id": 241,
        "name": "ice keese wing",
        "description": "A rare Ice Keese wing. Its frozen surface gleams attractively, but its usefulness isn't readily apparent.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "ice_keese_wing.png"
    },
    {
        "id": 242,
        "name": "icy lizalfos tail",
        "description": "The severed tail of an Ice-Breath Lizalfos. Its hard scales and flesh make it unsuitable for cooking, but it's perfect for making elixirs.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "icy_lizalfos_tail.png"
    },
    {
        "id": 243,
        "name": "keese eyeball",
        "description": "A rare material dropped by a defeated Keese. It's fun to look at, but it doesn't seem to have much use at first glance. But it must be good for something...",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "keese_eyeball.png"
    },
    {
        "id": 244,
        "name": "keese wing",
        "description": "The wing of a Keese. It's covered with very short, sharp fur. It's not much use by itself, but you can mix it with critters to make something useful.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "keese_wing.png"
    },
    {
        "id": 245,
        "name": "lizalfos horn",
        "description": "This winding horn once grew atop the head of a Lizalfos. It's too hard to use for cooking, but stores are willing to buy it from you. It can also be used to make elixirs.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "lizalfos_horn.png"
    },
    {
        "id": 246,
        "name": "lizalfos tail",
        "description": "The severed tail of a Lizalfos. It continues to wriggle even after being separated from its body. That kind of vitality makes it highly valued as an ingredient in elixirs.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "lizalfos_tail.png"
    },
    {
        "id": 247,
        "name": "lizalfos talon",
        "description": "This talon once grew from the elbow of a Lizalfos. You can stew it with critters to make elixirs, but it may have some other uses, as well.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "lizalfos_talon.png"
    },
    {
        "id": 248,
        "name": "lynel guts",
        "description": "This highly sought-after ingredient can only be obtained from a Lynel. It pulses with the vitality of a Lynel, a strength that makes it invaluable as an ingredient for elixirs.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "lynel_guts.png"
    },
    {
        "id": 249,
        "name": "lynel hoof",
        "description": "This rare ingredient can be obtained only from a Lynel's foot. It's larger and heavier than a horse's hoof. It's useful for making elixirs but may have uses beyond that.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "lynel_hoof.png"
    },
    {
        "id": 250,
        "name": "lynel horn",
        "description": "The Lynel this horn once grew upon surely misses it. It's exceptionally hard — so hard that most blades cannot scratch it. Throw it into a stew with critters to make elixirs.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "lynel_horn.png"
    },
    {
        "id": 251,
        "name": "moblin fang",
        "description": "A sharp fang obtained from a Moblin. It's too hard to be reshaped into a tool, but it can be tossed into a stew with some critters to create elixirs.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "moblin_fang.png"
    },
    {
        "id": 252,
        "name": "moblin guts",
        "description": "This prized ingredient can be obtained from Moblins. Its odor is too pungent for normal food preparation, but stew it with some critters to make elixirs.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "moblin_guts.png"
    },
    {
        "id": 253,
        "name": "moblin horn",
        "description": "This splendid horn once grew atop the head of a Moblin. It can't be used in normal food recipes, but it does have some use as an ingredient in making elixirs.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "moblin_horn.png"
    },
    {
        "id": 254,
        "name": "molduga fin",
        "description": "A sturdy fin obtained from a Molduga. It can be used to make elixirs, but there may be someone willing to trade for it.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "molduga_fin.png"
    },
    {
        "id": 255,
        "name": "molduga guts",
        "description": "A giant organ obtained from a Molduga. This invaluable ingredient is hard to come by, and its use is shrouded in mystery.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "molduga_guts.png"
    },
    {
        "id": 256,
        "name": "octorok eyeball",
        "description": "This can only be obtained from an Octorok-type enemy. You can sell it to a store, or you can make elixirs with it, but it may have other uses, as well.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "octorok_eyeball.png"
    },
    {
        "id": 257,
        "name": "octorok tentacle",
        "description": "This can only be obtained from an Octorok-type enemy. It's too acidic for cooking, but it's highly valued as an ingredient for elixirs.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "octorok_tentacle.png"
    },
    {
        "id": 258,
        "name": "red lizalfos tail",
        "description": "The severed tail of a Fire-Breath Lizalfos. Its flavor makes the flesh inedible, but toss it into a stew with some critters, and you'll have yourself a nice elixir.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "red_lizalfos_tail.png"
    },
    {
        "id": 259,
        "name": "white chuchu jelly",
        "description": "A jiggly substance that came from an Ice Chuchu. It's cool to the touch, and squeezing it seems to relieve stress. If struck, it will explode in a cold mist.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "white_chuchu_jelly.png"
    },
    {
        "id": 260,
        "name": "yellow lizalfos tail",
        "description": "The severed tail of an Electric Lizalfos. Its powerful stench makes it unappetizing and unfit for cooking, but it's highly valued as an ingredient for elixirs.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "yellow_lizalfos_tail.png"
    },
    {
        "id": 261,
        "name": "yellow chuchu jelly",
        "description": "A jiggly substance that came from an Electric Chuchu. Electricity pulses through its gelatinous mass. If struck, it will explode in a burst of electric current.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "yellow_chuchu_jelly.png"
    },
    {
        "id": 262,
        "name": "monster extract",
        "description": "A result of Kilton's research into monsters, this suspicious spice can be used to punch up dishes while cooking. Apparently it can be used to make a number of monstrous meals",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "monster_extract.png"
    },
    {
        "id": 263,
        "name": "topaz",
        "description": "This precious yellow gem contains the power of electricity. It's been known to fetch a high price since ancient times.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "topaz.png"
    },
    {
        "id": 264,
        "name": "ancient core",
        "description": "This crystal was made using lost technology. At one time it was the power source for ancient machines. This item is very valuable to researchers.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "ancient_core.png"
    },
    {
        "id": 265,
        "name": "ancient gear",
        "description": "A gear used in ancient machinery. Despite being incredibly old, its build quality is leaps and bounds above anything built using current technology.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "ancient_gear.png"
    },
    {
        "id": 266,
        "name": "ancient screw",
        "description": "A screw used in ancient machinery. It's made of an unknown material, and no matter how many times it's turned, its threads never seem to show signs of wear.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "ancient_screw.png"
    },
    {
        "id": 267,
        "name": "ancient shaft",
        "description": "A machine part used in ancient machinery. It's incredibly sturdy, and it's not made of any recognizable material. It may come in handy someday.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "ancient_shaft.png"
    },
    {
        "id": 268,
        "name": "ancient spring",
        "description": "A spring used in ancient machinery. It is light and buoyant enough to float on water, and no matter how many times it's compressed, it never loses tension.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "ancient_spring.png"
    },
    {
        "id": 269,
        "name": "giant ancient core",
        "description": "A giant energy crystal made using lost ancient technology. Cores this large are an extremely rare find. A researcher would probably know how to use this.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "giant_ancient_core.png"
    },
    {
        "id": 270,
        "name": "amber",
        "description": "A fossilized resin with a caramelesque sheen to it. It's been valued as a component in decorations and crafting since ancient times.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "amber.png"
    },
    {
        "id": 271,
        "name": "luminous stone",
        "description": "This mysterious mineral gives off a pale blue glow in the dark, which some believe to be souls of the dead. Apparently, this stone can be used as a base to make special clothing.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "luminous_stone.png"
    },
    {
        "id": 272,
        "name": "opal",
        "description": "A valuable ore that gives off a mesmerizing iridescence similar to the inside of a seashell. It contains the power of water.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "opal.png"
    },
    {
        "id": 273,
        "name": "diamond",
        "description": "The most precious gem one can find in Hyrule, its signature sparkle has charmed Hyruleans for generations. As such, it has sold for a very high price since ancient times.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "diamond.png"
    },
    {
        "id": 274,
        "name": "ruby",
        "description": "A precious red gem mined from large ore deposits found throughout Hyrule. Rubies contain the power of fire and have fetched a high price since ancient times.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "ruby.png"
    },
    {
        "id": 275,
        "name": "sapphire",
        "description": "A precious blue gem mined from natural rock formations. Sapphires contain the very essence of ice. They've been known to fetch a high price since ancient times.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "sapphire.png"
    },
    {
        "id": 276,
        "name": "wood",
        "description": "A portable bundle of wood. You can use this to make a campfire if you have something to light it.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "wood.png"
    },
    {
        "id": 277,
        "name": "flint",
        "description": "Strike it with a metallic weapon to generate a spark. This portable fire starter breaks after one use, but it can create a long-lasting flame if you use it near firewood.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "flint.png"
    }
];

let droppedBy = {};

for (let monster of monsters) {
    const drops = monster["drops"];
    for (let material of drops) {
        if (!droppedBy[material]) {
            droppedBy[material] = [];
        }
        droppedBy[material].push(monster["name"]);
    }
}

for (let material of monster_materials) {
    material["dropped_by"] = droppedBy[material["name"]];
}

console.log(monster_materials);