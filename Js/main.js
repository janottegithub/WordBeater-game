window.addEventListener('load', init);

//Globals

//Available Levels
const levels = {
    easy: 5,
    medium:3,
    hard:1
}

//to change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    "flyability",
    "unfragmented",
    "hexapartite",
    "trigness",
    "avicenna",
    "pork",
    "stotinka",
    "microangstrom",
    "quisling",
    "convertite",
    "designedness",
    "enfolder",
    "dactyli",
    "unimpacted",
    "aiblins",
    "pan",
    "dauntingly",
    "lakiest",
    "lustrum",
    "decarbonated",
    "ruthlessly",
    "questioningly",
    "interchange",
    "prothallus",
    "outport",
    "unadvantageous",
    "arithmancy",
    "proritual",
    "rebaptize",
    "cay",
    "wagner",
    "spinescent",
    "toast",
    "unridiculed",
    "unhorizontal",
    "unadjudged",
    "naphthol",
    "exmoor",
    "containerboard",
    "chlorenchyma",
    "throaty",
    "jingu",
    "carotidal",
    "contrasuggestible",
    "unimposed",
    "subgod",
    "gazingly",
    "parallactically",
    "pastern",
    "upraised"
];

//initialize game

function init(){
    //show number of seconds in UI
    seconds.innerHTML = currentLevel;
    //Load Word from array
    showWord(words);
    //Start matching on word input
    wordInput.addEventListener('input', startMatch);
    //call countdown every second
    setInterval(countdown, 1000);
    //check game status
    setInterval(checkStatus, 50);

}

//start match
function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value='';
        score++;
    }
    //if score is  -1 display 0
    if(score === -1){
        scoreDisplay.innerHTML = 0

    } else{
        scoreDisplay.innerHTML = score;
    }

}
//Match currentWord to wordinput
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!!!';
        return true;
     } else {
         message.innerHTML ='';
         return false;
     }
}

//Pick &show random words
function showWord(words){
 //Generate random array index
    const randIndex = Math.floor(Math.random()* words.length);
 //Output random word
  currentWord.innerHTML = words[randIndex];
}

//countdown timer
function countdown(){
     //make sure time is not run out
     if(time > 0){
     //decrement
      time--;
     } else if(time === 0){
      //Game is over
      isPlaying = false;
     }
     //show time
     timeDisplay.innerHTML = time;

}

//check game Status
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!!!';
        score = -1;

    }
}
