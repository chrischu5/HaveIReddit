# HaveIReddit

A command-line interface for accessing your Reddit account. You can scroll through your saved posts, search for specific posts that matches a keyword, and even update your saved posts. 

## To Use HaveIReddit

1. Clone this repo to your computer

```bash
$ git clone git@github.com:chrischu5/HaveIReddit.git
# or for HTTPS
$ git clone https://github.com/chrischu5/HaveIReddit.git

$ cd HaveIReddit

$ npm i
```

2. Set up your `.env` files to include:

```
REDDIT_CLIENT_ID=<your-reddit-client-ID>
REDDIT_SECRET_KEY=<your-reddit-secret-key>
REDDIT_USERNAME=<your-reddit-username>
REDDIT_PASSWORD=<your-reddit-password>
```

> To access your client ID and secret key, head to https://www.reddit.com/prefs/apps/ and set up a new app as a `script`. The redirect URI can be anything for now.

3. Run `npm start` and follow the on-screen commands.