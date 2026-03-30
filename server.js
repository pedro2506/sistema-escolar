const express = require('express');
const multer  = require('multer');
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'publico/') 
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) 
  }
});

const upload = multer({ storage: storage });

// ESTA É A ROTA QUE O POSTMAN PRECISA CHAMAR
app.post('/teste', upload.single('imagem'), (req, res) => {
    console.log(">>> RECEBI UMA CHAMADA NO POSTMAN! <<<"); // Adicione isso aqui
    if (!req.file) {
        return res.status(400).send('Nenhum arquivo enviado.');
    }
    res.send({ mensagem: 'Sucesso!', arquivo: req.file.originalname });
});

app.listen(5000, () => {
    console.log("servidor iniciado na porta 5000");
});






