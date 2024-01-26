const express = require('express');
require('./src/models/index')
const cors = require('cors');
const app = express();
const PORT = 3333;
const routes = require('./src/routes/routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, () => {
    console.log(`Microsserviço de Restaurante funcionando na porta ${PORT}`);
});

