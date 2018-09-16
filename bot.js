let discord = require("discord.js")

let app = new discord.Client()

let data = JSON.parse(fs.readFileSync("data.json"))

console.log(data)
let first = true

app.on('ready', () => {
  app.user.setGame('break from discord');
  console.log(`Logged in as ${app.user.tag}!`);
});


app.login(process.env.BOT_TOKEN)
