$(function() {

  let $balloon_left = $(".balloon1-left");
  let $balloon_right = $(".balloon1-right");
  let stage = "あ";

  $balloon_left.toggleClass("balloon_up");

  $('.check_sign').text("変更完了");

  function a (evt) {
    $('.check_sign').text("あ");
    $('.balloon1-right').text("あ");
    $balloon_right.toggleClass("balloon_up");
    if(stage == "あ"){
      call_a();
    }else{
      resign();
    }
  }

  function i (evt) {
    $('.check_sign').text("い");
    $('.balloon1-right').text("い");
    $balloon_right.toggleClass("balloon_up");
    if(stage == "い"){
      call_i();
    }else{
      resign();
    }
  }

  function ku (evt) {
    $('.check_sign').text("く");
    $('.balloon1-right').text("く");
    $balloon_right.toggleClass("balloon_up");
    if(stage == "く"){
      call_ku();
    }else{
      resign();
    }
  }

  function si (evt) {
    $('.check_sign').text("し");
    $('.balloon1-right').text("し");
    $balloon_right.toggleClass("balloon_up");
    if(stage == "し"){
      call_si();
    }else{
      resign();
    }
  }

  function se (evt) {
    $('.check_sign').text("せ");
    $('.balloon1-right').text("せ");
    $balloon_right.toggleClass("balloon_up");
    if(stage == "せ"){
      call_se();
    }else{
      resign();
    }
  }

  function ka (evt) {
    $('.check_sign').text("か");
    $('.balloon1-right').text("か");
    $balloon_right.toggleClass("balloon_up");
    if(stage == "か"){
      call_ka();
    }else{
      resign();
    }
  }

  //問題変更ボタン
  $('.btn-change').on('click', function(){
    if(stage == 'あ'){
      call_a();
    }else if(stage == 'い'){
      call_i();
    }else if(stage == 'く'){
      call_ku();
    }else if(stage == 'し'){
      call_si();
    }else if(stage == 'せ'){
      call_se();
    }else if(stage == 'か'){
      call_ka();
    }
  });

  //指文字の宣言
  function call_a(){
    setTimeout(function(){
      $(".circle").css('display','inline');
      $('.check_sign').text("?");
      stage = 'い';
      setTimeout(function(){
        $balloon_right.toggleClass("balloon_up");
        $(".circle").css('display','none');
        $('.balloon1-left').text("い");
      }, 2000);
    }, 2000);
  };

  function call_i(){
    setTimeout(function(){
      $(".circle").css('display','inline');
      $('.check_sign').text("?");
      stage = 'く';
      setTimeout(function(){
        $balloon_right.toggleClass("balloon_up");
        $(".circle").css('display','none');
        $('.balloon1-left').text("く");
      }, 2000);
    }, 2000);
  };

  function call_ku(){
    setTimeout(function(){
      $(".circle").css('display','inline');
      $('.check_sign').text("?");
      stage = 'し';
      setTimeout(function(){
        $balloon_right.toggleClass("balloon_up");
        $(".circle").css('display','none');
        $('.balloon1-left').text("し");
      }, 2000);
    }, 2000);
  };

  function call_si(){
    setTimeout(function(){
      $(".circle").css('display','inline');
      $('.check_sign').text("?");
      stage = 'せ';
      setTimeout(function(){
        $balloon_right.toggleClass("balloon_up");
        $(".circle").css('display','none');
        $('.balloon1-left').text("せ");
      }, 2000);
    }, 2000);
  };

  function call_se(){
    setTimeout(function(){
      $(".circle").css('display','inline');
      $('.check_sign').text("?");
      stage = 'か';
      setTimeout(function(){
        $balloon_right.toggleClass("balloon_up");
        $(".circle").css('display','none');
        $('.balloon1-left').text("か");
      }, 2000);
    }, 2000);
  };

  function call_ka(){
    setTimeout(function(){
      $(".circle").css('display','inline');
      $('.check_sign').text("?");
      stage = 'end';
    }, 2000);
  };

  function resign(){
    $('.question').text("もう一度！")
    setTimeout(function(){
      $balloon_right.toggleClass("balloon_up");
      $('.question').text("うさぎと同じ文字を返そう！")
    }, 2000);
  }

  var trainer = new LeapTrainer.Controller();

  trainer.fromJSON('{"name":"A","pose":true,"data":[[{"x":0.3472222222222222,"y":-0.0279254653691038,"z":0.012245538195029528,"stroke":1},{"x":0.3055555555555556,"y":-0.024574409524811488,"z":0.010776073611625997,"stroke":1},{"x":-0.6527777777777778,"y":0.05249987489391529,"z":-0.023021611806655518,"stroke":1}]]}');

  trainer.fromJSON('{"name":"I","pose":true,"data":[[{"x":-0.2507657543808974,"y":0.02799742441748506,"z":0.3472222222222222,"stroke":1},{"x":-0.2206738638551897,"y":0.02463773348738687,"z":0.30555555555555547,"stroke":1},{"x":0.4714396182360871,"y":-0.052635157904871936,"z":-0.6527777777777778,"stroke":1}]]}');

  trainer.fromJSON('{"name":"KU","pose":true,"data":[[{"x":0.25492136490809914,"y":-0.08363889226236315,"z":0.033468302922396886,"stroke":1},{"x":0.24835954503063362,"y":-0.033365150249834066,"z":-0.02385445951274004,"stroke":1},{"x":0.241797725153168,"y":0.01690859176269502,"z":-0.08117722194787694,"stroke":1},{"x":-0.7450786350919009,"y":0.10009545074950221,"z":0.07156337853822006,"stroke":1}]]}');

  trainer.fromJSON('{"name":"SI","pose":true,"data":[[{"x":0.24692425376236726,"y":-0.03363751060968054,"z":-0.03368873540298582,"stroke":1},{"x":0.2078207089603945,"y":0.005401374656955393,"z":-0.004025538024756012,"stroke":1},{"x":0.16871716415842186,"y":0.0444402599235912,"z":0.0256376593534738,"stroke":1},{"x":0.1296136193564491,"y":0.08347914519022699,"z":0.05530085673170361,"stroke":1},{"x":-0.7530757462376327,"y":-0.09968326916109303,"z":-0.043224242657435574,"stroke":1}]]}');
  
  //trainer.fromJSON('');

  trainer.on('A', a);
  trainer.on('I', i);
  trainer.on('KU', ku);
  trainer.on('SI', si);
  trainer.on('SE', se);
  trainer.on('KA', ka);
});