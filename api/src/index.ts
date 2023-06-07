const express = require("express");
const { connectToDb, getDb } = require("./db");

// init app & middleware
const app = express();

// db connection
let db

connectToDb((err) => {
  if(!err){
    app.listen(8080, () => {
      console.log("Sever connected!");
    })
    db = getDb();
  }
})

app.use(express.json());


