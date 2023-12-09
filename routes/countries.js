const express = require("express");
const router = express.Router();
const data = require("../data/countries.json");

router.get("/", (req, res) => {
    //console.log(data);
    res.status(200).json(data);
});

router.get("/:countryId", (req, res) => {
    const country = data.countries.filter((country) => {
        if (country.id.toString() === req.params.countryId) {
            return country;
        }
    });
    res.status(200).json(country);
});

module.exports = router;
