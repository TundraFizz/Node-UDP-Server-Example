function Fun1(){
  var win = window.open("https://discord.gg/pKzB2aA", "_blank");
  win.focus();
}

function Fun2(){
  Cookies.remove("LAFDAT");
  window.location.href = "/";
}

$(function(){
  $(".reeee").click(function(){
    var win = window.open("/img/sample.png", "_blank");
    win.focus();
  });

  $(".glow").hover(function(){
    $(this).animate({"boxShadow": "0px 0px 20px #47adff"}, 100);
  },function(){
    $(this).animate({"boxShadow": "0px 0px 5px #47adff"}, 100);
  });

  $(".glow").mousedown(function(){
    $(this).animate({"boxShadow": "0px 0px 1px #47adff"}, 100);
  }).mouseup(function(){
    $(this).animate({"boxShadow": "0px 0px 20px #47adff"}, 100);
  });

  $("[skin]").click(function(){
    if(received == 1){
      return;
    }

    $("[skin]").removeAttr("active");
    $(this).attr("active", "");

    $.post("choose-skin", {"skin": $(this).attr("skin")});
  });

  $(".league-account").click(function(){
    var summonerName = $($(".name", $(this))[0]).attr("name");
    var token = Cookies.get("LAFDAT");

    console.log(summonerName);
    $.post("set-summoner-name", {"token": token, "summonerName": summonerName}, function(data){
      console.log(data);
    });
  });

  if(typeof skin != "undefined")
    $(`[skin="${skin}"]`).attr("active", "");
});

////////////////////////////////////////////////////////////////////////////////

function Fun3(){
  $.post("get-names", function(data){
    console.log(data);
  });
}

function ToggleNSFW(){
  var token = Cookies.get("LAFDAT");

  $.post("toggle-nsfw", {"token": token}, function(data){
    alert(data["message"]);
  });
}

function CheckMatchHistory(){
  var token = Cookies.get("LAFDAT");

  $.post("check-match-history", {"token": token}, function(data){
    console.log(data);
  });
}
