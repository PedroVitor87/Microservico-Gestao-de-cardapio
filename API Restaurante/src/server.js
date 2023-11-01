const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 4444
app.use(express.json())
app.use(cors())

//Para usar arquivos estáticos como o html
app.use(express.static(__dirname, { 'Content-Type': 'application/javascript', 'strict': false }));

app.get('/cardapio', (req, res) => {
    res.sendFile(__dirname + '/index.html') //sendFile para enviar o arquivo index.html como resposta
});

app.listen(PORT, () => {
    console.log(`API Restaurante funcionando na rota ${PORT}`)
})