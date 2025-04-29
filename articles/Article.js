const Sequelize = require("sequelize");
const connection = request("../database/database");
const Cateogry = require("../categories/Category");

const Article = connection.define('articles', { // Define o modelo de dados para o banco de dados
    title: {
        type: Sequelize.STRING,
        allowNull: false // Não permite valores nulos
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false // Não permite valores nulos
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false // Não permite valores nulos
    }
});

Cateogry.hasMany(Article); // Define o relacionamento entre as tabelas (1:N)
Article.belongsTo(Cateogry); // Define o relacionamento entre as tabelas (N:1)

module.exports = Article; // Exporta o modelo de dados