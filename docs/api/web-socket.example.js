var socket = new WebSocket("ws://myapp:8080");

socket.onopen = function () {
};

socket.addEventListener("open", function () {
});

socket.addEventListener("open", function () {
});


socket.onclose = function () {
};

socket.onerror = function (error) {
};

socket.onmessage = function (event) {
  // event.data

  // event.data=== '{login: "q", message: "ff"}'
  // event.data === 'some txt'
  //
  // var data;
  // try {
  //   data = JSON.parse(event.data);
  // } catch(e) {
  //   data = event.data;
  // }

};


var obj = {name: "bob"};
var stringData = JSON.stringify(obj);
socket.send(stringData);

socket.close();

/*
 Wartości webSocket.readyState:
 0 - CONNECTING – połączenie jeszcze nie zostało otwarte
 1 - OPEN – połączenie otwarte, gotowe do komunikacji
 2 - CLOSING – połączenie jest zamykane
 3 - CLOSED – połączenie zamknięte lub nie można otworzyć połączenia
 */
