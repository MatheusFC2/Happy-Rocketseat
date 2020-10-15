// importar dependencia
const express = require('express');
const path = require('path');

//iniciando o express
const server = express()
server

    //utilizando os arquivos estaticos
    .use(express.static('public'))

    // configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine',"hbs")

    // Criar uma rota
    server.get('/', (request, response) => {
        return response.render('index')
    })

//ligar o servidor
server.listen(5500)