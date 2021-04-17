class Listener {
    constructor(client, options) {
        this.client = client;

        this.help = {
            name: options.name,
            description: options.description || 'No description',
            usage: options.usage || '',
            category: options.category || '-'
        };

        this.config = {
            cooldown: options.cooldown || 2500,
            aliases: options.aliases || []
        };

        this.cooldown = new Set();
    }
    startCooldown(user) {
        this.cooldown.add(user);

        setTimeout(() => {
            this.cooldown.delete(user);
        }, this.config.cooldown);
    }
    setMessage(message) {
        this.message = message;
    }
};

module.exports = Listener;