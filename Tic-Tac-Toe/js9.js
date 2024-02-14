console.log("hello");
let Boxes=document.querySelectorAll(".box");
let Reset=document.querySelector("#Reset");
let button2=document.querySelector("#button2");
let msg=document.querySelector("#msg");
let msghide=document.querySelector(".msghide");
let msgcontainer=document.querySelector(".msgcontainer");

let turno=true;//trun0 or turnX

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=()=>{
    turno=true;
    enableBoxes();
    msgcontainer.classList.add("msghide");
}

Boxes.forEach((box)=>{
    box.addEventListener("click", () => {
            console.log("button was clicked");
            if(turno){
                box.innerText="O";
                turno=false;
            }
            else{
                box.innerText="X";
                turno=true;

            }
            box.disabled=true;
            checkWinner();
        })
})
    disableBoxes=()=>{
        for(let box of Boxes){
            box.disabled=true;
            
        }
    }

    enableBoxes=()=>{
        for(let box of Boxes){
            box.disabled=false;
            box.innerText="";

        }
    }
    showWinner=(winner)=>{
        msg.innerText=`winner is ${winner}`;
        msgcontainer.classList.remove("msghide");
        disableBoxes();
        // Boxes.classList.add("boxhide");
    }
const checkWinner=()=>{
    for(let patterns of winPatterns){

            let posval1= Boxes[patterns[0]].innerText;
            let posval2= Boxes[patterns[1]].innerText;
            let posval3= Boxes[patterns[2]].innerText;

            if(posval1 !="" && posval2 !="" && posval3 !="" ){
                if(posval1===posval2 && posval2===posval3){
                    console.log("Winner!",posval1);
                    showWinner(posval1);    
                }
            }
    }
}

button2.addEventListener("click",resetGame);
Reset.addEventListener("click",resetGame);