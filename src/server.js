const express = require('express');
const { resolve } = require('path')
const app = express();

app.use('/', 
express.static(resolve(__dirname, './build')))

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {return console.log(err) }

  console.log('Tudo funcionando certinho')
})

//ATENÇÃO!! Lembre-se sempre de: 
//1 - Instalar o express
//2 - Executar o comando de build (npm run-script build) no terminal
//3 - Vá em package.json e coloquei em "scripts" -> <"start": "node index.js",> com a vírgula no final
//4 - criar esta pasta (server.js) dentro de src, no mesmo nivel do index.js, e copiar o conteúdo daqui pr ela
