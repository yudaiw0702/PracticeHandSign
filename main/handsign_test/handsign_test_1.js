window.onload = function() {
  let $balloon_left = $(".balloon1-left");

  $balloon_left.toggleClass("balloon_up");
};

$(function() {
  let $balloon_right = $(".balloon1-right");

  function hello (evt) {
    $balloon_right.toggleClass("balloon_up");
  }
  
  var trainer = new LeapTrainer.Controller();

  //こんにちはの動作
  //trainer.fromJSON('');

  //trainer.on();
});