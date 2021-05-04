const { large_creatures } = require('./data/items/large_creatures');
const express = require("express");
const app = express();
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/creatures/large/", (req, res) => {
    let large_creatures_formatted = large_creatures.map(creature => {
        delete creature.drops;
        return creature;
    });

    req.query.location = req.query.location && typeof req.query.location === 'string'? 
                        [req.query.location] : 
                        req.query.location;

    if (req.query.location) {
        for (let location of req.query.location) {
            large_creatures_formatted = large_creatures_formatted.filter(creature => {
                if (creature.common_locations.indexOf(location) > -1) {
                    return creature;
                }
            })
        }
    }

    if (large_creatures_formatted.length === 0)
    {
        res.sendStatus(404);
    } else {
        res.send(large_creatures_formatted);
    }
})

app.listen(port, () => {
    console.log(`Example app is listening on port: ${port}`);
})

