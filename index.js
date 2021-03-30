const express = require("express");
const app = express();
const port = 80;

app.set("view engine","ejs");
app.get("/:nome?/:lang?",(req, res) =>{
    //res.send("Bem vindo ao perguntas e respostas.")

    var nome = req.params.nome ? req.params.nome : "Luicil";
    var lang = req.params.lang ? req.params.lang : "VB";
    //res.render("index");
    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Teste",
        inscr: 10
    });
    //res.render("home");
    //res.render("principal/usuario");
});

app.listen(port,(erro) =>{
    if(erro){
        console.log("Erro ao iniciar o servidor.");
    } else {
        console.log("Servidor iniciado na porta: " + port);
    }
});
