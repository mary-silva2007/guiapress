const express = require('express'); // Importa a biblioteca express
const app = express(); // Define express como app	
const connection = require("./database/database"); // Importa o banco de dados
const bodyParser = require('body-parser'); // Importa o body-parser (para trabalhar com formulários)
const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');

// View engine - Importa o ejs para interpretar codigos html 
app.set('view engine', 'ejs');

// Static
app.use(express.static('public')); // Define a pasta public para arquivos estaticos (css, js, img)

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connection //  Faz a conexão com o banco de dados 
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    }).catch((error) => {
        console.log(error)
    });

app.use("/" ,categoriesController);
app.use("/" ,articlesController);

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(4000, () => {
    console.log("Servidor está rodando na porta 4000") // Inicia o servidor na porta 4000
})