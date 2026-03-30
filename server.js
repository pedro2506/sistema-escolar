const express=require('express'),multer=require('multer'),path=require('path'),fs=require('fs');
const app=express();
const PUBLIC=path.join(__dirname,'publico'),UPLOADS=path.join(PUBLIC,'uploads');
if(!fs.existsSync(UPLOADS))fs.mkdirSync(UPLOADS,{recursive:1});
app.use(express.static(PUBLIC));
const upload=multer({storage:multer.diskStorage({destination:(r,f,cb)=>cb(null,UPLOADS),filename:(r,f,cb)=>cb(null,Date.now()+path.extname(f.originalname))}),fileFilter:(r,f,cb)=>cb(null,!!(f.mimetype||'').startsWith('image/')),limits:{fileSize:5*1024*1024}});
app.post('/upload',upload.single('image'),(req,res)=>req.file?res.json({url:'/uploads/'+req.file.filename}):res.status(400).send('Nenhum arquivo'));
app.get('/',(req,res)=>res.send('Imagem recebida'));
app.listen(5000,()=>console.log('servidor iniciado na porta 5000'));






