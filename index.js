const { large_creatures } = require('./data/items/large_creatures');
const { creature_drops } = require('./data/items/creature_drops');
const { small_creatures } = require('./data/items/small_creatures');
const express = require("express");
const app = express();
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/creatures/large/", (req, res) => {
    req.query.location = req.query.location && typeof req.query.location === 'string'? 
                        [req.query.location] : 
                        req.query.location;

    if (req.query.location) {
        for (let location of req.query.location) {
            large_creatures = large_creatures.filter(creature => {
                if (creature.common_locations.indexOf(location) > -1) {
                    return creature;
                }
            })
        }
    }

    if (large_creatures.length === 0)
    {
        res.sendStatus(404);
    } else {
        res.send(large_creatures);
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

app.listen(port, () => {
    console.log(`Example app is listening on port: ${port}`);
})

