$(function() {

  function a (evt) {
    $("#sign_temp").text("あ");
    $('.circle').css('display','inline');
  }
  
  var trainer = new LeapTrainer.Controller();
  
  //幾何学テンプレートマッチング
  //あいうえお
  trainer.fromJSON('{"name":"A","pose":true,"data":[[{"x":-0.34722222222222227,"y":-0.06104291521740365,"z":-0.02979057794523446,"stroke":1},{"x":-0.3055555555555556,"y":-0.05371776539131521,"z":-0.026215708591806317,"stroke":1},{"x":0.6527777777777777,"y":0.11476068060871883,"z":0.056006286537040775,"stroke":1}]]}');

  //trainer.fromJSON('');
  
  //あいうえお
  trainer.on('A', a);

  //かきくけこ

});