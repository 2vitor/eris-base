const Listener = require('../base/Listener');

class PingCommand extends Listener {
    constructor(client) {
        super(client, {
            name: 'ping',
            description: 'Shows client\'s latency',
            aliases: ['latency'],
        });
        this.client = client;
    }
    command(ctx) {
    	ctx.channel.createMessage('hi')
    }
};

module.exports = PingCommand;