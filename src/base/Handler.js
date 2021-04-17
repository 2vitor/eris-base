const { readdir } = require('fs');
const path = require('path');

class Handler {
    /**
     * Commands/Events handler.
     * @param  {String} options.commands [Commands path]
     * @param  {String} options.events   [Events path]
     * @param  {Eris} client           [Eris client]
     * @return {void}
     */
    constructor({ commands, events }, client) {
        this.commandPath = commands;
        this.eventPath = events;
        this.client = client;
    }
    /**
     * loads all client commands.
     * @return {void}
     */
    loadCommands() {
        readdir(this.commandPath, (_e, f) => {
            const cmdPath = path.join(__dirname, '..', '..', this.commandPath);
            for (let i = 0; i < f.length; i++) {
                const cmd = require(cmdPath + '/' + f[i]);
                const command = new cmd(this.client);
                this.client.commands.push(command);
            };
        });
    }
    /**
     * loads all client events.
     * @return {void}
     */
    loadEvents() {
        readdir(this.eventPath, (_e, f) => {
            const evtPath = path.join(__dirname, '..', '..', this.eventPath);
            for (let i = 0; i < f.length; i++) {
                const evt = require(evtPath + '/' + f[i]);
                const event = new evt(this.client);
                this.client.on(f[i].split('.')[0], (...args) => event.event(...args));
            }
        })
    }
};

module.exports = Handler;