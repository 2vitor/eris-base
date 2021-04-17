const ErisClient = require('../base/ErisClient');
const Handler = require('../base/Handler');
const Logger = require('../logger/Logger');
require('dotenv').config();

const client = new ErisClient(process.env.TOKEN);
const handler = new Handler({ commands: './src/commands', events: './src/events' }, client);

handler.loadCommands();
handler.loadEvents();

client.connect();
client.on('error', Logger.log);