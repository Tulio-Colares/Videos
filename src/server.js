const express = require('express');
const { resolve } = require('path')
const app = express();

app.use('/', 
express.static(resolve(__dirname, './build')))

//ATENÇÃO!! Lembre-se sempre de executar no terminal o comando de build (npm run-script build)

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {return console.log(err) }

  console.log('Tudo funcionando certinho')
})