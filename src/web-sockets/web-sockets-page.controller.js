App.controller("WebSocketsPageController", [
  "$scope",
  "ChatSession",
  function ($scope, ChatSession) {
    var HOST = "guarded-harbor-8742.herokuapp.com:80/chat";

    // TODO
    // var chat = new ChatSession({ // opens new WS
    //   host: HOST,
    //   login: "Batman " + Math.floor(Math.random() * 100)
    // });
    // chat.on("error", function (error) {
    //   console.log("error", error);
    // });
    //
    // chat.on("message", function (msg) { // fires listener when message arrives from server
    //   console.log("received", msg);
    // });
    //
    // chat.send("some fancy message " + Math.random()); // sends JSON {login: "Batman", message: "some fancy message 0.1029"}
    // chat.close(); // close WS

    // $scope.chatSession = chat;
  }
]);
