import PromptSync from "prompt-sync";
import randomInteger from "random-int";

//  The availbale choices
let choices = ["rock", "paper", " scissors"];

//  These will be the massages that shown to the user

 let userPrompt= "0 for rock, 1  for paper, or 2 for scissors";
 let outcome= "ready to play";

//    computor chooses radomly

let computorChoice= randomInteger(0,2);
computorChoice= choices[computorChoice];

// prompt the user for input

const prompt=PromptSync();
let userinput=prompt(userPrompt);
let userChoice= choices[userinput];

if (computorChoice===userChoice){
    outcome="Draw";
} 
else if(computorChoice==="rock" && userChoice ==="paper"){
    outcome="Player Win";

}
else if(computorChoice==="rock" && userChoice==="scissors"){
    outcome="computer win"
}
else if(computorChoice==="paper" && userChoice==="rock"){
    outcome="computer win"
}
else if(computorChoice==="paper" && userChoice==="scissors"){
    outcome="computer win"
}
else if(computorChoice==="scissors" && userChoice==="rock"){
    outcome="Player win"
}
else if(computorChoice==="scissors" && userChoice==="paper"){
    outcome="computer win"
}
console.log("computer choices"+ computorChoice);
console.log("player choices"+ userChoice);
console.log(outcome);
