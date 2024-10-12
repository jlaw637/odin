// James Lawrence 11/10/24

//  SETTING UP VARIABLES

let displayContainer=document.querySelector(".display-container");
let btnContainer=document.querySelector(".button-container");
let numbers = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".op");
let output = document.querySelector(".output");

// EVENT LISTENERS

for(let i = 0; i < numbers.length; i++){
    let num = numbers[i];
    num.addEventListener("click", () => {output.textContent += i});
}

for(let i = 0; i < operators.length; i++){
    let op = operators[i];
    op.addEventListener("click", () => {output.textContent += " " + op.textContent});
}

document.getElementById("clear").addEventListener("click", () => {output.textContent = ""});


// OPERATIONS

function operate (){
    
    let tempArr = output.textContent.split(" ");
    output.textContent = "";
    for(let i=0; i < tempArr.length; i++){
        let tempOp = tempArr[i].charAt(0);
        switch(tempOp){
            case "*":
                tempArr[i]=tempArr[i].slice(1);
                tempArr[i]=tempArr[i-1] * tempArr[i];
                break;
            
            case "/":
                tempArr[i]=tempArr[i].slice(1);
                tempArr[i]=tempArr[i-1] / tempArr[i];
                break;
            
            case "+":
                tempArr[i]=tempArr[i].slice(1);
                tempArr[i]=Number(tempArr[i-1]) + Number(tempArr[i]);
                break;
            
            case "-":
                tempArr[i]=tempArr[i].slice(1);
                tempArr[i]=tempArr[i-1] - tempArr[i];
                break;

            default:
                break; 
        }
    }
    output.textContent+=tempArr[tempArr.length - 1]
}

document.getElementById("equal").addEventListener("click", () => {operate()})
    
    
    






