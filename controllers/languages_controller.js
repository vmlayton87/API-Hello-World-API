const express = require('express')
const languages = express.Router()
const Language = require('../models/language.js')
const seeder = require(`../models/seeder.js`)

// INDEX

languages.get(`/`, (req, res) => {
    Language.find()
    .then(foundLanguages => {
        res.json(foundLanguages)
    })
})


// SEED Route
languages.get(`/seed`, (req, res) => {
    Language.insertMany({seeder})
    .then(createdLanguages=>{
        res.json({
            message: "Seed successful!"
        })})
})


// RANDOM
languages.get(`/random`, (req, res)=>{
    Language.find()
    .then(foundLanguages => {
        let length = foundLanguages.length
        let random = Math.floor(Math.random() * length)
        res.json(foundLanguages[random])
    })
       
})

// SHOW

languages.get(`/:name`, (req, res) => {
    Language.findOne({name: req.params.name.toLowerCase()})
    .then(foundLanguage => {
        res.json(foundLanguage)
    })
})

module.exports = languages



