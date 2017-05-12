var startSocket = function(url, mid) {
    var socket = require('socket.io-client')(url);

    socket.on('connect', function() {
        console.log('[socket-client] connect.')
        socket.emit('join', { 'mid': mid })
    });

    socket.on('event', function(data) {
        console.log('[socket-client] event.')
    });

    socket.on('disconnect', function() {
        console.log('[socket-client] disconnect.')
    });


    return socket;
}


module.exports = { startSocket };