'use strict'
const snoowrap = require('snoowrap');
require('dotenv').config();

const r = new snoowrap({
  userAgent: 'reddit_save_CLI',
  clientId: process.env.REDDIT_CLIENT_ID,
  clientSecret: process.env.REDDIT_SECRET_KEY,
  username: process.env.REDDIT_USERNAME,
  password: process.env.REDDIT_PASSWORD
});

module.exports = r;
