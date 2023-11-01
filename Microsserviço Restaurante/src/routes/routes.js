const express = require('express')
const routes = express.Router()
const arrayPratos = require('../data/pratosArray')

routes.get("/", (req, res) => {
    res.status(200).json(arrayPratos)
})

routes.get("/pratos", (req, res) => {
    res.status(200).json(arrayPratos)
})

routes.post("/pratos/novoprato", (req, res) => {
    const {id, prato, descricao, valor} = req.body
    const novoPrato = {
        id,
        prato,
        descricao,
        valor
    }
    arrayPratos.push(novoPrato)
    res.status(201).json(novoPrato)
})

module.exports = routes