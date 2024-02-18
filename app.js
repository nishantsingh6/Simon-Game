let gameSeq=[];
let userSeq=[];

let btns=["red","green", "yellow", "purple"];
let started=false;
let level=0;

let h2=document.querySelector("h2"); 

//First Step-- Start Game
document.addEventListener("keypress",function(){
  if(started==false){
    started=true;

    levelUP();
  }
});

function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},300);
};

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
    };

//Level up function
function levelUP(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    //Random btn choose(random color generate)
    let randIndx=Math.floor(Math.random()*4);
    let randColor=btns[randIndx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randbtn);
}

function checkAns(idx){

if(userSeq[idx] === gameSeq[idx]){
  if(userSeq.length == gameSeq.length){
  setTimeout(levelUP, 1000);
  }
}else{
    h2.innerHTML=`Oops! Select Wrong Color Game is Over  - Your score is<b> ${level}</b> <br> Press any key to restart the game. `;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="aquamarine";
    }, 300);
    reset();
}
}

function btnPress(){
let btn=this;
userFlash(btn);

 userColor=btn.getAttribute("id");
 userSeq.push(userColor);
 checkAns(userSeq.length-1);
};


let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
   btn.addEventListener("click",btnPress);  
}

function reset() {
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}