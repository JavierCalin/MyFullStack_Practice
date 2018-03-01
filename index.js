const express = require("express");
const morgan = require ("morgan");
const app = express();

//settings
app.set("appName", "Mi Proyecto FS");
console.log("nombre d ela app es:"+app.get("appName"));
app.set("views", __dirname+"/views");
console.log(__dirname+"/views");
app.set("view engine", "ejs");

//midelware
  //mi middelware
  app.use((req,res,next)=>{
    console.log("esta es la url de la ruta"+req.url);
    next();
  });
  //morgan middelware
  app.use(morgan('combined'));

//enrutamiento
app.get('/',(req,res)=>{
  res.render("index.ejs");
});
app.get('/canarias',(req,res)=>{
  res.render("canarias.ejs");
});
app.get('/hotel1canarias',(req,res)=>{
  res.render("hotelcanario.ejs");
});
app.get('*',(req,res)=>{
  res.end("archivo no encontrado");
});

app.listen(3000, ()=>{
  console.log("server funcionando");
});
