#!  /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 20000;
let myPin = 8899;

let pinAnswer = await inquirer.prompt(

[

   {

name: "pin",
messege: "enter your pin",
type:"number",

   }

]

);
// 19978 === 8899 - false

if (pinAnswer.pin === myPin)
{
    console.log("Correct Pin!!!");


let operationAns = await inquirer.prompt(
    [
{
    name: "operation",
    messege: "please select option",
    type:"list",
    choices: ["Withdraw" , "Check balance"]
}

    ]
);

console.log(operationAns);

if(operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([{

    name: "amount",
    messege: "Enter your amount",
    type: "number",


        

}])
//-+ +=
myBalance -= amountAns.amount;
console.log(`${"After Withdraw Your Remaining Balance is:"} ${myBalance}`);

}
else if(operationAns.operation === "Withdraw" , "Check balance") {
    console.log(`${"Your Balance is:"} ${myBalance}`);
}

}

else    {
console.log("Invalid pin code");
    }