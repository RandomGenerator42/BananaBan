let discord = require("discord.js")
let fs = require("fs")
let randomSentence = require('random-sentence');


let app = new discord.Client()

let data = JSON.parse(fs.readFileSync("data.json"))

console.log(data)
let first = true

app.on('ready', () => {
  app.user.setGame('break from discord');
  console.log(`Logged in as ${app.user.tag}!`);
});

app.on('message', message => {
	if(message.author.id=="398563338323492865"||message.author.id=="137238457784336384"||message.channel.id.includes("175964903033667585")) return
	if(message.content.includes(app.user.id)) { message.reply("I am currently taking a break from discord")}
	try{
  if(message.member.roles.find("name", "Moderators")&&message.content.startsWith("!mute")){

    message.mentions.users.forEach(event=>{
      let user = message.guild.members.get(event.id)
      data.people.push(event.id)
      user.addRole("337986831352201246")
      console.log(event.id)
      let temp = JSON.stringify(data)
      fs.writeFile('data.json', temp, 'utf8',()=>{})
    })
  }
	}
	catch(err){
	console.log(err)
	}
	
  });

app.on("guildMemberAdd", (member) => {
  let arr = data.people.filter(event=>event==member.id)
  if(arr.length!=0){
    member.addRole("337986831352201246")
  }
})

app.login(process.env.BOT_TOKEN)
