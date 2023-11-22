// The constants, variables and initialization
const screen = document.querySelector('#screen');
let number1, number2 ;
let result = 0;
let finalResult ;
let globalOperator
let i = 0;
screen.value = "";

//the delete function
function deleteNumber(){
    // if it is the first number
    if(i== 0){
        number1 = parseFloat(screen.value);
        number1 /= 10 ;
        number1 = parseInt(number1);
        console.log(number1);
        screen.value = number1
    }
    // else if it is not the first number
    else if(i > 0){
        number2 = parseFloat(screen.value);
        number2 /= 10 ;
        number2 = parseInt(number2);
        console.log(number2);
        screen.value = number2
    }
};

// this function get the number clicked 
function buttonClick(number){
    // line 33 is for concatenation of the screen
    screen.value += number ;
    if(i == 0){
        // we know that the number typed is a string we parse it to float with parseFloat function
        number1 = parseFloat(screen.value) ;
    }
    else if(i > 0){
        number2 = parseFloat(screen.value)
    }

};
// this function get the operator that the user selected 
function operatorSelected(x){
    // for the accessibility we use global variable 
    globalOperator = x ;
    screen.value = "";
    console.log(globalOperator) // this is for test in the console
    i++;
};

// this function clean the screen and return all the variable to zero
function clearScreen(){
    screen.value = "";
    number1 = 0 ;
    number2 = 0 ;
    result = 0;
    i = 0;
}


// this function make all the final operation and show the result to the screen
function calculate(){
    // line 64 clear the screen to welcome the result
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
    screen.value += result; // the concatenation of the result on screen
    number1 = result // this line give us the possibility to use last result for other operation
    console.log(result)
    
};



