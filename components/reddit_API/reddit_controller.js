const RedditModel = require('./reddit_model');
const readline = require('readline');

// R E A D L I N E
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// V A R I A B L E S
let savedContent = [];
let count = 0;
const redditUser = process.env.REDDIT_USERNAME;

// R E D D I T  C A L L  F O R  S A V E D  C O N T E N T
RedditModel.getMe().getSavedContent().then(data => {
  data.forEach(post => {
    savedContent.push(post);
  })
  // console.log(savedContent[0].title)
  rl.setPrompt(`
    Please choose your command:\n
    (n) Show Next 5 Saved Posts \n
    (b) Show Previous 5 Saved Posts \n
    (q) Quit HaveIReddit \n
  `);
  rl.prompt();
})

// F U N C T I O N S
const show = () => {
  count += 5;
  let show = '';
  for (let i = count; i > count - 5; i--) {
    show = `${i}: (r/${savedContent[i].subreddit.display_name}) ${savedContent[i].title} - https://reddit.com${savedContent[i].permalink}\n` + show;
  }
  console.log(show);
};

// C L  S T A R T
console.log(`------------------------------------------------------------------\nWelcome to HaveIReddit, ${redditUser}\n------------------------------------------------------------------\n`);

rl.on("line", (line) => {
  switch(line) {
    case 'n':
      show();
      break;
    case 'b':
      console.log('Did not implement previous yet');
      break;
    case 'q':
      console.log('\nSee you soon!');
      process.exit();
    default:
      console.log('Input undefined, try again');
      return rl.prompt();
      break;
  }
})