const express = require("express");
const { connectToDb, getDb } = require("./db");
const postRoutes = require('./routes/posts');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const cors = require('cors');

// init app & middleware
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', authRoutes);

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


