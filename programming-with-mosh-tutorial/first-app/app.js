/*
function sayHello(name){
    console.log("Hello " + name);
}

sayHello('naga');
*/

/*
console.log(window);
U'll get error saying window is not defined [its a JS thing]
*/

/*
console.log(); // global scope

setTimeout() // call function after a delay in JS
clearTimeout() // used to cancel a timeout previously set by 'setTimeout()'

setInterval() // repeatedly calls func, with fixed delay b/w each call
clearInterval() // used to stop the repeated exec of func set by 'setInterval()'

console.log() // can also use window.console.log()

*/

/*
var message = "";
console.log(global.message); // gives output as 'undefined'
*/

/*
console.log(module) // checking json file of module
*/

/*
GETTING THE FUNCTION FROM LOGGER.JS FILE

var logger = require('./logger.js') // './' says its in the same folder, '../' is for parent folder
console.log(logger);

logger.log('message');
*/

/*
ANOTHER WAY OF DOING THE SAME THING

const log = require('./logger.js')
//console.log(log);
log('message');
*/

/*
PATH MODULE

const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);
*/

/* 
OS MODULE

const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);
console.log(`Free Memory: ${freeMemory}`); // another way to print string, without concatenation
*/

// MULTILINE COMMENT SHORTCUT : SHIFT + OPTION + a

/* 
FILE SYSTEM MODULE

const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files)
})
 */

/* 
EVENT EMITTER CLASS

const EventEmitter = require('events');
const emitter = new EventEmitter();

// THE ORDER OF LISTENER AND EVENT IS IMP

// Register a listener
emitter.on('messageLogged', function(){
    console.log('Listener called');
})

// Raise an event
emitter.emit('messageLogged');
 */

/*
EVENT ARGUMENTS

const EventEmitter = require('events');
const emitter = new EventEmitter();

// THE ORDER OF LISTENER AND EVENT IS IMP

// Register a listener
emitter.on('messageLogged', (arg) =>{ // arrow function, to replace the word 'function'
    console.log('Listener called', arg);
});

// Register a listener for 'logging' event
emitter.on('logging', (arg) => {
    console.log('Logging event', arg);
});

// Raise an event
emitter.emit('messageLogged', {id: 1, url: 'http://'});

// Raise an event: logging (data: message)
emitter.emit('logging', {data: 'message'});
 */

/*
EXTENDING EVENT EMITTER

const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) =>{ // arrow function, to replace the word 'function'
    console.log('Listener called', arg);
});

logger.log('message'); 
*/

/* 
HTTP MODULE

const http = require('http');

const server = http.createServer(); // its an event emitter

server.on('connection', (socket) => {
    console.log('new connection');
});
server.listen(3000); // port 3000
console.log('Listening on port 3000'); 
*/

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Hello World'); // printouts hello world on localhost3000 webpage
        res.end();
    }

    if (req.url === '/api/courses'){ // printouts [1, 2, 3] on localhost3000/api/courses webpage 
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000); // port 3000
console.log('Listening on port 3000');