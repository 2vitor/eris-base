const Eris = require('eris');

class ErisClient extends Eris {
    constructor(...options) {
        super(...options);
        this.commands = [];
    }
}

module.exports = ErisClient