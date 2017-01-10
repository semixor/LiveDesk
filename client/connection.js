var geturl = require('./geturl.js');
var who = geturl('who');
var ui = require('./ui.js');
var instance = require('./instance.js')(who);

var current = {
    room: null,
    owner: null,
    members: null,
    teacher: geturl('who') == 'teacher'
};

if (current.teacher) {
    console.log('you are teacher')
}

/* Video&Screen controlling */
instance.on('chat', function (message) {
    ui.newMessage(message);
});

instance.connection.on('join', function () {
    console.log('joined someone');
});

/* Rooms controlling */
function createRoom(name) {
    instance.createRoom(name, (e, r) => {
        current.room = r;
    });
}

function joinRoom(name) {
    instance.joinRoom(name, (e, r) => {
        current.name = name;
        current.members = r.clients;
    });
}

function sendMessage(messageType, payload) {
    ui.newMessage(payload, 'You');
    instance.sendToAll(messageType, payload);
}

if (who == 'teacher') {
    createRoom('test-room');
} else {
    instance.on('readyToCall', function () {
        joinRoom('test-room');
    });
}

document.getElementById('send-text-message').onclick = () => {
    sendMessage('chat', { data: document.getElementById('text-message').value });
    document.getElementById('text-message').value = '';
}