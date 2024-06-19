
// let rock=document.querySelector("#rock");
// let paper=document.querySelector("#paper");
// let scissor=document.querySelector("#scissor");
let userScore=0;
let compScore=0;
const imgs=document.querySelectorAll(".imgs");
const user=document.querySelector(".user-score");
const msg=document.querySelector(".display-msg");
const opponent=document.querySelector(".opponent-score");
const displaywinner=(choice) =>{
    let comp=Math.floor(Math.random()*3);
    let winner=0;
    if(choice==="rock"){
          if(comp==1) winner=2;
          else if(comp==2) winner=1;
    } 
    else if(choice==="paper"){
        if(comp==2) winner=2;
        else if(comp==0) winner=1;
    }
    else{
        if(comp==0) winner=2;
        else if(comp==1) winner=1;
    }
    if(winner==0) {
        msg.innerText="OOPS!! It's a draw";
        msg.style.backgroundColor="#028391";
    }
    else if(winner==1) {
        userScore++;
        msg.innerText="Congratulations!!You won this time";
        user.innerText=userScore;
        msg.style.backgroundColor="green";
    }
    else {
        compScore++;
        msg.innerText="Better luck next time ";
        msg.style.backgroundColor="red";
        opponent.innerText=compScore;
    }
};
imgs.forEach((img)=> {
    console.log(img);
     img.addEventListener("click",()=>{
        displaywinner(img.getAttribute("id"));
     });
});
