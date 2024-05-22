let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");


const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const genCompChoice=() =>{
    const options=["rock","paper","scissors"];
   //rock,papper,scissors
   const randidx=Math.floor(Math.random()*3);
   return options[randidx]

};

const drawGame=() =>{
    console.log("game was draw");
    msg.innerText="Game Draw! Play Again!";
    msg.style.backgroundColor="blue";
}

const showWinner=(userwin, userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        
      msg.innerText=`You win! Your ${userchoice} beats ${compchoice}`;
      msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`Comp win! ${compchoice} beats Your ${userchoice}`;
       msg.style.backgroundColor="red";
    }
}

const playGmae=(userchoice) =>{
    
    //computer choice
    const compchoice=genCompChoice();
    

    if(userchoice=== compchoice){
        drawGame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin =compchoice==="paper" ? false:true;
        }
        else if(userchoice ==="paper"){
            userwin =compchoice==="scissors" ? false:true;
        }
        else{
            userwin =compchoice==="rock" ? false:true;
        }
        showWinner(userwin ,userchoice,compchoice);
    }
};


choices.forEach((choice) =>{
    
choice.addEventListener("click",() =>{
    const userchoice=choice.getAttribute("id");
console.log("choice was clicked",userchoice);
playGmae(userchoice);
});
});