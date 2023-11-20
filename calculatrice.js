const screen = document.querySelector('#screen');
let number1, number2 ;
let result = 0;
let finalResult ;
let globalOperator
let i = 0;
screen.value = "";


function deleteNumber(){
    
    if(i== 0){
        number1 = parseFloat(screen.value);
        number1 /= 10 ;
        number1 = parseInt(number1);
        console.log(number1);
        screen.value = number1
    }
    else if(i > 0){
        number2 = parseFloat(screen.value);
        number2 /= 10 ;
        number2 = parseInt(number2);
        console.log(number2);
        screen.value = number2
    }
};

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
            result = number1 + number2;
            console.log(result);
            break;
        
        case "-":
            result = number1 - number2;
            console.log(result);

            break;
        case "*":
            result = number1 * number2;
            console.log(result);

            break;
        case "/":
            result = number1 / number2;
            console.log(result);

            break;
        default:
            break;
    }
    screen.value += result;
    number1 = result
    console.log(result)
    
};



