
const availableString = ["rock","paper","scissor"];
function computerPlay(){
   return (availableString[Math.floor(Math.random()*3)]);
}

let userpoint = 0;
let computerpoint = 0;


function letsPlay(playerselection,computerselection){
   
   const newobject ={
      rock : 1,
      paper : 2,
      scissor : 3,
   };
   let game = newobject[playerselection]-newobject[computerselection];

   if (game === 1 || game === -2){
      console.log(`yours " ${playerselection}" beats computer's "${computerselection}"`);
     userpoint++;
   }
   else if (game === -1 || game === 2){
      console.log(`yours " ${playerselection}" beaten by computer's "${computerselection}"`);
      computerpoint++;
   }
   else{
     console.log("darw round");
   }
   

}
function Rounds(){
   for(let i = 0;i<5;i++){
      let playerSelection = prompt("choose any one ");
      letsPlay(playerSelection,computerPlay());
   }
   if (userpoint>=3){
     console.log(" YOU WIN ");  
   }
   else if (computerpoint>=3) {
     console.log("YOU LOST TO THE COMPUTER");
   }
   else{
      console.log('ITS A DRAW');
   }
}
Rounds();