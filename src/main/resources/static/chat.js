window.addEventListener("DOMContentLoaded", function() {
    const webSocket = new WebSocket("ws://localhost:3001/chat");

    websocket.onopen = function(e) {
        console.log("연결 성립 : ", e);
    }

    websocket.onclose = function(e) {
        console.log("연결 종료 :", e);
    };

    websocket.onmessage = function(message) {
        console.log("메세지 수신 : ", message);
    }
});