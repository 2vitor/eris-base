const Logger = require('../logger/Logger');

class Ready {
    constructor(client) {
        this.client = client;
    }
    event() {
        Logger.log('Ready', 'log');
    }
}

module.exports = Ready;