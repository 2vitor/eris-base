const Context = require('../base/Context');

class Message {
    constructor(client) {
        this.client = client;
    }
    async event(message) {
        const getPrefix = (m, p) => p.find((pr) => m.content.toLowerCase().startsWith(pr));
        const prefix = getPrefix(message, ['/', '.']);
        const ctx = Context(this.client, message, prefix);
        if (!prefix) return;
        const cmd = this.client.commands.find(command => command.help.name === ctx.messageCommand ||
            command.config.aliases.includes(ctx.messageCommand))
        if (cmd) cmd.command(ctx);
    };
}
module.exports = Message;
