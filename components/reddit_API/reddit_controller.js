const inquirer = require('inquirer');
const RedditModel = require('./reddit_model');
const baseUrl = 'https://www.reddit.com/api/v1';
const request = require('request-promise').defaults({ json: true, baseUrl });
const port = 3000;
const expected_redirect_uri = `http://localhost:${port}/authorize_callback`;

const scopePromise = request.get('scopes');


inquirer.prompt("What's up guys?").then(answers => {
  console.log(JSON.stringify(answers, null, ' '));
});