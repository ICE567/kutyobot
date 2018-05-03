const Discord = require('discord.js');

var bot = new Discord.Client({});
var random;

var promises = ["Ingyen sör", "Adócsökkentés", "Örökélet +20 év", "Pénzosztást", "Legyen minden jobb!", "Ne kelljen dolgozni, de legyen pénz!", "Marilizáljuk a Legahuánát!", "Több mindent, kevesebb semmit!", "Szavazóink 100 százaléka ránk szavaz", "93 százalék hogy nem fogunk lopni", "2018 a kutya éve", "Olyan aranyos, biztos nem akar lopni...", "Te már választottál magadnak kutyapárt?"];

bot.on("ready", function () {
    console.log("Ready");
});

bot.on("message", function (message) {
    if (message.author.equals(bot.user)) return;
	
	if (message.content == "!kellakutya") {
		random = Math.floor((Math.random() * 14) + 0);
		message.channel.send(promises[random]);
	}
});

bot.login(process.env.TOKEN);
