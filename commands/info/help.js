const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const { default_prefix } = require('../../config.json');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category
/*
        const util = new Discord.MessageEmbed()
        .setTitle("Information Page")
        .setDescription("`.js`")
        .setColor("BLUE")
        .setTimestamp()
*/
        const info = new Discord.MessageEmbed()
        .setTitle("Information Page")
        .setDescription("`ping`")
        .setColor("BLUE")
        .setTimestamp()   

        const pages = 
        [
    //    util,
          info
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '60000';

        pagination(message, pages, emojiList, timeout)
    }
}
