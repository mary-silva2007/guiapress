const Sequelize = require('sequelize');
const connection = require('../database/database'); 

const Category = connection.define('categories', { 
    title: {
        type: Sequelize.STRING,
        allowNull: false // Não permite valores nulos
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false // Não permite valores nulos
    }
});

// Sincroniza o modelo com o banco de dados
Category.sync({ force: false }) // `force: false` não recria a tabela se ela já existir
    .then(() => {
        console.log("Tabela 'categories' criada com sucesso!");
    })
    .catch(err => {
        console.log("Erro ao criar tabela 'categories':", err);
    });

module.exports = Category;