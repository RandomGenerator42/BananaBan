let discord = require("discord.js")
let fs = require("fs")
let randomSentence = require('random-sentence');


let app = new discord.Client()

let data = JSON.parse(fs.readFileSync("data.json"))

console.log(data)
let first = true

app.on('ready', () => {
  app.user.setGame('with Lurpahi Balls');
  console.log(`Logged in as ${app.user.tag}!`);
});

app.on('message', message => {
	if(message.channel.id == '320750032745791489'&&first){
		message.channel.send(randomSentence({min: 4, max: 9}))
		setInterval(()=>{
      message.channel.send(randomSentence({min: 4, max: 9}))},1000*60*(10+Math.floor(Math.random()*10)
        )
      )
    first = false
	}

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
  
});

app.on("guildMemberAdd", (member) => {
  let arr = data.people.filter(event=>event==member.id)
  if(arr.length!=0){
    member.addRole("337986831352201246")
  }
})

app.login(process.env.BOT_TOKEN)
