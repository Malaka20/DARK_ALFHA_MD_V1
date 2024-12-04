const config = require('../config');
const {
  cmd,
  commands
} = require("../command");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");

cmd({
  pattern: "approve",
  desc: "Automatically approve Specific Country users in the waiting list",
  react: '✅',
  category: "group",
  filename: __filename
}, async (bot, message, chat, { 
  isGroup, 
  isBotAdmins, 
  isAdmins, 
  args, 
  reply 
}) => {
  try {
    // Check if the command is used in a group
    if (!isGroup) {
      return reply("This command is only for groups.");
    }

    // Check if the bot is an admin
    if (!isBotAdmins) {
      return reply("I need to be a group admin to perform this action.");
    }

    // Check if the user is an admin
    if (!isAdmins) {
      return reply("You must be an admin to use this command.");
    }

    const groupId = message.key.remoteJid;

    // Get the list of participants in the group waiting list
    const waitingList = await bot.groupRequestParticipantsList(groupId);
    if (waitingList.length === 0) {
      return reply("No participants are in the waiting list.");
    }

    // Filter participants with the specific country code
    const filteredUsers = waitingList.filter(participant => 
      participant.jid.startsWith(config.AUTO_ADD_Country_Code)
    );
    
    if (filteredUsers.length === 0) {
      return reply(`No users with the country code ${config.AUTO_ADD_Country_Code} found in the waiting list.`);
    }

    // Extract the JIDs of the filtered users
    const userJids = filteredUsers.map(user => user.jid);

    // Approve the filtered users
    const approvedUsers = await bot.groupRequestParticipantsUpdate(groupId, userJids, "approve");
    console.log(approvedUsers);

    reply("Approved the following users:\n" + userJids.join("\n"));
  } catch (error) {
    console.error(error);

    // React with an error emoji and send an error message
    await bot.sendMessage(message.key.remoteJid, {
      react: {
        text: '❌',
        key: message.key
      }
    });
    reply("Error: " + error.message);
  }
});
