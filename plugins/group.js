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

cmd({
  pattern: "promote",
  react: "🥏",
  alias: ["addadmin"],
  desc: "To Add a participant as an Admin",
  category: "group",
  use: ".promote",
  filename: __filename
}, async (client, message, context, {
  from,
  quoted,
  body,
  isCmd,
  command,
  mentionByTag,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isCreator,
  isDev,
  isAdmins,
  reply
}) => {
  try {
    // Ensure the command is used in a group
    if (!isGroup) {
      return reply("This is a group-only command.");
    }

    // Check if the user is an admin
    if (!isAdmins && !isMe) {
      return client.sendMessage(from, {
        text: "🚫 *This is an admin-only command*"
      }, { quoted: message });
    }

    // Check if the bot is an admin
    if (!isBotAdmins) {
      return reply("*Bot must be an admin first ❗*");
    }

    // Get the mentioned user or quoted participant
    const mentionedUsers = await mentionByTag;
    let targetUser = (await mentionedUsers) || message.msg.contextInfo.participant;

    if (!targetUser) {
      return reply("🚫 *Couldn't find any user in context*");
    }

    // Check if the user is already an admin
    const groupAdminsList = await getGroupAdmins(participants);
    if (groupAdminsList.includes(targetUser)) {
      return reply("*User is already an admin ✅*");
    }

    // Promote the user to admin
    await client.groupParticipantsUpdate(from, [targetUser], "promote");
    await client.sendMessage(from, {
      text: "*Promoted as an admin ✔️*"
    }, { quoted: message });

  } catch (error) {
    reply("🚫 *An error occurred!!*\n\n" + error);
    console.log(error);
  }
});

cmd({
  pattern: "demote",
  react: "🥏",
  alias: ["removeadmin"],
  desc: "To Demote Admin to Member",
  category: "group",
  use: ".demote",
  filename: __filename
}, async (bot, message, args, {
  from,
  quoted,
  body,
  isCmd,
  command,
  mentionByTag,
  args: cmdArgs,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isCreator,
  isDev,
  isAdmins,
  reply
}) => {
  try {
    // Check if command is used in a group
    if (!isGroup) {
      return reply("This is a Group only command.");
    }

    // Check if the sender is an admin
    if (!isAdmins) {
      if (!isMe) {
        return bot.sendMessage(from, { text: "🚫 *This is an admin-only command*" }, { quoted: message });
      }
    }

    // Check if the bot is an admin
    if (!isBotAdmins) {
      return reply("*Bot must be admin first ❗*");
    }

    // Get the mentioned user
    const mentionedUsers = await mentionByTag;
    let targetUser = (await mentionedUsers) || message.msg.contextInfo.participant;

    if (!targetUser) {
      return reply("🚫 *Couldn't find any user in context*");
    }

    // Check if the target user is an admin
    const currentGroupAdmins = await getGroupAdmins(participants);
    if (!currentGroupAdmins.includes(targetUser)) {
      return reply("*User is already not an admin ✅*");
    }

    // Demote the user
    await bot.groupParticipantsUpdate(from, [targetUser], 'demote');
    await bot.sendMessage(from, { text: "*User is no longer an admin ✔️*" }, { quoted: message });
  } catch (error) {
    reply("🚫 *An error occurred !!*\n\n" + error);
    console.error(error);
  }
});
