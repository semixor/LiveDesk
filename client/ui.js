var ui = {
    newMessage: function (message, from) {
        if (message.data) {
            var messageNode = document.createElement("div");
            var messageHeaderNode = document.createElement("b");
            var messageHeaderText = document.createTextNode((from ? from : message.from) + " wrote:");
            var messageDescription = document.createTextNode(message.data);
            messageNode.className = 'alert alert-success';
            messageHeaderNode.appendChild(messageHeaderText);
            messageNode.appendChild(messageHeaderNode);
            messageNode.appendChild(messageDescription);

            var messages = document.getElementById("messages");
            messages.insertBefore(messageNode, messages.childNodes[0]);
        }
    },
    newUser: function (data) {

    }
}

module.exports = ui