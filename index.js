let computerAnswer = document.getElementById("computer");
let yourAnswer = document.getElementById("you");
let answer = document.getElementById("answer");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");


rock.addEventListener("click", ()=>{

    let math = Math.floor(Math.random() * 3) + 1 
    let nowAnswer = 1;

    mathfunction(math , nowAnswer)

})

paper.addEventListener("click", ()=>{

    let math = Math.floor(Math.random() * 3) + 1 
    let nowAnswer = 2;

    mathfunction(math , nowAnswer)

})

scissors.addEventListener("click", ()=>{

    let math = Math.floor(Math.random() * 3) + 1 
    let nowAnswer = 3;

    mathfunction(math , nowAnswer)

})

function mathfunction (input , now)
{

    if(input == 1 )
    {
        computerAnswer.textContent = "computer: ROCK"

    }
    else if (input == 2) {
        computerAnswer.textContent = "computer: PAPER"
        
    }
    else if (input == 3)
    {
        computerAnswer.textContent = "computer: scissors"
    }


    
    if(now == 1 )
    {
        yourAnswer.textContent = "you: ROCK"

    }
    else if (now == 2) {
        yourAnswer.textContent = "you: PAPER"
        
    }
    else if (now == 3)
    {
        yourAnswer.textContent = "you: scissors"
    }
    

    if(now == input){
        return answer.textContent = "DRAW!"

    }
    else if( input == 1)
    {
        return (now == 2) ? answer.textContent = "YOU WİN !" : answer.textContent = "YOU LOSE !"
    }
    else if ( input == 2)
    {
        return (now == 3) ? answer.textContent = "YOU WİN !" : answer.textContent = "YOU LOSE !"
    }
    else if ( input == 3)
    {
        return (now == 1) ? answer.textContent = "YOU WİN !" : answer.textContent = "YOU LOSE !"
    }
    
}