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

  function nu (evt) {
    $('.check_sign').text("ぬ");
    $('.balloon1-right').text("ぬ");
    $balloon_right.toggleClass("balloon_up");
    if(stage == "ぬ"){
      call_nu();
    }else{
      resign();
    }
  }

  function ha (evt) {
    $('.check_sign').text("は");
    $('.balloon1-right').text("は");
    $balloon_right.toggleClass("balloon_up");
    if(stage == "は"){
      call_ha();
    }else{
      resign();
    }
  }

  function e (evt) {
    $('.check_sign').text("え");
    $('.balloon1-right').text("え");
    $balloon_right.toggleClass("balloon_up");
    if(stage == "え"){
      call_e();
    }else{
      resign();
    }
  }

  function me (evt) {
    $('.check_sign').text("め");
    $('.balloon1-right').text("め");
    $balloon_right.toggleClass("balloon_up");
    if(stage == "め"){
      call_me();
    }else{
      resign();
    }
  }

  //問題変更ボタン
  $('.btn-change').on('click', function(){
    if(stage == 'あ'){
      call_a();
    }else if(stage == 'ぬ'){
      call_nu();
    }else if(stage == 'は'){
      call_ha();
    }else if(stage == 'え'){
      call_e();
    }else if(stage == 'め'){
      call_me();
    }
  });

  //指文字の宣言
  function call_a(){
    setTimeout(function(){
      $(".circle").css('display','inline');
      $('.check_sign').text("?");
      stage = 'ぬ';
      setTimeout(function(){
        $balloon_right.toggleClass("balloon_up");
        $(".circle").css('display','none');
        $('.balloon1-left').text("ぬ");
      }, 2000);
    }, 2000);
  };

  function call_nu(){
    setTimeout(function(){
      $(".circle").css('display','inline');
      $('.check_sign').text("?");
      stage = 'は';
      setTimeout(function(){
        $balloon_right.toggleClass("balloon_up");
        $(".circle").css('display','none');
        $('.balloon1-left').text("は");
      }, 2000);
    }, 2000);
  };

  function call_ha(){
    setTimeout(function(){
      $(".circle").css('display','inline');
      $('.check_sign').text("?");
      stage = 'え';
      setTimeout(function(){
        $balloon_right.toggleClass("balloon_up");
        $(".circle").css('display','none');
        $('.balloon1-left').text("え");
      }, 2000);
    }, 2000);
  };

  function call_e(){
    setTimeout(function(){
      $(".circle").css('display','inline');
      $('.check_sign').text("?");
      stage = 'め';
      setTimeout(function(){
        $balloon_right.toggleClass("balloon_up");
        $(".circle").css('display','none');
        $('.balloon1-left').text("め");
      }, 2000);
    }, 2000);
  };

  function call_me(){
    setTimeout(function(){
      $(".circle").css('display','inline');
      $('.check_sign').text("?");
      stage = 'end';
      setTimeout(function(){
        $balloon_right.toggleClass("balloon_up");
        $(".circle").css('display','none');
        $('.balloon1-left').text("おわりです！");
        $('.question').text("”次へ”を押して結果をみてみよう！")
      }, 2000);
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

  trainer.fromJSON('{"name":"A","pose":true,"data":[[{"x":0.3472222222222222,"y":0.0026479955169245346,"z":0.024720609802506024,"stroke":1},{"x":0.3055555555555556,"y":0.0023302360548935674,"z":0.02175413662620529,"stroke":1},{"x":-0.6527777777777778,"y":-0.004978231571818103,"z":-0.0464747464287113,"stroke":1}]]}');

  trainer.fromJSON('{"name":"NU","pose":true,"data":[[{"x":0.32420316272692307,"y":-0.1078762317893186,"z":-0.04206775330242701,"stroke":1},{"x":0.19003773439054483,"y":0.06316611920474724,"z":-0.06937699445138397,"stroke":1},{"x":0.0558723060541666,"y":0.2342084701988132,"z":-0.09668623560034094,"stroke":1},{"x":-0.07829312228221164,"y":0.40525082119287903,"z":-0.123995476749298,"stroke":1},{"x":-0.49182008088942275,"y":-0.594749178807121,"z":0.3321264601034499,"stroke":1}]]}');
  
  trainer.fromJSON('{"name":"HA","pose":true,"data":[[{"x":0.29199513450252024,"y":-0.2569230170419302,"z":-0.3885153025327925,"stroke":1},{"x":0.11457382554362017,"y":-0.10406636445319206,"z":-0.255406121013117,"stroke":1},{"x":-0.06284748341527979,"y":0.04879028813554609,"z":-0.1222969394934415,"stroke":1},{"x":-0.2402687923741797,"y":0.20164694072428424,"z":0.010812242026233987,"stroke":1},{"x":-0.4176901013330796,"y":0.3545035933130224,"z":0.14392142354590948,"stroke":1},{"x":0.31423741707639874,"y":-0.24395144067773047,"z":0.6114846974672075,"stroke":1}]]}');

  trainer.fromJSON('{"name":"E","pose":true,"data":[[{"x":0.2308932839481646,"y":0.21231784994449218,"z":0.2579016342832713,"stroke":1},{"x":0.10008063456630706,"y":0.1335276754939234,"z":0.2011384269820372,"stroke":1},{"x":-0.0307320148155506,"y":0.054737501043354536,"z":0.14437521968080302,"stroke":1},{"x":-0.1615446641974082,"y":-0.024052673407214287,"z":0.08761201237956895,"stroke":1},{"x":-0.29235731357926587,"y":-0.10284284785778312,"z":0.030848805078334873,"stroke":1},{"x":-0.42316996296112347,"y":-0.18163302230835196,"z":-0.02591440222289909,"stroke":1},{"x":0.5768300370388766,"y":-0.09205448290842058,"z":-0.6959616961811163,"stroke":1}]]}');
  
  trainer.fromJSON('{"name":"ME","pose":true,"data":[[{"x":0.27433647700194674,"y":-0.10295673167124908,"z":0.11379968004141305,"stroke":1},{"x":0.15801107702422307,"y":-0.05936720822414197,"z":0.12396979202691849,"stroke":1},{"x":0.04168567704649939,"y":-0.015777684777034853,"z":0.13413990401242393,"stroke":1},{"x":-0.07463972293122437,"y":0.02781183867007228,"z":0.14431001599792947,"stroke":1},{"x":-0.19096512290894807,"y":0.07140136211717957,"z":0.1544801279834347,"stroke":1},{"x":-0.3072905228866718,"y":0.11499088556428669,"z":0.16465023996894035,"stroke":1},{"x":0.09886213765417495,"y":-0.03610246167911259,"z":-0.8353497600310597,"stroke":1}]]}');
  //trainer.fromJSON('');

  trainer.on('A', a);
  trainer.on('NU', nu);
  trainer.on('HA', ha);
  trainer.on('E', e);
  trainer.on('ME', me);
});