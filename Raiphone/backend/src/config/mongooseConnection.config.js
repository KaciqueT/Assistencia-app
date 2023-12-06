const express = require("express");
const mongoose = require("mongoose");

const database = require('./db.config');

mongoose.Promise = global.Promise;

mongoose.connect(database.local.localDatabaseUrl).then(() => {
  console.log('A base de dados foi conectada com sucesso!');
}, (err) => {
  console.log(`Erro ao conectar com a base de dados...:  ${err}`);
  process.exit();
});
