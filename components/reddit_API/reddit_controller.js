const inquirer = require('inquirer');
const RedditModel = require('./reddit_model');
const baseUrl = 'https://www.reddit.com/api/v1';
const request = require('request-promise').defaults({ json: true, baseUrl });
const port = 3000;
const expected_redirect_uri = `http://localhost:${port}/authorize_callback`;

// RedditModel.getUser('orangenomnom').getSavedContent().then(data => {
//   console.log(data)
// })

inquirer.prompt([{
  type: 'input',
  name: 'dude',
  message: 'This is the first prompt test: '
}]).then(answers => {
  console.log(JSON.stringify(answers, null, ' '));
});