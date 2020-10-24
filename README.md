# DiscordTS bot 🤖
A discord bot made in pure typescript with regex match features and command prefix and execution and exact message matching

## Features
* Command prefix match and execution
* Regex matching
* Exact matching
* Organized file structure so you can easily add extra features without making spaghetti code
* Well commented code so you never consume time understand what each piece of code does
* There is a few simple functions as examples on how to add more functions

## Usage

### Adding the bot token
For the bot to come up online you need to put in your token
To get a token from discord:
* Go to `https://discord.com/developers/applications`
* Sign in if necessary
* Create a new application
* Click on "Add Bot"
* Click on "Copy Token"

Now all you need is to replace the token in the `.env.examnple`
* Open the `.env.example` file
* Replace the `your-bot-token` with the token you copied
* Rename the file from `.env.example` to `.env`
* All done!

### Running the bot in production mode
To run bot in production mode run:
```bash
npm start
```

### Running the bot in development mode
Note: You need to install nodemon for dev mode
```bash
npm run dev
```
To install nodemon globally: 
```bash
npm i nodemon -g
```