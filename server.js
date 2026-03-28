const express = require('express');

const app = express();

app.get ('/', (req, res) => {
    res.send('Requisição recebida!');
});

app.get('/home', (req, res) => {
    res.send("Home Page");
})

app.get('/ME', (req, res) => { --colcar /me/pedro/fortaleza
    const {nome, cidade} = req.query;
    res.send(`Meu nome é ${nome}, moro em ${cidade}`);
})

app.get('/ME/:nome/:cidade', (req, res) => { 
    const {nome, cidade} = req.params;
    res.send(`Meu nome é ${nome}, moro em ${cidade}`);
})


app.listen(1234, () => {
    console.log("servidor iniciado na porta 1234");
});