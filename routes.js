const express = require("express");
const router = express.Router();
const Pergunta = require("./database/models/Pergunta");
const Resposta = require("./database/models/Resposta");

router.get("/", (req, res) => {
    Pergunta.findAll({raw: true, order:[
        ["id", "DESC"]]
    }).then((perguntas) =>{
        //console.log(perguntas);
        res.render("index",{ perguntas: perguntas });
    });
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

router.get("/pergunta/:id", (req, res) =>{
    var id = req.params.id;
    Pergunta.findOne({
        where: {id: id}
    }).then((pergunta) =>{
        if(pergunta != undefined){
            res.render("pergunta",{pergunta: pergunta});
        } else {
            res.redirect("/");
        }
    });
});

module.exports = router;
