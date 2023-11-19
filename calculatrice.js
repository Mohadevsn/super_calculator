const screen = document.querySelector('#screen');
let number ;
let result = 0;
let finalResult ;

screen.value = "";

function buttonClick(number){
    screen.value += number ;
};

function operatorSelected(x){
    number = parseFloat(screen.value) ;
    operator = x ;
    screen.value = "";
    console.log(number);
    console.log(operator)

    switch (operator) {
        case "+":
            result += number;
            console.log(result);
            break;
        
        case "-":
            result -= number;
            console.log(result);
            break;
        case "*":
            result *= number;
            console.log(result);
            break;
        case "/":
            result /= number;
            console.log(result);
            break;
        case "=":
            calculate();
            break;
        default:
            break;
    }
};
function clearScreen(){
    screen.value = "";
    number = 0 ;
    result = 0;
}

function calculate(){
   

    
};



