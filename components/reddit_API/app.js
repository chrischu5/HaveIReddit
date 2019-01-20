const RedditModel = require('./reddit_access');
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

// F U N C T I O N S
const showNext = () => {
  if (count + 5 > savedContent.length) {
    count = 5;
  } else {
    count += 5;
  };
  let show = ''
  for (let i = count; i > count - 5; i--) {
    let post = savedContent[i - 1]
    if (post !== undefined) {
      show = `${i}: (r/${post.subreddit.display_name}) ${post.title || post.link_title} - https://reddit.com${post.permalink}\n\n` + show;
    }
  }
  show = show + '-----------------------------------------------------------------------------------------------\n';
  console.log('\n\n-----------------------------------------------------------------------------------------------\n\n'+ show);
  rl.prompt();
};

const showPrev = () => {
  if (count === 0 || count <= 5) {
    count = savedContent.length;
  } else {
    count -= 5;
  };
  let show = '';
  for (let i = count; i > count - 6; i--) {
    let post = savedContent[i - 1]
    if (post !== undefined) {
      show = `${i}: (r/${post.subreddit.display_name}) ${post.title || post.link_title} - https://reddit.com${post.permalink}\n\n` + show;
    }
  }
  show = show + '-----------------------------------------------------------------------------------------------\n';
  console.log('\n\n-----------------------------------------------------------------------------------------------\n\n'+ show);
  rl.prompt();
};

const showSearch = () => {
  rl.question("Enter your search term: ", (answer) => {
    let show = '\n\n-----------------------------------------------------------------------------------------------\n';;
    for (let i = 0; i < savedContent.length; i++) {
      let post = savedContent[i];
      let title = post.title ? post.title.toLowerCase().split(' ') : post.link_title.toLowerCase().split(' ');
      if (title.includes(answer.toLowerCase()) === true) {
        show = show + `${i}: (r/${post.subreddit.display_name}) ${post.title || post.link_title}\n  URL: https://reddit.com${post.permalink}\n\n`;  
      }
    }
    console.log(show + '-----------------------------------------------------------------------------------------------\n\n');
    rl.prompt();
  });
};

// R E D D I T  C A L L  F O R  S A V E D  C O N T E N T
RedditModel.getAll.then(data => {
  data.forEach(post => {
    savedContent.push(post);
  })
  console.log(`\n•You have ${savedContent.length} saved posts available•\n`)
  rl.setPrompt(`
    Please choose your command:\n
    (n) Show next 5 saved posts • (b) Show previous 5 saved posts • (s) Search your saved posts • (q) Quit HaveIReddit \n\n`);
  rl.prompt();
})

// C L  S T A R T
console.log(`------------------------------------------------------------------\nWelcome to HaveIReddit, ${redditUser}\n------------------------------------------------------------------\n`);
console.log(`•We are now pulling all of your saved posts. This could take a few seconds•`)

rl.on("line", (line) => {
  switch(line) {
    case 'n':
      showNext();
      break;
    case 'b':
      showPrev();
      break;
    case 's':
      showSearch();
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