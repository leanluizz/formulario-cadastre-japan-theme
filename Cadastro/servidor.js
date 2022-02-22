const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const bodyPars = require("body-parser");
const Port = 1546

// SETT
app.set("views", "./views")
app.set("view engine", "ejs")

// BODY PARSER
app.use(bodyPars.urlencoded({extended:false}))
app.use(bodyPars.json())

// SEQUELIZE
const sequelize = new Sequelize("crud_japones", "root", "Pcdfgh135790!",{
     host:"localhost",
     dialect:"mysql"
})
const Table = sequelize.define("Usuarios", {
     nome: {
         type: Sequelize.STRING
     },
     senha: {
         type: Sequelize.STRING
     },
     email:{
          type:Sequelize.STRING
     },
     cla:{
          type:Sequelize.STRING
     }
 });

app.post("/add?", function(req, res){
    Table.create({
     nome:req.body.nome,
     senha:req.body.senha,
     email:req.body.email,
     cla:req.body.cla
}).then(function(){
     res.render("sucess")
 }).catch(function(){
     res.render("erro")
 })
})


// STATIC FILES
app.use(express.static("public"))
app.use("/css", express.static(__dirname + "public/css"))
app.use("/img", express.static(__dirname + "public/img"))

app.get("/cadastro", function(req, res){
     res.render("index")
})
app.listen(Port, function(){
     console.log(`Server-loading in localhost:${Port}`);
})