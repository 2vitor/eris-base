const dateformat = require('dateformat');

class Logger {
    static log(str, type = 'warn') {
    	const date = dateformat(new Date(), '[dd/mm/yyyy | hh:mm:ss]');
    	console[type](`${date} ${str}`);
    }
}

module.exports = Logger;