document.write (typeof "word");                                       /* displays string as "word" is a string*/

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;                  /*displays NaN for not a number*/
}

function my_Function1() {
    document.getElementById("Test").innerHTML = isNaN('string');      /*displays true as 'string' is not a number*/
}

function my_Function2() {
    document.getElementById("Test").innerHTML = isNaN('7');           /*displays false as 7 is a number*/
}

function my_Function3() {
    document.getElementById("Test").innerHTML = (2E310);              /*displays infinity*/
}

function my_Function4() {
    document.getElementById("Test").innerHTML = (-3E310);             /*displays negative infinity*/
}

function my_Function5() {
    document.getElementById("Test").innerHTML = (10>2);              /*boolean test to show true*/
}

function my_Function6() {
    document.getElementById("Test").innerHTML = (2>10);               /*boolean test to show false*/
}

function my_Function7() {
    document.getElementById("Test").innerHTML = (10==11);            /*tests is 10 is equal to 11*/
}

function my_Function8() {
    document.getElementById("Test").innerHTML = (10==10);            /*tests if 10 is equal to 10*/
}

function my_Function9() {
    x = 5;
    y = 5;
    document.getElementById("Test").innerHTML = (x === y);          /*tests if x and y have the same value and data type*/
}

function my_Function10() {
    q = 5;
    w = "potato";
    document.getElementById("Test").innerHTML = (q === w);          
}

function my_Function11() {
    e= 5;
    r = "five";
    document.getElementById("Test").innerHTML = (e === r);
}

function my_Function12() {
    t = 10;
    u = 11;
    document.getElementById("Test").innerHTML = (t === u);
}

function my_Function13() {
    document.getElementById("Test").innerHTML = (10>1 && 3>2);        /*tests if both 10>1 and 3>2 are true*/
}

function my_Function14() {
    document.getElementById("Test").innerHTML = (10>1 && 3>7);
}

function my_Function15() {
    document.getElementById("Test").innerHTML = (10>1 || 3>7);        /*tests if either 10>1 or 3>7 is true*/
}

function my_Function16() {
    document.getElementById("Test").innerHTML = (3>7 || 10>11);
}

function my_Function17() {
    document.getElementById("Test").innerHTML = !(5>10);             /*tests if 5>10 is false*/
}

function my_Function18() {
    document.getElementById("Test").innerHTML = !(20>10);            /*tests is 20>10 is false*/
}
