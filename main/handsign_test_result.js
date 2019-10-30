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

  function ko (evt) {
    $('.check_sign').text("こ");
    $('.balloon1-right').text("こ");
    $balloon_right.toggleClass("balloon_up");
    if(stage == "こ"){
      call_ko();
    }else{
      resign();
    }
  }

  //問題変更ボタン
  $('.btn-change').on('click', function(){
    if(stage == 'あ'){
      call_a();
    }else if(stage == 'こ'){
      call_ko();
    }else if(stage == 'く'){
      call_ku();
    }else if(stage == 'し'){
      call_si();
    }else if(stage == 'い'){
      call_i();
    }
  });

  //指文字の宣言
  function call_a(){
    setTimeout(function(){
      $(".circle").css('display','inline');
      $('.check_sign').text("?");
      stage = 'こ';
      setTimeout(function(){
        $balloon_right.toggleClass("balloon_up");
        $(".circle").css('display','none');
        $('.balloon1-left').text("こ");
      }, 2000);
    }, 2000);
  };

  function call_ko(){
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

  trainer.fromJSON('{"name":"A","pose":true,"data":[[{"x":0.3472222222222222,"y":-0.0279254653691038,"z":0.012245538195029528,"stroke":1},{"x":0.3055555555555556,"y":-0.024574409524811488,"z":0.010776073611625997,"stroke":1},{"x":-0.6527777777777778,"y":0.05249987489391529,"z":-0.023021611806655518,"stroke":1}]]}');

  trainer.fromJSON('{"name":"I","pose":true,"data":[[{"x":-0.15102441296657967,"y":-0.04756411232623103,"z":0.3472222222222222,"stroke":1},{"x":-0.1329014834105901,"y":-0.04185641884708319,"z":0.3055555555555556,"stroke":1},{"x":0.2839258963771698,"y":0.0894205311733142,"z":-0.6527777777777778,"stroke":1}]]}');
  trainer.fromJSON('{"name":"I2","pose":true,"data":[[{"x":-0.2593489912555588,"y":0.05268358738965655,"z":0.3472222222222222,"stroke":1},{"x":-0.22822711230489176,"y":0.046361556902897574,"z":0.3055555555555556,"stroke":1},{"x":0.4875761035604505,"y":-0.09904514429255411,"z":-0.6527777777777778,"stroke":1}]]}');
  
  trainer.fromJSON('{"name":"KU","pose":true,"data":[[{"x":0.25492136490809914,"y":-0.08363889226236315,"z":0.033468302922396886,"stroke":1},{"x":0.24835954503063362,"y":-0.033365150249834066,"z":-0.02385445951274004,"stroke":1},{"x":0.241797725153168,"y":0.01690859176269502,"z":-0.08117722194787694,"stroke":1},{"x":-0.7450786350919009,"y":0.10009545074950221,"z":0.07156337853822006,"stroke":1}]]}');

  trainer.fromJSON('{"name":"SI","pose":true,"data":[[{"x":0.22990425344236198,"y":-0.1219231828257094,"z":0.009117852655827742,"stroke":1},{"x":0.20498404224039368,"y":-0.06531031414337701,"z":-0.010211217383167333,"stroke":1},{"x":0.18006383103842527,"y":-0.008697445461044631,"z":-0.0295402874221624,"stroke":1},{"x":0.15514361983645708,"y":0.047915423221287765,"z":-0.04886935746115746,"stroke":1},{"x":-0.770095746557638,"y":0.14801551920884332,"z":0.07950300961065947,"stroke":1}]]}');
  trainer.fromJSON('{"name":"SI2","pose":true,"data":[[{"x":-0.01978248025470069,"y":-0.2454746787449836,"z":0.21604514066723662,"stroke":1},{"x":-0.0066570891031552115,"y":-0.14181144020438027,"z":0.09042934143370368,"stroke":1},{"x":0.006468302048390273,"y":-0.03814820166377694,"z":-0.035186457799829096,"stroke":1},{"x":0.019593693199935758,"y":0.06551503687682639,"z":-0.16080225703336187,"stroke":1},{"x":0.03271908435148124,"y":0.16917827541742972,"z":-0.28641805626689465,"stroke":1},{"x":0.04584447550302673,"y":0.27284151395803335,"z":-0.4120338555004274,"stroke":1},{"x":-0.07818598574497804,"y":-0.08210050563914872,"z":0.5879661444995725,"stroke":1}]]}');
  
  trainer.fromJSON('{"name":"KO","pose":true,"data":[[{"x":0.2990812304063072,"y":-0.34722222222222215,"z":0.0478961353219315,"stroke":1},{"x":0.26319148275755033,"y":-0.3055555555555555,"z":0.042148599083299695,"stroke":1},{"x":-0.5622727131638575,"y":0.6527777777777779,"z":-0.09004473440523116,"stroke":1}]]}');
  trainer.fromJSON('{"name":"KO2","pose":true,"data":[[{"x":0.323307169793817,"y":-0.19771834756455386,"z":0.012874427588242976,"stroke":1},{"x":0.2390971572233691,"y":-0.08351166464102266,"z":0.019337850617779012,"stroke":1},{"x":0.15488714465292108,"y":0.030695018282508424,"z":0.02580127364731505,"stroke":1},{"x":0.07067713208247306,"y":0.14490170120603962,"z":0.03226469667685106,"stroke":1},{"x":-0.013532880487974741,"y":0.2591083841295707,"z":0.03872811970638709,"stroke":1},{"x":-0.09774289305842276,"y":0.3733150670531019,"z":0.045191542735923074,"stroke":1},{"x":-0.676692830206183,"y":-0.5267901584656443,"z":-0.17419791097249823,"stroke":1}]]}');
  //trainer.fromJSON('');

  trainer.on('A', a);

  trainer.on('I', i);
  trainer.on('I2', i);

  trainer.on('KU', ku);
  
  trainer.on('SI', si);
  trainer.on('SI2', si);
  
  trainer.on('KO', ko);
  trainer.on('KO2', ko);
});