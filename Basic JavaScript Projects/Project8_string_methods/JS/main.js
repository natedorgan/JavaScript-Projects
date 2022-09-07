function full_Sentence() {                                                      /* concatenates the variables into a single string */
    var part_1 = "This is ";
    var part_2 = "a ";
    var part_3 = "sentence.";
    var whole= part_1.concat(part_2, part_3);
    document.getElementById("Concat").innerHTML = whole;
}

function slice_Method() {                                                         /*displays characters 27-33 of the var Sentence, so "Johnny"*/
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function precision_Method() {                                                     /*displays var X to the 10th character*/
    var X = 12938.3012987658972847563;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function string_Method() {                                                        /*displays var X as a string instead of as a number*/
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

