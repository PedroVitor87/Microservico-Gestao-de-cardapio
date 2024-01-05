const MenuModel = require('../model/menu');

class MenuController {
    async searchMenu(req, res){
        try{
            const menu = await MenuModel.findAll();
            res.status(200).json(menu);
        }catch(err){
            res.status(500).json({error: err.message});    
        }
    }
}

const menuControllerInstance = new MenuController();
module.exports = menuControllerInstance;