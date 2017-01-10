var SimpleWebRTC = require('simplewebrtc');

var webrtc = (nick, teacher) => {
    return new SimpleWebRTC({
        localVideoEl: teacher ? 'video' : '',
        remoteVideoEl: '',
        enableDataChannels: true,
        autoRequestMedia: true,
        url: 'https://localhost:8888',
        nick: nick,
        debug: false
    });
}

module.exports = webrtc;