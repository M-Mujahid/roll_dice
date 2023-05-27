var newGamebtn  = document.querySelector(`.newgamebtn`)
var rollDiceBtn = document.querySelector(`.rolldicebtn`)
var holdBtn     = document.querySelector(`.holdbtn`)
var player1     = document.querySelector(`.player1`)
var player2     = document.querySelector(`.player2`)
var player1score= document.querySelector(`.player1score`)
var player2score = document.querySelector(`.player2score`)
var player1Dicescore = document.querySelector(`.player1dicescore`)
var player2Dicescore = document.querySelector(`.player2dicescore`)
var diceImg = document.querySelector('.diceImg')

console.log(rollDiceBtn,`==>>Gamebtn`)

rollDiceBtn.addEventListener(`click`,rolldicehandler)


var currentplayer = 1

let temp;

function rolldicehandler(){
var dicenumber= Math.ceil (Math.random()*6)
diceImg.classList.remove(`hidden`)
diceImg.src=`./assets/${dicenumber}.png`

if (dicenumber == 1) {
   if (currentplayer == 1) {
       player1Dicescore.textContent = 0;
       currentplayer = 2
   } else {
       currentplayer = 1

       player2Dicescore.textContent = 0;
   }
    player1.classList.toggle('active')
    player2.classList.toggle('active')
} else {
   if (currentplayer == 1) {
      player1Dicescore.textContent = Number(player1Dicescore.textContent) + dicenumber
     
   } else {
      player2Dicescore.textContent = Number(player2Dicescore.textContent) + dicenumber
      temp = Number(player2Dicescore.textContent)
      console.log(temp);
   }
}
}
//...............................,,,,,,,,,,,,,..............................//

holdBtn.addEventListener(`click`,holdbtnhandler)

function holdbtnhandler(){


   player1.classList.toggle('active')
   player2.classList.toggle('active')

   if(currentplayer==1){
      currentplayer=2
      player1score.textContent=Number(player1score.textContent)+ Number(player1Dicescore.textContent)
      player1Dicescore.textContent=0;

      if (Number(player1score.textContent) >= 50) {
         alert("Player 1 wins")
     }
   }
   else{
   currentplayer=1
   console.log(temp)
   player2score.textContent=Number(player2score.textContent)+ Number(temp)
   player2Dicescore.textContent=0;
   }
   if (Number(player2score.textContent) >= 50) {
      alert("Player 1 wins")
  }
}
// console.log(player2score.textContent)