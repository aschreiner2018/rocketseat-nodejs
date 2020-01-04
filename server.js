const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//Iniciando o App
const app = express()
app.use(express.json())
app.use(cors())

//Iniciando o DB
mongoose.connect("mongodb+srv://albert:Teste@2020@cluster0-2waew.mongodb.net/test?retryWrites=true&w=majority", { // Onde pegamos o link, da conexão em Cluster
  useNewUrlParser: true
}).then(function () { // Caso Logue Corretamente
  console.log('\x1b[32m[ BANCO DE DADOS ] \x1b[0mBanco de dados foi ligado');
}).catch(function () { // Caso de ERRO
  console.log('\x1b[31m[ BANCO DE DADOS ] \x1b[0mBanco de dados desligado por erro');
})
requireDir('./src/models')

//Rotas
app.use('/api', require('./src/routes'))

//Porta
let PORT = process.env.PORT || 8080
app.listen(PORT)