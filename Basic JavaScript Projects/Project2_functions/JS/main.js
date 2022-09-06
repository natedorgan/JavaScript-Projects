function My_First_Function () {
    var str = "This is the button text!";                         /*defining var str */
    var second= "This is a second variable!";                     /*defining var second*/
    document.getElementById("Button_Text").innerHTML = str;       /*changes the button text to the text in str when the function is called*/
}

function MyFunction () {
    var sentence = "I am learning";                               /*defining var sentence*/
    sentence += " a lot from this book!";                         /*concatenated continuation of var sentence definition*/
    document.getElementById("Concatenate").innerHTML = sentence;  /*changes text in the p element to the text in sentence when the function is called*/
}