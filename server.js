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
app.post('/publico', upload.single('imagem'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('Nenhum arquivo enviado.');
    }
    res.send({ mensagem: 'Sucesso!', arquivo: req.file.originalname });
});

app.listen(1234, () => {
    console.log("servidor iniciado na porta 1234");
});






