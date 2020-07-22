/* 
 * A server relaying data over websockets to OSC
 *
 */

'use strict';
const { Client, Message } = require('node-osc');

// ip adress + port
const client = new Client('127.0.0.1', 9000);

let socket;
//socket-client is used to get data from UI server
const io = require('socket.io-client');

//localhost port 3000, change as required 
socket = io.connect('http://localhost:3000');

//send OSC when param is recieved
socket.on('param', 
  function(data) {
    console.log(data);
    //OSC address
    let address = data.address;

    //send OSX
    client.send(address, data.val);
  });

