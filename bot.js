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
	/*if(message.content.includes("<@304147295299960832>")){
	   message.channel.send("Sorry I am taking a break from discord now")
}
	else{
		console.log("wazzup",message.content)
	}*/
   if(message.content.startsWith("!x")){
	console.log(message.mentions)	   
   }
	/*if(message.member.roles.find("name", "Moderators")&&message.content.startsWith("!mute")){

    message.mentions.users.forEach(event=>{
      let user = message.guild.members.get(event.id)
      data.people.push(event.id)
      user.addRole("337986831352201246")
      console.log(event.id)
      let temp = JSON.stringify(data)
      fs.writeFile('data.json', temp, 'utf8',()=>{})
    })
  }
  
*/});

app.on("guildMemberAdd", (member) => {
  let arr = data.people.filter(event=>event==member.id)
  if(arr.length!=0){
    member.addRole("337986831352201246")
  }
})

app.login(process.env.BOT_TOKEN)
