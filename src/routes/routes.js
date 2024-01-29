const express = require('express')
const routes = express.Router()
const menuController = require('../controller/menuController')
const { validateMenu } = require('../middlewares/menuValidations')

routes.get("/cardapio", menuController.searchMenu);
routes.post("/cardapio/criar-prato", validateMenu, menuController.createDish);
routes.delete("/cardapio/:id/apagar-prato", menuController.deleteDishMenu);
routes.patch("/cardapio/:id/atualizar-valor", menuController.updateDishValue);

module.exports = routes;