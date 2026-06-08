// Generating  arandom number between 1 and 100
let randomnum=Math.floor((Math.random()*100))+1;
// console.log(randomnum)

const submit=document.querySelector('#submit');
const userInput=document.querySelector('#guess');
const prev_guess=document.querySelector('#prev');
const remain_guess=document.querySelector('#remaining');
const hint=document.querySelector('#hint');
let container=document.querySelector('.container');
let start=document.querySelector('#start');

// take input from user 
// compare it from random num
// if it is unequal then give hint 
// it is equal then print you won 
// and there is an option of play again and refreshing 
// remaining guesses got decreased 
//  prev guesses are shown 


let prev=[];
let numguess=1;
let playgame=true;

if(playgame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess=parseInt(userInput.value)
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess<1){
        alert('Please enter a number more than 1')
    }
    else if(guess>100){
        alert('Please enter a  number less than 100')
    }
    else{
        prev.push(guess);
        if(numguess>10){
            displayGuess();
            dispalyMessage(`Game over : Random number was ${randomnum}`)
            endGame();
        }
        else{
            displayGuess();
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomnum){
        dispalyMessage(`You guessed it right`);
        endGame();
    }
    else if(guess<randomnum){
        dispalyMessage(`Number is too low`)
    }
    else {
         dispalyMessage(`Number is too high`)
    }
}

function displayGuess(){
    userInput.value='';
    const previous=prev.toString();
    prev_guess.innerHTML=`Prev guess : ${previous}`
    numguess++;
    remain_guess.innerHTML=`Guess remaining : ${11-numguess}`
}

function dispalyMessage(guess){
hint.innerHTML=`${guess}`
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    
    start.innerHTML="start new game"
    playgame=false;
    newGame();

}

function newGame(){
start.addEventListener('click',(e)=>{
    e.preventDefault();
randomnum=Math.floor((Math.random()*100))+1;
 prev=[];
numguess=1;
 
 
 prev_guess.innerHTML=`Prev guess :`
 remain_guess.innerHTML=`Guess remaining : ${11-numguess}`
 userInput.removeAttribute('disabled','');
 hint.innerHTML='hint:'
 start.innerHTML='';

 playgame=true;

})
}



// submit.addEventListener('click',(e)=>{
//         e.preventDefault();
//         check();

//         const guess=parseInt(userInput.value);
//         if(isNaN(guess)){
//             const new1=document.createElement('p');
//             new1.innerHTML='Please Input a valid Number';
//             container.appendChild(new1);
//             userInput.value = "";
//             return;
//         } 
//         prev.push(guess);
//         numguess++;
//         let hint1="";
//         if(guess==randomnum){
//             won=true;
//             hint1='equal'
//         }
//         else if(guess>randomnum) {
//             hint1='lesser'
//         }
//         else {
//             hint1='greater'
//         }
//         let guesslist=prev.toString();
//         prev_guess.innerHTML=`Prev guess : ${guesslist}`;
//         remain_guess.innerHTML=`Guess remaining : ${10-numguess+1}`;
//         if(hint1=='equal') hint.innerHTML=` You won `
//         else hint.innerHTML=`hint : ${hint1}`
//         userInput.value = "";


//     })

// function check(){
//     if(numguess>10||won){
       
//         reset();
//     }
// }
// function reset(){
//     prev=[];
//     numguess=1;
//     won=false;
//     randomnum=Math.floor((Math.random()*100))+1;
// }



