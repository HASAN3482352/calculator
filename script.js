// const body = document.querySelector("body");
// const container = document.querySelector(".container");
// const keys = document.querySelector(".keys");
// const buttons = document.querySelectorAll(".buttons");
// const display = document.querySelector("#display");

// body.appendChild(container);
// container.appendChild(display);
// container.appendChild(keys);
// buttons.forEach(button=>{
//     keys.appendChild(button);
// });
// let i=0;
// let x=0;
// let newString = '';
// const operators = ['+','-','*','/','%'];
// const numbers = ['1','2','3','4','5','6','7','8','9','0'];
// function add(a,b){
//     return a+b;
// }
// function subtract(a,b){
//     return a-b;
// }
// function multiply(a,b){
//     return a*b;
// }
// function divide(a,b){
//     return a/b;
// }
// function percentage(a,b){
//     return (a/100)*b;
// }
// function clear(){
//     display.value="";
// }
// function appendToDisplay(value){
//     display.value+=value;
// }
// function operate(){
//     let result=0;
//     let operator='';
//     let sign='';
//     const string = display.value.trim();
//     if(/[-+*/%]/.test(string[0])){
//         newString =string.slice(1);
//         sign=string[0];
//     }
//     else{
//         newString = string;
//     }
//     for(i=0;i<operators.length;i++){
//         if(newString.includes(operators[i])){  
//             operator=operators[i];
//             break;
//         }
//     }
//     const [firstNum,secondNum] = newString.split(operator);
//     const num1 = parseFloat(sign+firstNum);
//     const num2 = parseFloat(secondNum);
//     switch (operator) {
//         case '+':
//             result = add(num1, num2);
//             break;
//         case '-':
//             result = subtract(num1, num2);
//             break;
//         case '*':
//             result = multiply(num1, num2);
//             break;
//         case '/':
//             result = divide(num1, num2);
//             break;
//         case '%':
//             result = percentage(num1, num2);
//             break;
//         default:
//             result = NaN;
//             break;
//     }
//     display.value=`${result}`;
//     x=1;
// }
// Array.from(buttons).forEach(button=>{
//     button.addEventListener("click",()=>{
//         if(button.textContent=='AC'){
//             clear();
//         }else if(button.textContent=='='){
//             operate();
//         }else if(button.textContent=='.'){
//             if(!(display.value.includes('.'))){
//                 appendToDisplay(button.textContent);
//             }
//         }else if(button.textContent=='⌫'){
//             display.value=display.value.slice(0,-1);
//         }else{
            // if(x==1){
            //     if(numbers.includes(button.textContent)){
            //         clear();
            //     }
            //     appendToDisplay(button.textContent);
            //     x=0;
            // }else{
            //     appendToDisplay(button.textContent);
            // }
//         }
//     });
// });
const display = document.getElementById('display');
let pressed=0;
function appendToDisplay(value) { 
    if((pressed==1)&&(!['+','-','*','/','%'].includes(value))){
        clearDisplay();
        pressed=0;
    }else{
      pressed=0;
    }
    display.value += value;    
}
function clearDisplay() {
  display.value = '';
}
function backSpace(){
    display.value = display.value.slice(0, -1);
}
function operate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
  pressed=1;
}
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
      appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
      appendToDisplay(key);
    } else if (key === '.') {
      appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
      operate();
    } else if (key === 'Backspace' || key === 'Delete') {
      backSpace();
    } else if (key === 'Escape') {
      clearDisplay();
    }
  });