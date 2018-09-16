let discord = require("discord.js")

let app = new discord.Client()

app.on('ready', () => {
  app.user.setGame('break from discord');
  console.log(`Logged in as ${app.user.tag}!`);
});


app.login(process.env.BOT_TOKEN)
