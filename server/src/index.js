const featuresRoutes = require("./routes/features.router.js");
const loginRoutes = require("./routes/login.router.js");
const cors = require('cors')
const mongoose = require("mongoose")
require('dotenv').config()
const http = require('http');
const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const passport = require('passport');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});
// const rootDir = require('./util/path');

(async () => {
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(cors())

  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.use(express.static(path.join(__dirname, '/../public')))

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/../game.html'));
  });

  app.get('/auth/game', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/game.html'));
  });

  app.use(bodyParser.json());
  app.use(expressSession);

  app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      next();
  })

  
  //connect to mongodb
  mongoose
    .connect(process.env.database, {useNewUrlParser: true})
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB..."));


  app.use(express.json());
  //use users route for api/users
  app.use("/", featuresRoutes);
  app.use("/", loginRoutes);

  const port = process.env.PORT || 3000;
  const server = await http.createServer(app).listen(port);
  server.timeout = 300000;
})();