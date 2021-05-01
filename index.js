const express = require("express");
const app = express();
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`Example app is listening on port: ${port}`);
})

// Get list of cooking ingredients

// Get list by cooking effects

// "heat resistance",
// "shock resistance",
// "stamina recovery",
// "energizing",
// "flame guard",
// "speed up",
// "extra hearts",
// "attack up",
// "stealth up",
// "cold resistance",
// "defense up"

// Get list of elixir ingredients

// Get list by elixir duration

// Get list by elixir effects

// "heat resistance",
// "shock resistance",
// "stamina recovery",
// "energizing",
// "flame guard",
// "speed up",
// "extra hearts",
// "attack up",
// "stealth up",
// "cold resistance",
// "defense up"

