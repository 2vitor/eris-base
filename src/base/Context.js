const getCtx = (client, message, prefix) => {
        if (!prefix) return;
        return Object.assign(message, {
            args: message.content.slice(prefix.length).trim().split(' '),
            messageCommand: message.content.slice(prefix.length).trim().split(' ').shift().toLowerCase(),
        });
    };
module.exports = getCtx;