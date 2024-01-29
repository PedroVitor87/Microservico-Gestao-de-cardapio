// const MenuModel = require('../model/menu');
const models = require('../models')
const menuModel = models.Menu

class MenuController {
    async searchMenu(req, res){
        try{
            const menu = await menuModel.findAll({});
            res.status(200).json(menu);
        }catch(err){
            res.status(500).json({error: 'Erro ao localizar cardápio'});    
        };
    };
    async createDish(req, res){
        try {
            const { dish_name, description, value } = req.body;
            if (!dish_name || !value) {
                return res.status(400).json({ error: 'Nome do prato e valor são obrigatórios.' });
            };
            const newDish = await menuModel.create({ dish_name, description, value });
            res.status(201).json({
                message: 'Prato criado com sucesso.',
                dish: newDish.toJSON()
            });
        }catch (err) {
            res.status(500).json({ error: 'Erro ao criar prato.' });
        };
    };
    async deleteDishMenu(req, res){
        try{
            const idDish = req.params.id;
            const delet = await menuModel.findByPk(idDish);
            if (!delet) {
                return res.status(404).json({error: 'Prato não encontrado no cardápio'});
            };

            await delet.destroy();

            res.status(200).json({message: 'Prato excluído com sucesso'});
        }catch (err) {
            res.status(500).json({ error: 'Erro ao deletar prato.' });
        };
    };
    async updateDishValue(req, res) {
        try{
            const idDish = req.params.id;
            const { value } = req.body;
            const dish = await menuModel.findByPk(idDish);
            if (!dish) {
                return res.status(404).json({ error: 'Prato não encontrado.' });
            };
            await dish.update({ value });
            const updatedDish = await menuModel.findByPk(idDish);
            return res.status(200).json({ message: 'Valor do prato atualizado com sucesso.' , dish: updatedDish });
        }catch(err){
            console.error(err)
            res.status(500).json({ error: 'Erro ao atualizar prato'})
        };
    };
};

const menuControllerInstance = new MenuController();
module.exports = menuControllerInstance;