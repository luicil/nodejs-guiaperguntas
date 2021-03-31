const express = require("express");
const app = express();
const port = 80;

// CRIEI O ARQUIVO routes.js COM TODAS AS ROTAS DO PROJETO
const routers = require("./routes.js")

// NÃO É MAIS NECESSÁRIO BAIXAR O body-parser, AGORA FAZ PARTE DO express
//const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"))
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// USO O ARQUVIO DE ROTAS
app.use("/", routers);

app.listen(port, (erro) => {
    if (erro) {
        console.log("Erro ao iniciar o servidor.");
    } else {
        console.log("Servidor iniciado na porta: " + port);
    }
});
