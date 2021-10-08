'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT
const cookieParser = require('cookie-parser');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

//routes
const mainRouter = require('./routers/main.route'); //have login

//cors optionals
const corsOptions = {
  origin: process.env.FRONT_PORT,
  credentials: true,
};

//session
const sConfig = {
  name: process.env.KEY_SESSION,
  store: new FileStore(),
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000*60*60*10,
  }
};

//middleware
app.use(cors(corsOptions));
app.use(session(sConfig));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'backend/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//middleware routes
app.use('/api', mainRouter);

app.listen(PORT, () => {
  console.log(`>> server started PORT: ${PORT}`);
});
