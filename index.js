const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ });
const Constants = require("./Constants.js");

client.on('ready', async () => {
  console.log(`${client.user.username} ist gestartet.`);
})

client.login(Constants.private.token);