$(function() {

  let stage = 'さ';

  function sa (evt) {
    if(stage == 'さ'){
    $("#sign_temp").text("これは指文字の【か】です");
    $('.circle').css('display','inline');
    setTimeout(function(){
        $('.handsign_img').attr("src","../img/handsign/handsign_i.png")
        $(".circle").css('display','none');
        $(".handsign_text").text("小指だけたててみよう！");
        $("#sign_temp").text("？");
        stage = 'し';
      }, 2000);
    }else{
      $("#sign_temp").text("やりなおしてください");
    }
  }

  function si (evt) {
    if(stage == 'し'){
      $("#sign_temp").text("これは指文字の【い】です");
      $('.circle').css('display','inline');
      setTimeout(function(){
        $('.handsign_img').attr("src","../img/handsign/handsign_u.png")
        $(".circle").css('display','none');
        $(".handsign_text").text("人差し指と中指だけたててみよう！");
        $("#sign_temp").text("？");
        stage = 'す';
      }, 2000);
    }else{
      $("#sign_temp").text("やりなおしてください");
    }
  }

  function su (evt) {
    if(stage == 'す'){
      $("#sign_temp").text("これは指文字の【う】です");
      $('.circle').css('display','inline');
      setTimeout(function(){
        $('.handsign_img').attr("src","../img/handsign/handsign_e.png")
        $(".circle").css('display','none');
        $(".handsign_text").text("くまのポーズを取ろう！");
        $("#sign_temp").text("？");
        stage = 'せ';
      }, 2000);
    }else{
      $("#sign_temp").text("やりなおしてください");
    }
  }

  function se (evt) {
    if(stage == 'せ'){
      $("#sign_temp").text("これは指文字の【え】です");
      $('.circle').css('display','inline');
      setTimeout(function(){
        $('.handsign_img').attr("src","../img/handsign/handsign_o.png")
        $(".circle").css('display','none');
        $(".handsign_text").text("輪っかを作ってみよう！");
        $("#sign_temp").text("？");
        stage = 'そ';
      }, 2000);
    }else{
      $("#sign_temp").text("やりなおしてください");
    }
  }

  function so (evt) {
    if(stage == 'そ'){
      $("#sign_temp").text("これは指文字の【お】です");
      $('.circle').css('display','inline');
      setTimeout(function(){
        $("#sign_temp").text("？");
      }, 2000);
    }else{
      $("#sign_temp").text("やりなおしてください");
    }
  }

  var trainer = new LeapTrainer.Controller();

  /*幾何学テンプレートマッチング
  **************************************************************************************/
  
  /*あ（正解）*********************************************************/
  trainer.fromJSON('{"name":"A","pose":true,"data":[[{"x":0.3472222222222222,"y":-0.0279254653691038,"z":0.012245538195029528,"stroke":1},{"x":0.3055555555555556,"y":-0.024574409524811488,"z":0.010776073611625997,"stroke":1},{"x":-0.6527777777777778,"y":0.05249987489391529,"z":-0.023021611806655518,"stroke":1}]]}');

  /*い（正解）*********************************************************/
  trainer.fromJSON('{"name":"I","pose":true,"data":[[{"x":-0.15102441296657967,"y":-0.04756411232623103,"z":0.3472222222222222,"stroke":1},{"x":-0.1329014834105901,"y":-0.04185641884708319,"z":0.3055555555555556,"stroke":1},{"x":0.2839258963771698,"y":0.0894205311733142,"z":-0.6527777777777778,"stroke":1}]]}');
  trainer.fromJSON('{"name":"I2","pose":true,"data":[[{"x":-0.2593489912555588,"y":0.05268358738965655,"z":0.3472222222222222,"stroke":1},{"x":-0.22822711230489176,"y":0.046361556902897574,"z":0.3055555555555556,"stroke":1},{"x":0.4875761035604505,"y":-0.09904514429255411,"z":-0.6527777777777778,"stroke":1}]]}');
  
  /*う（正解）*********************************************************/
  trainer.fromJSON('{"name":"U","pose":true,"data":[[{"x":0.12395890810075694,"y":0.0927196936319662,"z":0.35508605089306894,"stroke":1},{"x":-0.0005949096567103851,"y":0.11251964846066964,"z":0.14757738694542327,"stroke":1},{"x":-0.12514872741417762,"y":0.1323196032893732,"z":-0.05993127700222234,"stroke":1},{"x":-0.24970254517164492,"y":0.15211955811807665,"z":-0.267439940949868,"stroke":1},{"x":-0.3742563629291122,"y":0.1719195129467802,"z":-0.4749486048975136,"stroke":1},{"x":0.6257436370708878,"y":-0.6615980164468657,"z":0.29965638501111186,"stroke":1}]]}');
  trainer.fromJSON('{"name":"U2","pose":true,"data":[[{"x":0.0842065610621103,"y":-0.06658469514233624,"z":0.2839192040377816,"stroke":1},{"x":0.055265958886984434,"y":-0.05283438423887257,"z":0.2386935986540728,"stroke":1},{"x":0.026325356711858594,"y":-0.039084073335408906,"z":0.19346799327036424,"stroke":1},{"x":-0.16579787666095339,"y":0.1585031527166177,"z":-0.7160807959622184,"stroke":1}]]}');
  trainer.fromJSON('{"name":"U3","pose":true,"data":[[{"x":0.030023641857520877,"y":0.11951679043705954,"z":0.3668345634016271,"stroke":1},{"x":-0.03542623474152856,"y":0.12214103880160498,"z":0.13819117908664402,"stroke":1},{"x":-0.10087611134057797,"y":0.12476528716615043,"z":-0.09045220522833897,"stroke":1},{"x":-0.1663259879396273,"y":0.12738953553069587,"z":-0.319095589543322,"stroke":1},{"x":-0.2317758645386767,"y":0.13001378389524132,"z":-0.5477389738583051,"stroke":1},{"x":0.5043805567028895,"y":-0.623826435830752,"z":0.45226102614169494,"stroke":1}]]}');
  trainer.fromJSON('{"name":"U4","pose":true,"data":[[{"x":0.05552462709141939,"y":0.08370181444086111,"z":0.3497961574142927,"stroke":1},{"x":-0.014239349204229645,"y":0.10729498765294831,"z":0.1284549470938816,"stroke":1},{"x":-0.08400332549987871,"y":0.13088816086503552,"z":-0.09288626322652965,"stroke":1},{"x":-0.15376730179552778,"y":0.15448133407712272,"z":-0.31422747354694086,"stroke":1},{"x":-0.22353127809117682,"y":0.1780745072892096,"z":-0.535568683867352,"stroke":1},{"x":0.4200166274993937,"y":-0.6544408043251777,"z":0.464431316132648,"stroke":1}]]}');
  trainer.fromJSON('{"name":"U5","pose":true,"data":[[{"x":0.03539381279674558,"y":0.5477533953282006,"z":0.2605859703133544,"stroke":1},{"x":-0.037510913747454855,"y":0.2977533953282002,"z":0.11770631179670388,"stroke":1},{"x":-0.11041564029165529,"y":0.04775339532820039,"z":-0.025173346719946643,"stroke":1},{"x":-0.18332036683585576,"y":-0.20224660467179953,"z":-0.1680530052365972,"stroke":1},{"x":-0.2562250933800561,"y":-0.45224660467179945,"z":-0.3109326637532477,"stroke":1},{"x":0.5520782014582766,"y":-0.23876697664100252,"z":0.12586673359973333,"stroke":1}]]}');
  trainer.fromJSON('{"name":"U6","pose":true,"data":[[{"x":0.053011734646376873,"y":0.12765796888775927,"z":0.40334611215658245,"stroke":1},{"x":-0.034578602865950936,"y":0.1291014545967013,"z":0.1590549212323329,"stroke":1},{"x":-0.1221689403782788,"y":0.13054494030564334,"z":-0.08523626969191683,"stroke":1},{"x":-0.20975927789060667,"y":0.1319884260145855,"z":-0.32952746061616645,"stroke":1},{"x":-0.29734961540293453,"y":0.13343191172352753,"z":-0.5738186515404161,"stroke":1},{"x":0.6108447018913941,"y":-0.6527247015282173,"z":0.4261813484595839,"stroke":1}]]}');


  /*え（正解）*********************************************************/
  trainer.fromJSON('{"name":"E","pose":true,"data":[[{"x":0.2102563632714452,"y":0.32129080602705296,"z":0.1145238088398246,"stroke":1},{"x":0.08666663612643943,"y":0.21508888977679963,"z":0.1168851926612765,"stroke":1},{"x":-0.036923091018566445,"y":0.10888697352654625,"z":0.1192465764827283,"stroke":1},{"x":-0.16051281816357219,"y":0.0026850572762929237,"z":0.12160796030418008,"stroke":1},{"x":-0.284102545308578,"y":-0.10351685897396043,"z":0.12396934412563188,"stroke":1},{"x":-0.4076922724535838,"y":-0.20971877522421378,"z":0.12633072794708378,"stroke":1},{"x":0.5923077275464161,"y":-0.33471609240851763,"z":-0.7225636103607247,"stroke":1}]]}');

  /*お（正解）*********************************************************/
  trainer.fromJSON('{"name":"O","pose":true,"data":[[{"x":0.41124784380023016,"y":-0.2562342272037038,"z":-0.057128872507781314,"stroke":1},{"x":0.28599885002678926,"y":-0.11860124869217376,"z":0.00829582677115237,"stroke":1},{"x":0.1607498562533486,"y":0.019031729819356302,"z":0.07372052605008617,"stroke":1},{"x":0.0355008624799078,"y":0.15666470833088675,"z":0.13914522532901985,"stroke":1},{"x":-0.08974813129353276,"y":0.2942976868424172,"z":0.20456992460795353,"stroke":1},{"x":-0.2149971250669736,"y":0.43193066535394775,"z":0.2699946238868871,"stroke":1},{"x":-0.5887521561997698,"y":-0.5270893144507299,"z":-0.6385972541373178,"stroke":1}]]}');
  trainer.fromJSON('{"name":"O2","pose":true,"data":[[{"x":0.33233688037402465,"y":-0.34722222222222215,"z":-0.03353933761534642,"stroke":1},{"x":0.2924564547291417,"y":-0.3055555555555556,"z":-0.029514617101504846,"stroke":1},{"x":-0.6247933351031664,"y":0.6527777777777779,"z":0.06305395471685127,"stroke":1}]]}');
  trainer.fromJSON('{"name":"O3","pose":true,"data":[[{"x":0.29200841964631286,"y":-0.25804489914932227,"z":0.14027791271142787,"stroke":1},{"x":0.23599719345122905,"y":-0.20693038559612256,"z":0.14859330263537984,"stroke":1},{"x":0.17998596725614513,"y":-0.15581587204292285,"z":0.15690869255933193,"stroke":1},{"x":-0.7079915803536871,"y":0.6207911567883676,"z":-0.44577990790613964,"stroke":1}]]}');
  trainer.fromJSON('{"name":"O4","pose":true,"data":[[{"x":0.37597909200623736,"y":-0.1308472522364742,"z":0.0541039696112563,"stroke":1},{"x":0.22932984866770634,"y":0.02558655486270167,"z":0.041881821502349786,"stroke":1},{"x":0.08268060532917498,"y":0.18202036196187754,"z":0.029659673393443275,"stroke":1},{"x":-0.06396863800935615,"y":0.3384541690610535,"z":0.017437525284536765,"stroke":1},{"x":-0.6240209079937626,"y":-0.41521383364915876,"z":-0.14308298979158604,"stroke":1}]]}');
  trainer.fromJSON('{"name":"O5","pose":true,"data":[[{"x":0.3524525144350814,"y":-0.13068846700759149,"z":0.014315788666815793,"stroke":1},{"x":0.2254087524058469,"y":0.01847602891168676,"z":0.029222489383895267,"stroke":1},{"x":0.09836499037661217,"y":0.16764052483096503,"z":0.04412919010097474,"stroke":1},{"x":-0.028678771652622337,"y":0.3168050207502432,"z":0.059035890818054215,"stroke":1},{"x":-0.6475474855649186,"y":-0.37223310748530347,"z":-0.14670335896973993,"stroke":1}]]}');
  trainer.fromJSON('{"name":"O6","pose":true,"data":[[{"x":0.4190498839994599,"y":-0.2599595770509589,"z":0.018384987701102945,"stroke":1},{"x":0.2845763132044747,"y":-0.11897372508312326,"z":0.02407712789839281,"stroke":1},{"x":0.15010274240948934,"y":0.022012126884712324,"z":0.02976926809568267,"stroke":1},{"x":0.015629171614504,"y":0.16299797885254796,"z":0.035461408292972535,"stroke":1},{"x":-0.11884439918048123,"y":0.3039838308203835,"z":0.041153548490262426,"stroke":1},{"x":-0.25331796997546663,"y":0.44496968278821913,"z":0.04684568868755229,"stroke":1},{"x":-0.4971957420719803,"y":-0.5550303172117809,"z":-0.19569202916596581,"stroke":1}]]}');

  //trainer.fromJSON('');
  
  //あ
  trainer.on('A', a);

  //い
  trainer.on('I', i);
  trainer.on('I2', i);

  //う
  trainer.on('U', u);
  trainer.on('U2', u);
  trainer.on('U3', u);
  trainer.on('U4', u);
  trainer.on('U5', u);
  trainer.on('U6', u);

  //え
  trainer.on('E', e);

  //お
  trainer.on('O', o);
  trainer.on('O2', o);
  trainer.on('O3', o);
  trainer.on('O4', o);
  trainer.on('O5', o);
  trainer.on('O6', o);

});