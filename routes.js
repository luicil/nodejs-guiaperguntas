const express = require("express");
const router = express.Router();
const Pergunta = require("./database/models/Pergunta");

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/perguntar",(req, res) =>{
    res.render("perguntar");
});

router.post("/salvarpergunta", (req, res) =>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() =>{
        res.redirect("/");
    });
});

module.exports = router;
