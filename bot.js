const Discord = require('discord.js');

const TOKEN = "NDQwOTM5NzU4OTAyOTY4MzIw.DcpBFQ.1i9Ts6E1kM8XGpHyafBczC7ScwI";

var bot = new Discord.Client({});
var random;

var promises = ["Ingyen sör", "Adócsökkentés", "Örökélet +20 év", "Pénzosztást", "Legyen minden jobb!", "Ne kelljen dolgozni, de legyen pénz!", "Marilizáljuk a Legahuánát!", "Több mindent, kevesebb semmit!"];

bot.on("ready", function () {
    console.log("Ready");
});

bot.on("message", function (message) {
    if (message.author.equals(bot.user)) return;
	
	if (message.content == "!kellakutya") {
		random = Math.floor((Math.random() * 7) + 0);
		message.channel.send(promises[random]);
	}
});

bot.login(TOKEN);