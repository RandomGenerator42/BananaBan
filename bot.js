let discord = require("discord.js")

let app = new discord.Client()

app.on('ready', () => {
  app.user.setActivity("depression");
  console.log(`Logged in as ${app.user.tag}!`);
});

app.on('message', message => {
 console.log(message)
}) 
 
app.login(process.env.BOT_TOKEN)
