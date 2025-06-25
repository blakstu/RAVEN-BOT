/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEhiMWM3KzA3cGNTZkVsU3pHbDVBNFRzb2wzS2M5bGNtTEtiVngxSGJsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOU1XbjNvL3g0azJGWnRoM1BrbGZ0TWk0dnpDa1ZhUzhMYmpKZnozaFYzdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQ2hLWlNDc1pENGxvcjlFM2ZKR1BXM2hkVm9aZTV0YWgxdXFOM1c3dEZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQaElyTVIzaTB6R1FWWVFQSXhRWW9Td0NWVHFCajdPWitnamZtYnE3QTFNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9HZkptZWV0WjJjaTZCeXpYSEo1UEFYZkhoMnMzQ21oVFdJYnIyT1hQWHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRvK0VnOHhmMWxLVGJVakNIUUJBbjlyV3ZDb1hPTnBJUHdEN1JvN1JMWE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1BwVHZxeGpWRTZDdDF3dkR3TE40K1R2OVNNTGZjWUk5RkhsWVBZUG1GWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVJBcGEwQlRDTzhGcnpNMXoyU3A0bmY2dGF4a0dsRWcrV1JvWStIbThTND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFVWjZJZTFkTVhRbmxFVjN4TkE5cmw2MWlEcGY2QUFyNXdrZVZpR05pbXkwb3MwWG1NaWFQTDZJTTNQcG13eVQ4bkNDK0ZwMFlLT0xBQ0szRUpmN2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEzLCJhZHZTZWNyZXRLZXkiOiJ2YklJSDNaRzFYZ0NsWkNsSFFGaFNDTEpaQ1NFMExFREw4UWZqT1VRYkhZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc0Njc1NTkyOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJERkYzRUIzQ0JDQUZGRUMwNTA0MzRGRDk2Q0UwQkU0RSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUwODc4ODE2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI0MUQ0WTFZWiIsIm1lIjp7ImlkIjoiMjU0NzQ2NzU1OTI5OjIzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkdhbWluZyIsImxpZCI6IjE5MzkzMTIxMjAwOTU5NjoyM0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tuQ2tOWUVFTXlVOGNJR0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZDR21IZldMekdIUXhGc2x5dWw5WFEzcDFhTDVxcXVPelhnOFRsZk9sUkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkxKT25vUGdYdnpqSnQ1RjhWcWxDN1YyQ0FhZG1sTXJJUXhrWmtNaEhXblYxUGNEOEVjUkVQU0d5bDJJbFV1VXBqT2FndHl5ZnV3L0xNS3ZQZFhndUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHWWZITkUzQkxPaXMxSk5wMkZZTzgvN1kwbmJZdjgzZmVDS2daMS9TZE9JM0MyOWxBY2JBZmZOTVRqeVl2YW5CR1dDQS9LWVYwSW51ZXZvVjB0eXNodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc0Njc1NTkyOToyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWUWhwaDMxaTh4aDBNUmJKY3JwZlYwTjZkV2krYXFyanMxNFBFNVh6cFVTIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTA4Nzg4MTAsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ3ZzIn0=';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '.';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || '𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝗥𝗔𝗩𝗘𝗡';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '254114660061';
const owner = dev.split(",");
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/duv8ac.jpg';
const menu = process.env.MENU_TYPE || 'VIDEO';
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 8080;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, owner, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, menulink, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
