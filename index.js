const express = require("express");
const app = express();

//midelware
app.use((req,res,next)=>{
  console.log("esta es la url de la ruta"+req.url);
  next();
});

//enrutamiento
app.get('/',(req,res)=>{
  res.end("hello world");
});
app.get('/canarias',(req,res)=>{
  res.end("aqui va la pagina de hoteles en canarias");
});
app.get('/hotel1canarias',(req,res)=>{
  res.end("aqui va la pagina del hotel1 de canariias");
});
app.get('*',(req,res)=>{
  res.end("archivo no encontrado");
});

app.listen(3000, ()=>{
  console.log("server funcionando");
});
