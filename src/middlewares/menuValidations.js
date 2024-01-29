const validateMenu = (req, res, next) => {
    const { dish_name, description, value } = req.body;
  
    const errors = [];
  
    if (!dish_name || dish_name.trim() === '') {
        errors.push('O nome do prato é obrigatório.');
    }
    if (dish_name.length <= 4){
        errors.push('O nome do prato tem que conter no minimo 4 caracteres.')
    }
    if (description.length > 400) {
        errors.push('A descrição não pode ter mais de 400 caracteres.');
    }
    if (!/^\d+(\.\d{1,2})?$/.test(value)) {
        errors.push('O valor deve ser um número decimal com até duas casas decimais.');
    }     

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
    next();
};
  
module.exports = { validateMenu };
  