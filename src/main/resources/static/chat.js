window.addEventListener("DOMContentLoaded", function() {
    const webSocket = new WebSocket("ws://localhost:3001/chat");

    webSocket.onopen = function(e) {
        console.log("연결 성립 : ", e);
    }

    webSocket.onclose = function(e) {
        console.log("연결 종료 :", e);
    };

    webSocket.onmessage = function(message) {
        console.log("메세지 수신 : ", message);
        const messages = document.getElementById("messages");
        const li = document.createElement("li");
        const text = document.createTextNode(message.data);
        li.appendChild(text);
        messages.appendChild(li);
    }

    const sendButton = document.getElementById("send");
    const messageEl = document.getElementById("message");
    sendButton.addEventListener("click", function() {
        const message = messageEl.value;
        webSocket.send(message);
    });
});