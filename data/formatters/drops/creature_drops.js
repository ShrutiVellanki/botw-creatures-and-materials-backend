var creatures = [
    {
        "id": 1,
        "name": "horse",
        "description": "These can most often be found on plains. Their usefulness as transportation has made them valuable since ancient times. That said, wild horses do tend to get spooked and run off when approached, so if you're looking to snag one, it's best to sneak up on it.",
        "common_locations": [
            "Hyrule Field",
            "Faron Grasslands"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/horse/image"
    },
    {
        "id": 2,
        "name": "giant horse",
        "description": "This giant horse is the last of its kind. Its physical capabilities completely overshadow those of regular horses, but its temperament is extremely wild. Only a truly skilled rider can train, or even catch, this beast of a mount. This is a horse that chooses its rider.",
        "common_locations": [],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/giant_horse/image"
    },
    {
        "id": 3,
        "name": "white horse",
        "description": "The Hyrulean royal family that perished 100 years ago would sometimes ride atop white horses as a display of their divine right. This white horse may be a descendant of one once ridden by royalty.",
        "common_locations": [],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/white_horse/image"
    },
    {
        "id": 4,
        "name": "lord of the mountain",
        "description": "This noble creature watches over all animals that make their homes in the forest. Legends say this holy creature is a reincarnation of a sage that died on the lands it now protects. It has an acute awareness of its surroundings, so it seldom appears before people. It's sometimes known by its other name, Satori",
        "common_locations": [
            "Satori Mountain"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/lord_of_the_mountain/image"
    },
    {
        "id": 5,
        "name": "stalhorse",
        "description": "This skeletal horse is ridden by monsters. It was once a regular horse, but Ganon's power revived it from death. It cannot maintain its bone structure in the daytime.",
        "common_locations": [
            "Hebra Mountains",
            "Akkala Highlands"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/stalhorse/image"
    },
    {
        "id": 6,
        "name": "donkey",
        "description": "Smaller than horses, these are raised as livestock in the countryside, so they don't exist in the wild. They're more powerful than they look and specialize in transporting baggage. This has made them popular with traveling merchants.",
        "common_locations": [
            "Greater Hyrule"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/donkey/image"
    },
    {
        "id": 7,
        "name": "sand seal",
        "description": "These seals use their large flippers to move through the sand as if swimming. They were once wild animals but have since been domesticated by the Gerudo. They rely on their excellent hearing to find their way while riding submerged in the sand.Their large, distinct tusks look pretty ferocious, but their favorite food is actually fruit.",
        "common_locations": [
            "Gerudo Desert"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/sand_seal/image"
    },
    {
        "id": 8,
        "name": "patricia",
        "description": "This is Riju's own sand seal. It may look intense, but she dotes on it regularly; the ribbon it wears was a gift form her, and it even has its own pen in Gerudo Town. It's far more agile than any other sand seal and far more outgoing. An ever-reliable partner to Riju, Patricia is always ready to take off through the desert at a moment's notice.",
        "common_locations": [
            "Gerudo Desert"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/patricia/image"
    },
    {
        "id": 9,
        "name": "bushy-tailed squirrel",
        "description": "These small creatures are known for their large tails. They tend to live in forests and subsist on acorns and other nuts. They carry their food in their mouths but will sometimes drop it when surprised in an adorable display of shock.",
        "common_locations": [
            "Hyrule Field",
            "Hyrule Ridge"
        ],
        "drops": [
            "acorn"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/bushy-tailed_squirrel/image"
    },
    {
        "id": 10,
        "name": "woodland boar",
        "description": "These medium-sized beasts can be found all throughout Hyrule. you can most often find them foraging for food in forests or meadows. Although usually docile, they won't hesitate to charge you full force if you get too close.",
        "common_locations": [
            "Hyrule Field",
            "Lanayru Great Spring"
        ],
        "drops": [
            "raw meat"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/woodland_boar/image"
    },
    {
        "id": 11,
        "name": "red-tusked boar",
        "description": "These boars are known for their red tusks and black fur. They're similar to your average boars but are considerably stronger. Extra caution is advised when hunting these.",
        "common_locations": [
            "Akkala Highlands",
            "Deep Akkala"
        ],
        "drops": [
            "raw prime meat"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/red-tusked_boar/image"
    },
    {
        "id": 12,
        "name": "mountain goat",
        "description": "These herbivores make their home in meadows and rocky areas. Their characteristically strong legs and hooves facilitate easy climbing over rocks. Goats aren't very quick, so they make good targets for beginning hunters.",
        "common_locations": [
            "Hyrule Ridge",
            "Great Hyrule Forest"
        ],
        "drops": [
            "raw meat"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/mountain_goat/image"
    },
    {
        "id": 13,
        "name": "white goat",
        "description": "These goats are raised for their multiple uses. Their milk can be drank or made into butter, and their soft fur is used to make clothes. Domesticated goats wear bells around their necks so they can easily be found after being let out to graze.",
        "common_locations": [
            "West Necluda",
            "Eldin Canyon"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/white_goat/image"
    },
    {
        "id": 14,
        "name": "mountain buck",
        "description": "These male deer are usually found deep in the forest. They're well known for their huge, branching antlers, which they'll swing in self-defense if threatened. Deer are cautious by nature so it can be tricky getting close, but if you can capture one, you may be able to take it for a ride.",
        "common_locations": [
            "Hyrule Field",
            "Lanayru Great Spring"
        ],
        "drops": [
            "raw prime meat"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/mountain_buck/image"
    },
    {
        "id": 15,
        "name": "mountain doe",
        "description": "These female deer are often found alongside a male. They're very timid animals by nature, but they tend to let their guard down when eating apples, a favorite food. This tidbit of information can be useful to hunters.",
        "common_locations": [
            "Hyrule Field",
            "Lanayru Great Spring"
        ],
        "drops": [
            "raw prime meat"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/mountain_doe/image"
    },
    {
        "id": 16,
        "name": "water buffalo",
        "description": "These wild cows come equipped with big, strong horns. They live off grass that grows near the waterfront. Their meat is considered to be high quality, so they're a common target among hunters. Fun Fact: the domesticated Hateno cow, often raised in villages, was bred through selective breeding using these.",
        "common_locations": [
            "Lanayru Wetlands",
            "Akkala Highlands"
        ],
        "drops": [
            "raw prime meat",
            "raw gourmet meat"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/water_buffalo/image"
    },
    {
        "id": 17,
        "name": "hateno cow",
        "description": "Originating in Hateno Village, these cows are kept as livestock primarily for their milk. Their horns are smaller than a water buffalo's, and they're much more docile and therefore easier to raise. Their horns are decorated with bright colors when taken out to pasture.",
        "common_locations": [
            "East Necluda",
            "Faron Grasslands"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/hateno_cow/image"
    },
    {
        "id": 18,
        "name": "highland sheep",
        "description": "Originally native to the mountainous regions, these sheep were domesticated for their wool and have since found a home in villages. Once the fluffy wool grows out, it's harvested and used to make clothing and bedding. They're calm, timid creatures and move about in small herds.",
        "common_locations": [
            "East Necluda",
            "Akkala Highlands"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/highland_sheep/image"
    },
    {
        "id": 19,
        "name": "grassland fox",
        "description": "This breed of fox is common to grasslands and forests and is hallmarked by its fluffy, white-tipped tail. Unlike other foxes, they tend to act independently rather than form packs. Being omnivores, they hunt animals smaller than themselves and often stick to eating fruit and insects.",
        "common_locations": [
            "Hyrule Field",
            "Lanayru Great Spring"
        ],
        "drops": [
            "raw meat"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/grassland_fox/image"
    },
    {
        "id": 20,
        "name": "snowcoat fox",
        "description": "This particular breed of grassland fox makes its home in cold climates such as the Tabantha region. Its fur turned white as a means of adapting to snowy weather, serving as natural camouflage. Because of this, spotting one in the snow takes a keen eye.",
        "common_locations": [
            "Hebra Mountains",
            "Tabantha Frontier"
        ],
        "drops": [
            "raw prime meat",
            "raw gourmet meat"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/snowcoat_fox/image"
    },
    {
        "id": 21,
        "name": "maraudo wolf",
        "description": "These wolves are not only carnivorous but can also be downright fierce. They're highly aggressive and aren't afraid to attack people. They hunt in groups and surround their prey as a means of bringing it down. That said, if one of their own is injured, the rest are wise enough to run away. They communicate via howls, so if you're wandering the forest and hear their call, you had best take care.",
        "common_locations": [
            "Tabantha Frontier",
            "Great Hyrule Forest"
        ],
        "drops": [
            "raw prime meat",
            "raw gourmet meat"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/maraudo_wolf/image"
    },
    {
        "id": 22,
        "name": "wasteland coyote",
        "description": "This contentious beast is native to the Gerudo region. It makes its home in the desert, so it doesn't have a problem with hot, arid climates. They do hunt other beasts and small animals but more often turn their sights on people. They're a threat to anyone traveling through the desert.",
        "common_locations": [
            "Gerudo Desert",
            "Gerudo Highlands"
        ],
        "drops": [
            "raw prime meat",
            "raw gourmet meat"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/wasteland_coyote/image"
    },
    {
        "id": 23,
        "name": "cold-footed wolf",
        "description": "This breed of maraudo wolf lives in snowy, mountainous areas, such as the Hebra Mountains. They travel in packs similar to their maraudo relatives but are considerably tougher thanks to having adapted to their harsh environment. They're made even more dangerous by their white fur, which provides a natural camouflage in the snow.",
        "common_locations": [
            "Hebra Mountains",
            "Gerudo Highlands"
        ],
        "drops": [
            "raw prime meat",
            "raw gourmet meat"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/cold-footed_wolf/image"
    },
    {
        "id": 24,
        "name": "tabantha moose",
        "description": "The largest breed of deer in Hyrule, this mammal's origin was traced back to the Tabantha region. It's easily distinguished by its immense antlers, which these moose shed and regrow yearly. Their meat is tender and high quality, so it works well in a stew.",
        "common_locations": [
            "Hebra Mountains",
            "Gerudo Highlands"
        ],
        "drops": [
            "raw prime meat",
            "raw gourmet meat"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/tabantha_moose/image"
    },
    {
        "id": 25,
        "name": "great-horned rhinoceros",
        "description": "This animal's horn is a whopping half the size of its body. Although originally members of arid-region rhinoceroses, these migrated to colder climates and adapted to live in snowy mountains. Their hides are particularly thick, and their horns can cause some serious damage, so only experienced hunters should track these.",
        "common_locations": [
            "Hebra Mountains",
            "Gerudo Highlands"
        ],
        "drops": [
            "raw prime meat",
            "raw gourmet meat"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/great-horned_rhinoceros/image"
    },
    {
        "id": 26,
        "name": "honeyvore bear",
        "description": "This king among animals is dangerous game for even the most seasoned hunters. They'll attack anyone who wanders into their territory regardless of the wanderer's weaponry. As their name implies, they have a natural love of honey. Extreme caution is advised when you spot one, but if you're sneaky enough and maybe just a little bit crazy... you just may be able to ride one.",
        "common_locations": [
            "Tabantha Frontier",
            "Akkala Highlands",
            "Crenel Peak"
        ],
        "drops": [
            "raw prime meat",
            "raw gourmet meat"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/honeyvore_bear/image"
    },
    {
        "id": 27,
        "name": "grizzlemaw bear",
        "description": "This breed of honeyvore bear is distinguished by its gray fur. Even more ferocious than their relatives, they're commonly believed to be the most dangerous wild animal. They live in deep snow away from villages, so it's uncommon to encounter one. That said, if you do find one, you'd be better off not picking a fight with it.",
        "common_locations": [
            "Hebra Mountains",
            "Gerudo Highlands"
        ],
        "drops": [
            "raw prime meat",
            "raw gourmet meat",
            "hearty salmon"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/grizzlemaw_bear/image"
    },
    {
        "id": 28,
        "name": "hylian retriever",
        "description": "The native breed of this mammal varies by region, but on thing remains true: this animals has been known as \"man's best friend\" since ancient times. They're very clever and obedient, so aside from serving as pets, they are also put to work watching over grazing livestock. It's said that all Hylian retrievers are descendants of the dog once owned by the king of Hyrule.",
        "common_locations": [
            "Akkala Highlands",
            "Hebra Mountains"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/hylian_retriever/image"
    },
    {
        "id": 29,
        "name": "blupee",
        "description": "They may look like mere rabbits at a fleeting glance, but these strange and aptly named creatures glow with a mysterious blue light. While the details of their origins are entirely unknown, there is one thing we do know: these peculiar little things have a penchant for collecting rupees.",
        "common_locations": [
            "Satori Mountain"
        ],
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/blupee/image"
    },
    {
        "id": 30,
        "name": "common sparrow",
        "description": "As the name suggests, these birds are rather common around Hyrule. They mainly live in the plains or forests but sometimes venture out to villages. Their diet consists of nuts and small insects. They look pretty cute when they jump around, but they don't have much love for people.",
        "common_locations": [
            "Hyrule Field",
            "Hyrule Ridge"
        ],
        "drops": [
            "chickaloo tree nut"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/common_sparrow/image"
    },
    {
        "id": 31,
        "name": "red sparrow",
        "description": "These small birds live in the Hebra region and eat mainly nuts and wild plants. Their bright-red feathers are often used as decorations.",
        "common_locations": [
            "Hebra Mountains",
            "Tabantha Frontier",
            "Rito Stable"
        ],
        "drops": [
            "chickaloo tree nut"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/red_sparrow/image"
    },
    {
        "id": 32,
        "name": "blue sparrow",
        "description": "This breed of sparrow is most often seen in the Lanayru region. They get most of their food from leaves and plants that grow near water. If it's safe enough, they can be spotted bathing in puddles or shallow rivers.",
        "common_locations": [
            "Lanayru Great Spring",
            "Great Hyrule Forest"
        ],
        "drops": [
            "chickaloo tree nut"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/blue_sparrow/image"
    },
    {
        "id": 33,
        "name": "rainbow sparrow",
        "description": "These small birds hail from the Faron region. As the name suggests, their feathers are more colorful than other sparrows', which has made them a favorite among dilettantes. They feed on small rain-forest insects, but the omnivore in them loves nuts as well.",
        "common_locations": [
            "Faron Grasslands",
            "West Necluda",
            "Floria Bridge"
        ],
        "drops": [
            "chickaloo tree nut"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/rainbow_sparrow/image"
    },
    {
        "id": 34,
        "name": "sand sparrow",
        "description": "This desert-dwelling breed of sparrow has adapted to withstand the heat in the arid climate of the Gerudo region. Sometimes they can be spotted half-buried in the sand, holding perfectly still as a means of evading predators.",
        "common_locations": [
            "Gerudo Desert"
        ],
        "drops": [
            "chickaloo tree nut"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/sand_sparrow/image"
    },
    {
        "id": 35,
        "name": "golden sparrow",
        "description": "This breed of sparrow is native to the Eldin region. Their down is resistant to burning, an evolutionary trait produced by the harsh volcanic environment. They subsist on small insects that hide inside rocks.",
        "common_locations": [
            "Great Hyrule Forest",
            "Eldin Canyon"
        ],
        "drops": [
            "chickaloo tree nut"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/golden_sparrow/image"
    },
    {
        "id": 36,
        "name": "wood pigeon",
        "description": "These pigeons inhabit vast regions all throughout Hyrule, so they can often be found in forests, grasslands, or even villages. They don't have a very strong sense of awareness, so even less-skilled hunters can nab them pretty easily.",
        "common_locations": [
            "Great Hyrule Forest",
            "Hyrule Ridge"
        ],
        "drops": [
            "raw bird drumstick"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/wood_pigeon/image"
    },
    {
        "id": 37,
        "name": "rainbow pigeon",
        "description": "This breed of pigeon is well known for its vivid feathers. They live mainly in the northern forests and grasslands of Hyrule. They're most fond of nuts and grain but won't pass up the occasional insect or earthworm if offered. Their meat is of a higher quality than typical wood pigeon's.",
        "common_locations": [
            "Hyrule Ridge",
            "Great Hyrule Forest",
            "Seres Scablands"
        ],
        "drops": [
            "raw bird thigh"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/rainbow_pigeon/image"
    },
    {
        "id": 38,
        "name": "hotfeather pigeon",
        "description": "This rare breed of pigeon lives near Death Mountain. Their fireproof feathers are valuable as clothing material. Their meat, on the other hand, is not fireproof, and it'll burn up as soon as it's struck.",
        "common_locations": [
            "Eldin Canyon",
            "Eldin Mountains"
        ],
        "drops": [
            "raw bird thigh"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/hotfeather_pigeon/image"
    },
    {
        "id": 39,
        "name": "white pigeon",
        "description": "This white-feathered breed of pigeon lives in the Hebra region. It's said that a wood pigeon survived atop a snowy mountain by changing its colors to blend in with the snow and soon after became a white pigeon. They have an extra layer of fat to guard against the cold, so they have been known to yield high-quality meat.",
        "common_locations": [
            "Hebra Mountains",
            "Gerudo Highlands"
        ],
        "drops": [
            "raw bird thigh",
            "raw whole bird"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/white_pigeon/image"
    },
    {
        "id": 40,
        "name": "mountain crow",
        "description": "This bird is known for its cleverness and for its distinct claws. They make their homes in the mountains, forests, and villages alike. Not only are their jet-black feathers seen as an ill omen, but they'll steal crops right out of a farmer's hands if given the chance. Because of this, they're often met with enmity.",
        "common_locations": [
            "Hyrule Ridge",
            "Great Hyrule Forest"
        ],
        "drops": [
            "raw bird drumstick"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/mountain_crow/image"
    },
    {
        "id": 41,
        "name": "bright-chested duck",
        "description": "These birds can be found on waterfronts all over Hyrule. Their webbed feet make them excellent swimmers, and their long necks allow them to duck their heads underwater to find food. Their fatty meat is high quality.",
        "common_locations": [
            "Hyrule Ridge",
            "Hyrule Field"
        ],
        "drops": [
            "raw bird drumstick"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/bright-chested_duck/image"
    },
    {
        "id": 42,
        "name": "blue-winged heron",
        "description": "These birds live on waterfronts all throughout Hyrule. Their characteristically thin legs and long necks help them catch water-dwelling fish or frogs for food. They lie perfectly still in wait for their prey and then stretch out their long necks to capture their meal.",
        "common_locations": [
            "Hyrule Ridge",
            "Faron Grasslands"
        ],
        "drops": [
            "raw bird drumstick"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/blue-winged_heron/image"
    },
    {
        "id": 43,
        "name": "pink heron",
        "description": "This breed of Heron is characterized by the pink tips of its feathers. Unlike its waterfront-dwelling relative the blue-winged heron, these live in grasslands or arid regions and subsist on insects that live in the grass. They can often be found walking about searching for food but will fly away if they sense danger.",
        "common_locations": [
            "Hyrule Ridge",
            "Hyrule Field"
        ],
        "drops": [
            "raw bird drumstick"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/pink_heron/image"
    },
    {
        "id": 44,
        "name": "islander hawk",
        "description": "These carnivorous birds live in plains or highlands. They use their sharp talons and beaks to catch and eat small animals and other birds. They soar calmly through the sky and search for prey from above.",
        "common_locations": [
            "Hyrule Field",
            "Hyrule Ridge"
        ],
        "drops": [
            "raw bird thigh"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/islander_hawk/image"
    },
    {
        "id": 45,
        "name": "seagull",
        "description": "These birds live near the ocean. They eat mainly fish, so a flock of seagulls hovering over water is a good indication of where there are fish. Fisherman use this to their advantage when searching for a catch of their own.",
        "common_locations": [
            "Necluda Sea",
            "Akkala Sea"
        ],
        "drops": [
            "raw bird drumstick"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/seagull/image"
    },
    {
        "id": 46,
        "name": "eldin ostrich",
        "description": "This large bird makes its home in the volcanic region of Eldin. Their heat-resistant feathers and skin are evolutionary traits produced by the harsh environment. Their wings are too small to facilitate flight, but their long legs make them pretty speedy runners.",
        "common_locations": [
            "Eldin Canyon",
            "Eldin Mountains"
        ],
        "drops": [
            "raw bird thigh",
            "raw whole bird"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/eldin_ostrich/image"
    },
    {
        "id": 47,
        "name": "cucco",
        "description": "Villages often raise these birds for their eggs, but some people actually keep them as pets. They can't fly, but can flap their wings mighty furiously if picked up. They're usually calm creatures, but if you're persistent in your torment of them... Well...",
        "common_locations": [
            "West Necluda",
            "East Necluda"
        ],
        "drops": [
            "bird egg"
        ],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/cucco/image"
    },
    {
        "id": 48,
        "name": "hyrule bass",
        "description": "An ordinary fish that can be found all over Hyrule. It can be eaten raw, but cooking it amplifies its healing benefits.",
        "common_locations": [
            "Hyrule Field",
            "West Necluda"
        ],
        "hearts_recovered": 1.0,
        "cooking_effect": "",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/hyrule_bass/image"
    },
    {
        "id": 49,
        "name": "hearty bass",
        "description": "This large fish lives near the shoreline. Its sizable body can store a lot of nutrients. When cooked into a dish, it will temporarily increase your maximum hearts.",
        "common_locations": [
            "West Necluda",
            "Akkala Highlands"
        ],
        "hearts_recovered": 2.0,
        "cooking_effect": "extra hearts",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/hearty_bass/image"
    },
    {
        "id": 50,
        "name": "staminoka bass",
        "description": "This Hyrule bass got to be the biggest fish by never getting caught (until now). Its long life results in a cooked dish that will restore a lot of stamina.",
        "common_locations": [
            "Hyrule Field",
            "West Necluda"
        ],
        "hearts_recovered": 1.0,
        "cooking_effect": "stamina recovery",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/staminoka_bass/image"
    },
    {
        "id": 51,
        "name": "hearty salmon",
        "description": "This fish makes its home in cold water, giving it extra layers of fat. It temporarily increases your maximum hearts when used in cooking.",
        "common_locations": [
            "Tabantha Frontier",
            "Hebra Mountains"
        ],
        "hearts_recovered": 4.0,
        "cooking_effect": "extra hearts",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/hearty_salmon/image"
    },
    {
        "id": 52,
        "name": "chillfin trout",
        "description": "This blue trout prefers cold bodies of water. Its skin contains enzymes that keep its body cool, and when cooked into a dish, it will temporarily boost your heat resistance.",
        "common_locations": [
            "Tabantha Frontier",
            "Hebra Mountains"
        ],
        "hearts_recovered": 1.0,
        "cooking_effect": "heat resistance",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/chillfin_trout/image"
    },
    {
        "id": 53,
        "name": "sizzlefin trout",
        "description": "This red trout prefers warm bodies of water. It has a special organ specifically for storing heat. When cooked into a dish, it will temporarily increase your resistance to the cold.",
        "common_locations": [
            "Eldin Canyon",
            "Eldin Mountains"
        ],
        "hearts_recovered": 1.0,
        "cooking_effect": "cold resistance",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/sizzlefin_trout/image"
    },
    {
        "id": 54,
        "name": "voltfin trout",
        "description": "This trout makes its home in the freshwater lakes. Its scales have an insulating compound that, when cooked into a dish, offers resistance to electricity.",
        "common_locations": [
            "Tabantha Frontier",
            "Hyrule Ridge"
        ],
        "hearts_recovered": 1.0,
        "cooking_effect": "shock resistance",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/voltfin_trout/image"
    },
    {
        "id": 55,
        "name": "stealthfin trout",
        "description": "Consuming the bioluminescent compound that makes this fish glow in the dark will increase concentration. Dishes cooked with it will suppress noise when consumed.",
        "common_locations": [
            "Great Hyrule Forest",
            "Eldin Mountains"
        ],
        "hearts_recovered": 1.0,
        "cooking_effect": "stealth up",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/stealthfin_trout/image"
    },
    {
        "id": 56,
        "name": "mighty carp",
        "description": "This freshwater fish lives alongside its less mighty carp ilk. A compound in its liver promotes muscle growth. Dishes cooked with it will temporarily increase your attack power.",
        "common_locations": [
            "Akkala Highlands",
            "Lanayru Great Spring"
        ],
        "hearts_recovered": 1.0,
        "cooking_effect": "attack up",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/mighty_carp/image"
    },
    {
        "id": 57,
        "name": "armored carp",
        "description": "Calcium deposits in the scales of this ancient fish make them as hard as armor. Cooking it into a dish will fortify your bones, temporarily increasing your defense.",
        "common_locations": [
            "Lanayru Great Spring",
            "East Necluda"
        ],
        "hearts_recovered": 1.0,
        "cooking_effect": "defense up",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/armored_carp/image"
    },
    {
        "id": 58,
        "name": "sanke carp",
        "description": "This wild armored carp has been bred into a prizewinning fish. Its beautifully colored markings do not occur in nature. It offers no special effects when cooked.",
        "common_locations": [
            "West Necluda"
        ],
        "hearts_recovered": 1.0,
        "cooking_effect": "",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/sanke_carp/image"
    },
    {
        "id": 59,
        "name": "mighty porgy",
        "description": "This ocean-dwelling fish comes with one rude attitude. The compounds in its flesh elevate your competitive spirit when it's cooked into a dish, thus increasing your attack power.",
        "common_locations": [
            "Necluda Sea",
            "Lanayru Sea"
        ],
        "hearts_recovered": 1.0,
        "cooking_effect": "attack up",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/mighty_porgy/image"
    },
    {
        "id": 60,
        "name": "armored porgy",
        "description": "This porgy's body is covered in armor-hard scales. The compounds in its scales, when cooked into a dish, fortify your bones and temporarily boost your defense.",
        "common_locations": [
            "Necluda Sea",
            "Lanayru Sea"
        ],
        "hearts_recovered": 1.0,
        "cooking_effect": "defense up",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/armored_porgy/image"
    },
    {
        "id": 61,
        "name": "sneaky river snail",
        "description": "This large, glow-in-the-dark snail lives in fresh water. When cooked into a dish, it heightens your senses so you can move about silently.",
        "common_locations": [
            "West Necluda",
            "Lanayru Great Spring"
        ],
        "hearts_recovered": 1.0,
        "cooking_effect": "stealth up",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/sneaky_river_snail/image"
    },
    {
        "id": 62,
        "name": "hearty blueshell snail",
        "description": "This snail lives on sandy beaches in large numbers. Its flesh contains a high amount of stimulants, so when cooked into a dish, it temporarily increases your maximum hearts.",
        "common_locations": [
            "Lanayru Sea",
            "Necluda Sea"
        ],
        "hearts_recovered": 1.0,
        "cooking_effect": "extra hearts",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/hearty_blueshell_snail/image"
    },
    {
        "id": 63,
        "name": "razorclaw crab",
        "description": "This crab is well known for its exceptionally sharp pincers. When cooked, the strength compound in its claws will increase your attack power.",
        "common_locations": [
            "Necluda Sea",
            "East Necluda"
        ],
        "hearts_recovered": 1.0,
        "cooking_effect": "attack up",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/razorclaw_crab/image"
    },
    {
        "id": 64,
        "name": "ironshell crab",
        "description": "This crab's shell is particularly hard. When cooked into dish, its fat and meat bolster the body to increase your defense.",
        "common_locations": [
            "Necluda Sea",
            "East Necluda"
        ],
        "hearts_recovered": 1.0,
        "cooking_effect": "defense up",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/ironshell_crab/image"
    },
    {
        "id": 65,
        "name": "bright-eyed crab",
        "description": "This crab appears in large numbers when it rains. Once bite of its delectable meat, and you'll forget all your exhaustion. Replenishes your stamina when cooked into a dish.",
        "common_locations": [
            "Lanayru Great Spring",
            "Eldin Canyon"
        ],
        "hearts_recovered": 1.0,
        "cooking_effect": "stamina recovery",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/bright-eyed_crab/image"
    },
    {
        "id": 66,
        "name": "fairy",
        "description": "This fairy will fly from your pouch and heal all your wounds the moment you lose your last heart. It's easily mistaken for a firefly at first, but it glows in the daylight as well as night.",
        "common_locations": [
            "Greater Hyrule"
        ],
        "hearts_recovered": 5.0,
        "cooking_effect": "",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/fairy/image"
    },
    {
        "id": 67,
        "name": "winterwing butterfly",
        "description": "The powdery scales of this butterfly's wings cool the air around it. Watching it flutter around snowflakes is a thing of beauty. Cook it with monster parts for a heat-resistant elixir.",
        "common_locations": [
            "Hyrule Ridge",
            "Tabantha Frontier"
        ],
        "hearts_recovered": 0.0,
        "cooking_effect": "heat resistance",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/winterwing_butterfly/image"
    },
    {
        "id": 68,
        "name": "summerwing butterfly",
        "description": "A butterfly found in the woods and plains of warm regions. Its wings absorb the warmth of the sun. Cook it with monster parts to create an elixir that makes you feel warm and fuzzy.",
        "common_locations": [
            "Great Hyrule Forest",
            "Eldin Mountains"
        ],
        "hearts_recovered": 0.0,
        "cooking_effect": "cold resistance",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/summerwing_butterfly/image"
    },
    {
        "id": 69,
        "name": "thunderwing butterfly",
        "description": "This rare butterfly only shows itself when it rains. The organs in its body produce an insulating compound. When made into an elixir, it offers electrical resistance.",
        "common_locations": [
            "Hyrule Ridge",
            "Gerudo Highlands"
        ],
        "hearts_recovered": 0.0,
        "cooking_effect": "shock resistance",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/thunderwing_butterfly/image"
    },
    {
        "id": 70,
        "name": "smotherwing butterfly",
        "description": "A butterfly found in the woods and plains of warm regions. Its wings absorb the warmth of the sun. Cook it with monster parts to create an elixir that makes you feel warm and fuzzy.",
        "common_locations": [
            "Eldin Canyon",
            "Death Mountain"
        ],
        "hearts_recovered": 0.0,
        "cooking_effect": "flame guard",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/smotherwing_butterfly/image"
    },
    {
        "id": 71,
        "name": "cold darner",
        "description": "This dragonfly prefers the cool shade of trees to the warmth of the sun. Its wings disperse heat from its body, which can be cooked into a heat-resistance elixir.",
        "common_locations": [
            "Tabantha Frontier",
            "Hyrule Ridge"
        ],
        "hearts_recovered": 0.0,
        "cooking_effect": "heat resistance",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/cold_darner/image"
    },
    {
        "id": 72,
        "name": "warm darner",
        "description": "This dragonfly has a special organ that causes it to sweat profusely. Cook it with monster parts for an elixir that will raise your core temperature so you can resist the cold.",
        "common_locations": [
            "Akkala Highlands",
            "Hyrule Field"
        ],
        "hearts_recovered": 0.0,
        "cooking_effect": "cold resistance",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/warm_darner/image"
    },
    {
        "id": 73,
        "name": "electric darner",
        "description": "This rare dragonfly only appears in the rain. Its wings direct electricity away from its body. Cook it with monster parts for an electricity-resistance elixir.",
        "common_locations": [
            "Hyrule Ridge",
            "Gerudo Desert"
        ],
        "hearts_recovered": 0.0,
        "cooking_effect": "shock resistance",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/electric_darner/image"
    },
    {
        "id": 74,
        "name": "restless cricket",
        "description": "A very energetic cricket. Cook it with monster parts to create a stamina-recovery elixir.",
        "common_locations": [
            "Hyrule Field",
            "East Necluda"
        ],
        "hearts_recovered": 0.0,
        "cooking_effect": "stamina recovery",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/restless_cricket/image"
    },
    {
        "id": 75,
        "name": "bladed rhino beetle",
        "description": "This beetle's razor-sharp horns demand that you handle it with care. Boil the horns alongside monster parts to concoct an elixir that will raise your attack power.",
        "common_locations": [
            "West Necluda",
            "East Necluda"
        ],
        "hearts_recovered": 0.0,
        "cooking_effect": "attack up",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/bladed_rhino_beetle/image"
    },
    {
        "id": 76,
        "name": "rugged rhino beetle",
        "description": "This beetle's hard body resembles armor. When the shell is cooked with monster parts, the resulting elixir boosts your defense.",
        "common_locations": [
            "Hyrule Field",
            "Faron Grasslands"
        ],
        "hearts_recovered": 0.0,
        "cooking_effect": "defense up",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/rugged_rhino_beetle/image"
    },
    {
        "id": 77,
        "name": "energetic rhino beetle",
        "description": "This valuable beetle can live up to ten years. When cooked with monster parts, its impressive vitality translates into an elixir that will greatly restore your stamina.",
        "common_locations": [
            "Akkala Highlands",
            "West Necluda"
        ],
        "hearts_recovered": 0.0,
        "cooking_effect": "stamina recovery",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/energetic_rhino_beetle/image"
    },
    {
        "id": 78,
        "name": "sunset firefly",
        "description": "These fireflies glow gently in the dark. When cooked with monster parts, the compound that causes it to glow results in an elixir that will allow you to move more quietly.",
        "common_locations": [
            "West Necluda",
            "Great Hyrule Forest"
        ],
        "hearts_recovered": 0.0,
        "cooking_effect": "stealth up",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/sunset_firefly/image"
    },
    {
        "id": 79,
        "name": "hot-footed frog",
        "description": "A quick frog that can be found hopping around near water. Cook it with monster parts to draw out its speed-boost effect.",
        "common_locations": [
            "Lanayru Great Spring",
            "Hyrule Ridge"
        ],
        "hearts_recovered": 0.0,
        "cooking_effect": "speed up",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/hot-footed_frog/image"
    },
    {
        "id": 80,
        "name": "tireless frog",
        "description": "This rare frog only ventures out in the rain. When cooked with monster parts, the elixir it produces will temporarily increase your maximum stamina.",
        "common_locations": [
            "Lanayru Great Spring",
            "Hyrule Ridge"
        ],
        "hearts_recovered": 0.0,
        "cooking_effect": "extra stamina",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/tireless_frog/image"
    },
    {
        "id": 81,
        "name": "hightail lizard",
        "description": "A lizard found throughout Hyrule. It's a but slow to react at times, but it given a chance to escape, it will dart off quickly. Cook it with monster parts for a speed-boosting elixir.",
        "common_locations": [
            "West Necluda",
            "East Necluda"
        ],
        "hearts_recovered": 0.0,
        "cooking_effect": "speed up",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/hightail_lizard/image"
    },
    {
        "id": 82,
        "name": "hearty lizard",
        "description": "This rare lizard lives deep in the forests. It feeds on high-nutrient foods, giving it great vitality. When used to make elixirs, they temporarily increase your maximum hearts.",
        "common_locations": [
            "Gerudo Desert",
            "Necluda Sea"
        ],
        "hearts_recovered": 0.0,
        "cooking_effect": "extra hearts",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/hearty_lizard/image"
    },
    {
        "id": 83,
        "name": "fireproof lizard",
        "description": "This rare lizard can only be found in the Eldin region. Its scales have heat-resistant properties, so when cooked with monster parts it produces a heat-resistance elixir.",
        "common_locations": [
            "Eldin Canyon",
            "Death Mountain"
        ],
        "hearts_recovered": 0.0,
        "cooking_effect": "flame guard",
        "drops": [],
        "image": "https://botw-compendium.herokuapp.com/api/v2/entry/fireproof_lizard/image"
    }
];

var creature_materials = [
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
        "common_locations": [
            "Hyrule Castle Dining Hall"
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
            "grassland fox",
            "mountain goat"
        ],
        "common_locations": [
            "Hyrule Castle Dining Hall"
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
        "common_locations": [
            "Hyrule Castle Dining Hall"
        ],
        "cooking_effect": "",
        "image": "raw_prime_meat.png"
    },
    {
        "id": 204,
        "name": "raw bird thigh",
        "description": "A high-quality piece of meat that's hard to come by. You can eat it raw, but cooking it first will recover more hearts.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "raw_bird_thigh.png"
    },
    {
        "id": 205,
        "name": "raw bird drumstick",
        "description": "This meat is tougher and chewier than a standard steak. Tastes better cooked.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "raw_bird_drumstick.png"
    },
    {
        "id": 206,
        "name": "raw whole bird",
        "description": "This prized meat can be obtained from certain birds. It gets full points for flavor, nutrition, and volume. It pairs perfectly with other ingredients or can be enjoyed alone.",
        "hearts_recovered": "",
        "dropped_by": [],
        "common_locations": [],
        "cooking_effect": "",
        "image": "raw_whole_bird.png"
    }
];

var misc_materials = [
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
        "image": "bird_egg.png"
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
        "image": "acorn.png"
    },
    {
        "id": 212,
        "name": "chickaloo tree nut",
        "description": "Small birds love this nut. You can eat it raw for a minor effect, but it can also be added as a spice to other recipes.",
        "hearts_recovered": "",
        "common_locations": [],
        "cooking_effect": "",
        "image": "chickaloo_tree_nut.png"
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

let droppedBy = {}

for (let creature of creatures) {
    const drops = creature["drops"];
    for (let material of drops) {
        if (!droppedBy[material]) {
            droppedBy[material] = [];
        }
        droppedBy[material].push(creature["name"]);
    }
}

for (let material of creature_materials) {
    material["dropped_by"] = droppedBy[material["name"]];
}

for (let material of misc_materials) {
    material["dropped_by"] = droppedBy[material["name"]];
}

console.log(creature_materials, misc_materials);

