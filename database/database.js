const Sequelize = require("sequelize");

const connection = new Sequelize(
    "guiaperguntas",
    "root",
    "9Singer@9",{
        host: "localhost",
        dialect: "mysql",
        logging: false
    }
);

module.exports = connection
