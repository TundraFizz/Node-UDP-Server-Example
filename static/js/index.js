$(function(){
  var socket = io();

  socket.on("testing", function(msg){
    var name = msg.name;
    var msg  = msg.msg;
    $("#messages").append(`<div>${name}: ${msg}</div>`);
  });
});
