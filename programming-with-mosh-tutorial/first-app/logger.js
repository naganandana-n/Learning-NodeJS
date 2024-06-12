/*
var url = 'http://mylogger.io/log'; // sending http request to this url

function log(message){
    // send an http request
    console.log(message);
}

module.exports.log = log; // the way to export var/func [make global var/funcs]
*/

/*
ANOTHER WAY OF DOING IT

var url = 'http';

function log(message){
    console.log(message);
}

module.exports = log;
*/

/* 
console.log(__filename); //file name path
console.log(__dirname); // directory path [where the file is stored]

var url = 'http';

function log(message){
    console.log(message);
}

module.exports = log;
*/

/* 
EXTEND EVENT EMITTER

const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message){
        console.log(message);

        // Raise an event
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}


module.exports = Logger;
 */