window.onload = function() {
  let $balloon_left = $(".balloon1-left");

  $balloon_left.toggleClass("balloon_up");
};

$(function() {
  let $balloon_right = $(".balloon1-right");

  function konnitiwa2 (evt) {
    $balloon_right.toggleClass("balloon_up");
  }
  
  var trainer = new LeapTrainer.Controller();

  //こんにちはのこんにの動作
  trainer.fromJSON('{"name":"KONNITIWA1_1","pose":true,"data":[[{"x":0.1262944467941488,"y":-0.2512314586964694,"z":0.3472222222222222,"stroke":1},{"x":0.11113911317885095,"y":-0.22108368365289316,"z":0.30555555555555547,"stroke":1},{"x":-0.23743355997299975,"y":0.4723151423493626,"z":-0.6527777777777778,"stroke":1}]]}');
  trainer.fromJSON('');
  
  //ちはの動作
  trainer.fromJSON('');

  trainer.on('KONNITIWA2', konnitiwa2);
  trainer.on('KONNITIWA2_1', konnitiwa2_1);
  trainer.on('KONNITIWA2_2', konnitiwa2_2);
});