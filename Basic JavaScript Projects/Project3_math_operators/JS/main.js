function addition_Function() {               /*displays result of 2+2*/
    var addition = 2 + 2;                        
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {            /*displays result of 5-2*/
    var Subtraction= 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() {                   /*displays result of 6 x 8*/
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 X 8 = " + simple_Math;
}

function division() {                          /*displays result of division_Math (48/6)*/
    var division_Math = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + division_Math;
}

function more_Math() {                          /*demonstration of multiple operations being carried out in the same function*/
    var more_Math = (1+2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + more_Math;
}

function modulus_Operator() {                   /*displays remainder of 25 / 6*/
    var modulus_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus_Math;
}

function negation_Operator() {                   /*displays negative version of var x*/
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}
 
function increment_Operator() {                  /*displays X+1*/
    var X = 5;
    X++;
    document.write(X);
}

function decrement_Operator() {                    /*displays y-1*/
    var y = 5.25;
    y--;
    document.write(y);
}

window.alert(Math.random() * 100);                  /*popup window with random number between 0 and 100*/
