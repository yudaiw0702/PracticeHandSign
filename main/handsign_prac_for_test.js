$(function() {

  //精度100%の文字
  //あ、い、え、そ、て、な、ぬ、は、ま、む、や、ゆ、る
  //悪い精度
  //な、ま
  //実装した文字
  //あ、い、え、そ、て、め、ぬ、は、お、む
  //テストで評価する文字
  //あ、ぬ、は、え、め
  
  let stage = "あ";

  function a (evt) {
    if(stage == 'あ'){
      call_a();
    }else{
      $("#sign_temp").text("やりなおしてください");
    }
  }
  function i (evt) {
    if(stage == 'い'){
      call_i();
    }else{
      $("#sign_temp").text("やりなおしてください");
    }
  }
  function e (evt) {
    if(stage == 'え'){
      call_e();
    }else{
      $("#sign_temp").text("やりなおしてください");
    }
  }
  function so (evt) {
    if(stage == 'そ'){
      call_so();
    }else{
      $("#sign_temp").text("やりなおしてください");
    }
  }
  function te (evt) {
    if(stage == 'て'){
      call_te();
    }else{
      $("#sign_temp").text("やりなおしてください");
    }
  }
  function me (evt) {
    if(stage == 'め'){
      call_me();
    }else{
      $("#sign_temp").text("やりなおしてください");
    }
  }
  function nu (evt) {
    if(stage == 'ぬ'){
      call_nu();
    }else{
      $("#sign_temp").text("やりなおしてください");
    }
  }
  function ha (evt) {
    if(stage == 'は'){
      call_ha();
    }else{
      $("#sign_temp").text("やりなおしてください");
    }
  }
  function o (evt) {
    if(stage == 'お'){
      call_o();
    }else{
      $("#sign_temp").text("やりなおしてください");
    }
  }
  function mu (evt) {
    if(stage == 'む'){
      call_mu();
    }else{
      $("#sign_temp").text("やりなおしてください");
    }
  }
  
  //問題変更ボタン
  $('.btn-sign-next').on('click', function(){
    if(stage == 'あ'){
      call_a();
    }else if(stage == 'い'){
      call_i();
    }else if(stage == 'え'){
      call_e();
    }else if(stage == 'そ'){
      call_so();
    }else if(stage == 'て'){
      call_te();
    }else if(stage == 'め'){
      call_me();
    }else if(stage == 'ぬ'){
      call_nu();
    }else if(stage == 'は'){
      call_ha();
    }else if(stage == 'お'){
      call_o();
    }else if(stage == 'む'){
      call_mu();
    }
  });

  function call_a(){
    $("#sign_temp").text("これは指文字の【あ】です");
    $('.circle').css('display','inline');
    setTimeout(function(){
        $('.handsign_img').attr("src","../img/handsign/hs_i.jpg");
        $(".circle").css('display','none');
        $(".handsign_text").text("約束するときのゆびきりの手にしてみよう！");
        $("#sign_temp").text("？");
        stage = 'い';
      }, 2000);
  };

  function call_i(){
    $("#sign_temp").text("これは指文字の【い】です");
    $('.circle').css('display','inline');
    setTimeout(function(){
      $('.handsign_img').attr("src","../img/handsign/hs_e.jpg");
      $(".circle").css('display','none');
      $(".handsign_text").text("くまのポーズを取ろう！");
      $("#sign_temp").text("？");
      stage = 'え';
    }, 2000);
  };

  function call_e(){
    $("#sign_temp").text("これは指文字の【え】です");
    $('.circle').css('display','inline');
    setTimeout(function(){
      $('.handsign_img').attr("src","../img/handsign/hs_so.jpg");
      $(".circle").css('display','none');
      $(".handsign_text").text("前に向かって人差し指を指そう！");
      $("#sign_temp").text("？");
      stage = 'そ';
    }, 2000);
  };

  function call_so(){
    $("#sign_temp").text("これは指文字の【そ】です");
    $('.circle').css('display','inline');
    setTimeout(function(){
      $('.handsign_img').attr("src","../img/handsign/hs_te.jpg");
      $(".circle").css('display','none');
      $(".handsign_text").text("手を挙げる時の形にしよう！");
      $("#sign_temp").text("？");
      stage = 'て';
    }, 2000);
  };

  function call_te(){
    $("#sign_temp").text("これは指文字の【て】です");
    $('.circle').css('display','inline');
    setTimeout(function(){
      $('.handsign_img').attr("src","../img/handsign/hs_me.jpg");
      $(".circle").css('display','none');
      $(".handsign_text").text("OKの形にしてみよう！");
      $("#sign_temp").text("？");
      stage = 'め';
    }, 2000);
  };

  function call_me(){
    $("#sign_temp").text("これは指文字の【め】です");
    $('.circle').css('display','inline');
    setTimeout(function(){
      $('.handsign_img').attr("src","../img/handsign/hs_nu.jpg");
      $(".circle").css('display','none');
      $(".handsign_text").text("人差し指でフックをつくろう！");
      $("#sign_temp").text("？");
      stage = 'ぬ';
    }, 2000);
  };

  function call_nu(){
    $("#sign_temp").text("これは指文字の【ぬ】です");
    $('.circle').css('display','inline');
    setTimeout(function(){
      $('.handsign_img').attr("src","../img/handsign/hs_ha.jpg");
      $(".circle").css('display','none');
      $(".handsign_text").text("鉄砲を打つマネをして親指を隠そう！");
      $("#sign_temp").text("？");
      stage = 'は';
    }, 2000);
  };

  function call_ha(){
    $("#sign_temp").text("これは指文字の【は】です");
    $('.circle').css('display','inline');
    setTimeout(function(){
      $('.handsign_img').attr("src","../img/handsign/hs_o.jpg");
      $(".circle").css('display','none');
      $(".handsign_text").text("まるをつくろう！");
      $("#sign_temp").text("？");
      stage = 'お';
    }, 2000);
  };

  function call_o(){
    $("#sign_temp").text("これは指文字の【お】です");
    $('.circle').css('display','inline');
    setTimeout(function(){
      $('.handsign_img').attr("src","../img/handsign/hs_mu.jpg");
      $(".circle").css('display','none');
      $(".handsign_text").text("東急ハンズの手にしよう！");
      $("#sign_temp").text("？");
      stage = 'む';
    }, 2000);
  };

  function call_mu(){
    $("#sign_temp").text("これは指文字の【む】です");
    $('.circle').css('display','inline');
    setTimeout(function(){
      $(".circle").css('display','none');
      $("#sign_temp").text("？");
      $("#sign_temp").text("おわり！");
    }, 2000);
  };

  //指文字データ
  var trainer = new LeapTrainer.Controller();

  trainer.fromJSON('{"name":"A","pose":true,"data":[[{"x":0.3472222222222222,"y":0.0026479955169245346,"z":0.024720609802506024,"stroke":1},{"x":0.3055555555555556,"y":0.0023302360548935674,"z":0.02175413662620529,"stroke":1},{"x":-0.6527777777777778,"y":-0.004978231571818103,"z":-0.0464747464287113,"stroke":1}]]}');
  
  trainer.fromJSON('{"name":"I","pose":true,"data":[[{"x":-0.1875173807605783,"y":0.07691769686829644,"z":0.3472222222222222,"stroke":1},{"x":-0.1650152950693089,"y":0.0676875732441008,"z":0.3055555555555556,"stroke":1},{"x":0.3525326758298871,"y":-0.1446052701123972,"z":-0.6527777777777778,"stroke":1}]]}');
  
  trainer.fromJSON('{"name":"E","pose":true,"data":[[{"x":0.2308932839481646,"y":0.21231784994449218,"z":0.2579016342832713,"stroke":1},{"x":0.10008063456630706,"y":0.1335276754939234,"z":0.2011384269820372,"stroke":1},{"x":-0.0307320148155506,"y":0.054737501043354536,"z":0.14437521968080302,"stroke":1},{"x":-0.1615446641974082,"y":-0.024052673407214287,"z":0.08761201237956895,"stroke":1},{"x":-0.29235731357926587,"y":-0.10284284785778312,"z":0.030848805078334873,"stroke":1},{"x":-0.42316996296112347,"y":-0.18163302230835196,"z":-0.02591440222289909,"stroke":1},{"x":0.5768300370388766,"y":-0.09205448290842058,"z":-0.6959616961811163,"stroke":1}]]}');
  
  trainer.fromJSON('{"name":"SO","pose":true,"data":[[{"x":0.12400266394854134,"y":0.1898943708027524,"z":0.3472222222222222,"stroke":1},{"x":0.10912234427471643,"y":0.16710704630642226,"z":0.3055555555555557,"stroke":1},{"x":-0.2331250082232578,"y":-0.35700141710917466,"z":-0.6527777777777778,"stroke":1}]]}');
  
  trainer.fromJSON('{"name":"TE","pose":true,"data":[[{"x":0.1831745838679701,"y":-0.1536578760518251,"z":0.1872725159933475,"stroke":1},{"x":0.06906347951418063,"y":-0.12232913276192572,"z":0.15922467676784557,"stroke":1},{"x":-0.045047624839608946,"y":-0.09100038947202635,"z":0.13117683754234366,"stroke":1},{"x":-0.15915872919339852,"y":-0.05967164618212677,"z":0.10312899831684186,"stroke":1},{"x":-0.27326983354718803,"y":-0.028342902892227212,"z":0.07508115909133983,"stroke":1},{"x":-0.38738093790097755,"y":0.0029858403976723846,"z":0.04703331986583792,"stroke":1},{"x":0.6126190620990224,"y":0.45201610696245886,"z":-0.702917507577557,"stroke":1}]]}');

  trainer.fromJSON('{"name":"ME","pose":true,"data":[[{"x":0.27433647700194674,"y":-0.10295673167124908,"z":0.11379968004141305,"stroke":1},{"x":0.15801107702422307,"y":-0.05936720822414197,"z":0.12396979202691849,"stroke":1},{"x":0.04168567704649939,"y":-0.015777684777034853,"z":0.13413990401242393,"stroke":1},{"x":-0.07463972293122437,"y":0.02781183867007228,"z":0.14431001599792947,"stroke":1},{"x":-0.19096512290894807,"y":0.07140136211717957,"z":0.1544801279834347,"stroke":1},{"x":-0.3072905228866718,"y":0.11499088556428669,"z":0.16465023996894035,"stroke":1},{"x":0.09886213765417495,"y":-0.03610246167911259,"z":-0.8353497600310597,"stroke":1}]]}');

  trainer.fromJSON('{"name":"NU","pose":true,"data":[[{"x":0.32420316272692307,"y":-0.1078762317893186,"z":-0.04206775330242701,"stroke":1},{"x":0.19003773439054483,"y":0.06316611920474724,"z":-0.06937699445138397,"stroke":1},{"x":0.0558723060541666,"y":0.2342084701988132,"z":-0.09668623560034094,"stroke":1},{"x":-0.07829312228221164,"y":0.40525082119287903,"z":-0.123995476749298,"stroke":1},{"x":-0.49182008088942275,"y":-0.594749178807121,"z":0.3321264601034499,"stroke":1}]]}');

  trainer.fromJSON('{"name":"HA","pose":true,"data":[[{"x":0.29199513450252024,"y":-0.2569230170419302,"z":-0.3885153025327925,"stroke":1},{"x":0.11457382554362017,"y":-0.10406636445319206,"z":-0.255406121013117,"stroke":1},{"x":-0.06284748341527979,"y":0.04879028813554609,"z":-0.1222969394934415,"stroke":1},{"x":-0.2402687923741797,"y":0.20164694072428424,"z":0.010812242026233987,"stroke":1},{"x":-0.4176901013330796,"y":0.3545035933130224,"z":0.14392142354590948,"stroke":1},{"x":0.31423741707639874,"y":-0.24395144067773047,"z":0.6114846974672075,"stroke":1}]]}');

  trainer.fromJSON('{"name":"O","pose":true,"data":[[{"x":0.48563453620080743,"y":-0.080044730330176,"z":-0.03388661386428399,"stroke":1},{"x":0.24760575603346802,"y":0.06767348943303364,"z":0.03700818828470065,"stroke":1},{"x":0.009576975866128379,"y":0.21539170919624318,"z":0.10790299043368523,"stroke":1},{"x":-0.2284518043012111,"y":0.3631099289594535,"z":0.1787977925826698,"stroke":1},{"x":-0.5143654637991926,"y":-0.5661303972585545,"z":-0.28982235743677187,"stroke":1}]]}');

  trainer.fromJSON('{"name":"MU","pose":true,"data":[[{"x":0.2610593908333716,"y":-0.17217249819110525,"z":0.020711468057415153,"stroke":1},{"x":0.2463135363888762,"y":-0.1002703603667337,"z":-0.0065786398370884965,"stroke":1},{"x":0.2315676819443807,"y":-0.028368222542362154,"z":-0.033868747731592146,"stroke":1},{"x":-0.7389406091666284,"y":0.30081108110020116,"z":0.01973591951126548,"stroke":1}]]}');
  //trainer.fromJSON('');

  trainer.on('A', a);
  trainer.on('I', i);
  trainer.on('E', e);
  trainer.on('SO', so);
  trainer.on('TE', te);
  trainer.on('ME', me);
  trainer.on('NU', nu);
  trainer.on('HA', ha);
  trainer.on('O', o);
  trainer.on('MU', mu);

});