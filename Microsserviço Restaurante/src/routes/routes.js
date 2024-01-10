const express = require('express')
const routes = express.Router()
const menuController = require('../controller/menuController')

routes.get("/cardapio", menuController.searchMenu);
routes.post("/cardapio/criar-prato", menuController.createDish);
routes.delete("/cardapio/:id/apagar-prato", menuController.deleteDishMenu);
routes.patch("/cardapio/:id/atualizar-valor", menuController.updateDishValue);

module.exports = routes;