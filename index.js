const { large_creatures } = require('./data/items/large_creatures');
const { creature_drops } = require('./data/items/creature_drops');
const { small_creatures } = require('./data/items/small_creatures');
const { monsters } = require('./data/items/monsters');
const express = require("express");
const app = express();
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/creatures/large/", (req, res) => {
    let largeCreatures = large_creatures;

    req.query.location = req.query.location && typeof req.query.location === 'string'? 
                        [req.query.location] : 
                        req.query.location;

    if (req.query.location) {
        for (let location of req.query.location) {
            largeCreatures = largeCreatures.filter(creature => {
                if (creature.common_locations.indexOf(location) > -1) {
                    return creature;
                }
            })
        }
    }

    if (largeCreatures.length === 0)
    {
        res.sendStatus(404);
    } else {
        res.send(largeCreatures);
    }
})

app.get("/creatures/large/:id", (req, res) => {
    const creature = large_creatures.find(creature => {
        return creature.id === parseInt(req.params.id)
    });
    if (creature) {
        res.send(creature);
    } else {
        res.sendStatus(404);
    }
})

app.get("/creatures/large/:id/drops", (req, res) => {
    const creature = large_creatures.find(creature => {
        return creature.id === parseInt(req.params.id)
    });
    if (creature) {
        const drops = creature_drops.filter(item => {
            if (creature.drops.indexOf(item.name) > -1) {
                return item;
            }
        });
        if (drops.length > 0) {
            res.send(drops);
        }
    }
    res.sendStatus(404);
})

app.get("/creatures/small", (req, res) => {
    res.send(small_creatures);
})

app.get("/creatures/small/:id", (req, res) => {
    const creature = small_creatures.find(creature => {
        return creature.id === parseInt(req.params.id)
    });
    if (creature) {
        res.send(creature);
    } else {
        res.sendStatus(404);
    }
})

app.get("/monsters", (req, res) => {
    let monstersList = monsters;
    req.query.location = req.query.location && typeof req.query.location === 'string'? 
                        [req.query.location] : 
                        req.query.location;

    if (req.query.location) {
        for (let location of req.query.location) {
            monstersList = monstersList.filter(creature => {
                if (creature.common_locations.indexOf(location) > -1) {
                    return creature;
                }
            })
        }
    }

    if (monstersList.length === 0)
    {
        res.sendStatus(404);
    } else {
        res.send(monstersList);
    }
})

app.get("/monsters/:id", (req, res) => {
    const monster = monsters.find(monster => {
        return monster.id === parseInt(req.params.id)
    });
    if (monster) {
        res.send(monster);
    } else {
        res.sendStatus(404);
    }
})

app.listen(port, () => {
    console.log(`Example app is listening on port: ${port}`);
})

