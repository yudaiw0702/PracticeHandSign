$(function() {

  //精度100%の文字
  //あ、い、え、そ、て、な、ぬ、は、ま、む、や、ゆ、る

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
  function na (evt) {
    if(stage == 'な'){
      call_na();
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
  function ma (evt) {
    if(stage == 'ま'){
      call_ma();
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
  $('.btn-change').on('click', function(){
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
    }else if(stage == 'な'){
      call_na();
    }else if(stage == 'ぬ'){
      call_nu();
    }else if(stage == 'は'){
      call_ha();
    }else if(stage == 'ま'){
      call_ma();
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
      $('.handsign_img').attr("src","../img/handsign/hs_u.jpg");
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
      $('.handsign_img').attr("src","../img/handsign/hs_na.jpg");
      $(".circle").css('display','none');
      $(".handsign_text").text("逆さのピースをしてみよう！");
      $("#sign_temp").text("？");
      stage = 'な';
    }, 2000);
  };

  function call_na(){
    $("#sign_temp").text("これは指文字の【な】です");
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
      $('.handsign_img').attr("src","../img/handsign/hs_ma.jpg");
      $(".circle").css('display','none');
      $(".handsign_text").text("３をつくって逆さにしよう！");
      $("#sign_temp").text("？");
      stage = 'ま';
    }, 2000);
  };

  function call_ma(){
    $("#sign_temp").text("これは指文字の【ま】です");
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
  
  trainer.fromJSON('{"name":"I","pose":true,"data":[[{"x":-0.2507657543808974,"y":0.02799742441748506,"z":0.3472222222222222,"stroke":1},{"x":-0.2206738638551897,"y":0.02463773348738687,"z":0.30555555555555547,"stroke":1},{"x":0.4714396182360871,"y":-0.052635157904871936,"z":-0.6527777777777778,"stroke":1}]]}');
  
  trainer.fromJSON('{"name":"E","pose":true,"data":[[{"x":0.2308932839481646,"y":0.21231784994449218,"z":0.2579016342832713,"stroke":1},{"x":0.10008063456630706,"y":0.1335276754939234,"z":0.2011384269820372,"stroke":1},{"x":-0.0307320148155506,"y":0.054737501043354536,"z":0.14437521968080302,"stroke":1},{"x":-0.1615446641974082,"y":-0.024052673407214287,"z":0.08761201237956895,"stroke":1},{"x":-0.29235731357926587,"y":-0.10284284785778312,"z":0.030848805078334873,"stroke":1},{"x":-0.42316996296112347,"y":-0.18163302230835196,"z":-0.02591440222289909,"stroke":1},{"x":0.5768300370388766,"y":-0.09205448290842058,"z":-0.6959616961811163,"stroke":1}]]}');
  
  trainer.fromJSON('{"name":"SO","pose":true,"data":[[{"x":0.12400266394854134,"y":0.1898943708027524,"z":0.3472222222222222,"stroke":1},{"x":0.10912234427471643,"y":0.16710704630642226,"z":0.3055555555555557,"stroke":1},{"x":-0.2331250082232578,"y":-0.35700141710917466,"z":-0.6527777777777778,"stroke":1}]]}');
  
  trainer.fromJSON('{"name":"TE","pose":true,"data":[[{"x":0.1831745838679701,"y":-0.1536578760518251,"z":0.1872725159933475,"stroke":1},{"x":0.06906347951418063,"y":-0.12232913276192572,"z":0.15922467676784557,"stroke":1},{"x":-0.045047624839608946,"y":-0.09100038947202635,"z":0.13117683754234366,"stroke":1},{"x":-0.15915872919339852,"y":-0.05967164618212677,"z":0.10312899831684186,"stroke":1},{"x":-0.27326983354718803,"y":-0.028342902892227212,"z":0.07508115909133983,"stroke":1},{"x":-0.38738093790097755,"y":0.0029858403976723846,"z":0.04703331986583792,"stroke":1},{"x":0.6126190620990224,"y":0.45201610696245886,"z":-0.702917507577557,"stroke":1}]]}');

  trainer.fromJSON('{"name":"NA","pose":true,"data":[[{"x":0.0033488650427048183,"y":0.24711577999548553,"z":-0.1546465394554979,"stroke":1},{"x":0.05217676227775825,"y":0.15008655936286172,"z":-0.11400972685182939,"stroke":1},{"x":0.10100465951281146,"y":0.05305733873023791,"z":-0.07337291424816089,"stroke":1},{"x":0.14983255674786478,"y":-0.043971881902385906,"z":-0.032736101644492394,"stroke":1},{"x":0.19866045398291798,"y":-0.14100110253500972,"z":0.007900710959176105,"stroke":1},{"x":0.24748835121797141,"y":-0.23803032316763353,"z":0.0485375235628446,"stroke":1},{"x":-0.7525116487820286,"y":-0.02725637048355592,"z":0.3183270476779599,"stroke":1}]]}');

  trainer.fromJSON('{"name":"NU","pose":true,"data":[[{"x":0.32420316272692307,"y":-0.1078762317893186,"z":-0.04206775330242701,"stroke":1},{"x":0.19003773439054483,"y":0.06316611920474724,"z":-0.06937699445138397,"stroke":1},{"x":0.0558723060541666,"y":0.2342084701988132,"z":-0.09668623560034094,"stroke":1},{"x":-0.07829312228221164,"y":0.40525082119287903,"z":-0.123995476749298,"stroke":1},{"x":-0.49182008088942275,"y":-0.594749178807121,"z":0.3321264601034499,"stroke":1}]]}');

  trainer.fromJSON('{"name":"HA","pose":true,"data":[[{"x":0.29199513450252024,"y":-0.2569230170419302,"z":-0.3885153025327925,"stroke":1},{"x":0.11457382554362017,"y":-0.10406636445319206,"z":-0.255406121013117,"stroke":1},{"x":-0.06284748341527979,"y":0.04879028813554609,"z":-0.1222969394934415,"stroke":1},{"x":-0.2402687923741797,"y":0.20164694072428424,"z":0.010812242026233987,"stroke":1},{"x":-0.4176901013330796,"y":0.3545035933130224,"z":0.14392142354590948,"stroke":1},{"x":0.31423741707639874,"y":-0.24395144067773047,"z":0.6114846974672075,"stroke":1}]]}');

  trainer.fromJSON('{"name":"MA","pose":true,"data":[[{"x":0.017550968537325268,"y":0.216426717500675,"z":-0.2304536799660488,"stroke":1},{"x":-0.004770341684690135,"y":0.18209424933369323,"z":-0.1401165523869637,"stroke":1},{"x":-0.02709165190670554,"y":0.14776178116671157,"z":-0.049779424807878614,"stroke":1},{"x":-0.04941296212872095,"y":0.1134293129997298,"z":0.04055770277120649,"stroke":1},{"x":-0.07173427235073633,"y":0.07909684483274815,"z":0.13089483035029156,"stroke":1},{"x":-0.09405558257275172,"y":0.04476437666576638,"z":0.22123195792937664,"stroke":1},{"x":0.2295138421062794,"y":-0.783573282499325,"z":0.027665166110016265,"stroke":1}]]}');

  trainer.fromJSON('{"name":"MU","pose":true,"data":[[{"x":0.2610593908333716,"y":-0.17217249819110525,"z":0.020711468057415153,"stroke":1},{"x":0.2463135363888762,"y":-0.1002703603667337,"z":-0.0065786398370884965,"stroke":1},{"x":0.2315676819443807,"y":-0.028368222542362154,"z":-0.033868747731592146,"stroke":1},{"x":-0.7389406091666284,"y":0.30081108110020116,"z":0.01973591951126548,"stroke":1}]]}');
  //trainer.fromJSON('');

  trainer.on('A', a);
  trainer.on('I', i);
  trainer.on('E', e);
  trainer.on('SO', so);
  trainer.on('TE', te);
  trainer.on('NA', na);
  trainer.on('NU', nu);
  trainer.on('HA', ha);
  trainer.on('MA', ma);
  trainer.on('MU', mu);

});