// config/session.config.js

// require session
const session = require('express-session');

// ADDED: require mongostore
const MongoStore = require('connect-mongo');

// ADDED: require mongoose
const mongoose = require('mongoose');

module.exports = app => {
  app.use(
    session({
      secret: process.env.SESS_SECRET,
      resave: true,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        maxAge: 60000
      },
      store: MongoStore.create({
        // <== ADDED !!!
        mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost/basic-auth'

        // ttl => time to live
        // ttl: 60 * 60 * 24 // 60sec * 60min * 24h => 1 day
      })
    })
  );
};