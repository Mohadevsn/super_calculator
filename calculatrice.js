const screen = document.querySelector('#screen');
let number1, number2 ;
let result = 0;
let finalResult ;
let globalOperator
let i = 0;
screen.value = "";

function buttonClick(number){
    screen.value += number ;
    if(i== 0){
        number1 = parseFloat(screen.value) ;
    }
    else if(i > 0){
        number2 = parseFloat(screen.value)
    }

};

function operatorSelected(x){
    globalOperator = x ;
    screen.value = "";
    console.log(globalOperator)
    result = number1;
    i++;
};
function clearScreen(){
    screen.value = "";
    number1 = 0 ;
    number2 = 0 ;
    result = 0;
    i = 0;
}

function calculate(){
    screen.value = ""
    switch (globalOperator) {
        case "+":
            result += number2;
            console.log(result);
            i=0;
            break;
        
        case "-":
            result -= number2;
            console.log(result);
            i=0;

            break;
        case "*":
            result *= number2;
            console.log(result);
            i=0;

            break;
        case "/":
            result /= number2;
            console.log(result);
            i=0;

            break;
        default:
            break;
    }
    screen.value += result;
    result = screen.value
    
};



