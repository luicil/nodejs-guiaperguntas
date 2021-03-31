const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/perguntar",(req, res) =>{
    res.render("perguntar");
});

router.post("/salvarpergunta", (req, res) =>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Dados: Título = " + titulo + " Descrição = " + descricao);
});

module.exports = router;
