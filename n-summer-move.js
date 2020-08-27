'usestrict'

const allId = document.getElementById("all");
const nameId = document.getElementById("name");
const genderId = document.getElementById("gender");
const button = document.getElementById("button");
const human = document.getElementById("human");
const naemArea = document.getElementById("human-area");
const falling = document.getElementsByClassName("falling-object");
const up = document.getElementById("up-button");
const main = document.getElementById("main-area");
const questions = document.getElementById("question-area");
const next = document.getElementById("next-button");
const cryArea = document.getElementById("cry-area");
const nameArea = document.getElementById("name-area");
const zombie = document.getElementById("zombieId");
const last = document.getElementById("lastId");
main.style.display = "none";
questions.style.display = "block";

//下の二つの関数でオチとしてゾンビの画像と最後の文言が出る

function zombieHull(){
  zombie.style.display = "block";
  main.style.display = "none";
  document.title = "次はお前がこうなるよ";
  setTimeout("lastHull()",2000);
}

function lastHull(){
  last.style.display = "block";
  zombie.style.display = "none";
}


function swap(){
  //htmlのメインタグとquestionsの表示、非表示を切り替える
  if(main.style.display === "none"){
    main.style.display = "block";
    questions.style.display = "none";
  }else{
    main.style.display = "none";
    questions.style.display = "block";
  }
}

function fallingDside(fallingSrc){
  //落花する画像を切り替える
  for(var item of falling){
    item.src = fallingSrc;
}}

function cryDiside(cryArray){
  //表示するメッセージを選択する
  var random = Math.floor( Math.random() * 5 );
  cryArea.innerHTML = cryArray[random];
}

button.onclick = () =>{
  var name = nameId.value;
  var gender = genderId.value;
  if(!name){
    //入力の確認
    alert('全て入力してください');
  }else{
    swap();
    nameArea.innerHTML = name;
    if(gender === "女"){
      //画像とメッセージを女性用に変える。デフォルトは男になっている
      document.title =　"裁きレベル1"; 
      human.src = "./womanA.png"
      var crySetNeedle = setInterval("cryDiside(womanCryNeedle)",1500);
      //レベル2の女
      up.onclick = () => {
        clearInterval(crySetNeedle);
        document.title = "裁きレベル2";
        fallingDside("./stone.png");
        var crySetStone = setInterval("cryDiside(womanCryStone)",1500);
        human.src = "./womanB.png";
        //レベル3の女
        up.onclick = () => {
          clearInterval(crySetStone);
          fallingDside("./knife.png");
          document.title = "裁きレベル3";
          cryArea.innerHTML = "";
          human.src = "./womanC.png";
          //オチ、3回連続でレベルを上げるを選択した場合
          up.onclick = () => {
            cryArea.innerHTML = "地獄に落ちろ";
            setTimeout("zombieHull()",2000);
          }
        }
      }
      
    }else{
      //レベル2の男
      document.title = "裁きレベル2";
      var crySetNeedle = setInterval("cryDiside(manCryNeedle)",1500);
      up.onclick = () => {
        clearInterval(crySetNeedle);
        document.title = "裁きレベル3";
        fallingDside("./stone.png");
        var crySetStone = setInterval("cryDiside(manCryStone)",1500);
        human.src = "./manB.png";
        //レベル3の男
        up.onclick = () => {
          clearInterval(crySetStone);

          fallingDside("./knife.png");
          cryArea.innerHTML = "";
          human.src = "./manC.png";
          //オチ、3回連続でレベルを上げるを選択した場合
          up.onclick = () => {
            cryArea.innerHTML = "地獄に落ちろ";
            setTimeout("zombieHull()",2000);

          }
        }
      }
      
  }}


}

//上に表示されるメッセージ

const womanCryNeedle = [
  "かっ、体が勝手に！止まれない！",
  "だっ、誰か、助けて！",
  "痛い！痛い！痛い！痛い！",
  "針がっ！針がっ！針がっ！",
  "もうやめて！お願い！謝るから！",
]

const manCryNeedle = [
  "かっ、体が勝手に！止まらない！",
  "だっ、誰か、誰かいないのか！？助けてくれ！",
  "うぁぁぁぁぁぁぁ",
  "針がっ！",
  "やめてくれ！もうたくさんだ！頼む！",
]

const womanCryStone = [
  "いっ、石が、",
  "なんで！なんで！なんで！",
  "もうやめて！",
  "あ、あ、あ、",
  "ゴッ",
]

const manCryStone = [
  "石が、",
  "やめろ！",
  "うっ、うっ、うっ、",
  "覚えてろよ、覚悟しとけ",
  "ボコッ",
]

const womanCryKnife = [
  ""
]

const manCryKnife = [
  ""
]


next.onclick = () => {
  //他の人間に対象を変えたいときにリロードして最初に戻す
  location.reload();
}
