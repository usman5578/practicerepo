import PromptSync from "prompt-sync";
let prompt = PromptSync();


let firstNo = prompt("Enter the first No");
firstNo = Number(firstNo);
let secondNo = prompt("Enter the second No");
secondNo = Number(secondNo);
let operator = prompt("Enter 1 for Addition\n Enter 2 for subtraction");
operator = Number(operator);
function calculator(firstNo,secondNo,operator){
    if (operator == 1){
        let add = firstNo+secondNo;
        console.log(" the sum of nos is equals to "+ add)
    }
    else if (operator == 2){
        let subtract = firstNo-secondNo;
        console.log("The first no minus second no is equals to "+ subtract)
    }
    else {
        let add = firstNo+secondNo;
        console.log(" the sum of nos is equals to "+ add)
    }
}
calculator(firstNo,secondNo,operator);

calculator();