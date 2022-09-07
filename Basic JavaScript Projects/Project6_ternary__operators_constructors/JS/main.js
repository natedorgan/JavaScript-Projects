function Vote_Function() {                                                       /*function utilizing a ternary operation using input from the browser*/
    var Age, Can_vote;                                                           /* defining the variables Age and Can_vote*/
    Age = document.getElementById("Age").value;                                  /* gets the value of Age from the browser input*/                              
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";            /* conditional operation defining Can_vote as "You are too young" if the value of Age is <18 or "You are old enough" if >18*/
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";          /* displays string composed of the value of Can_vote with a space and "to vote" added to the end*/
}

function Vehicle(Make, Model, Year, Color) {                                     /*function that defines the class Vehicle, the information it needs, and the order that information will be received in the parentheses*/
    this.Vehicle_Make = Make;                                                    /*defines Make as an instance of Vehicle's Vehicle_Make. This means the info in the Make section for a given instance can be called by Instance.Vehicle_Make, like Erik.Vehicle_Make below.*/
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");                           /*this section creates new instances of Vehicle for Jack, Emily, and Erik*/
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {                                                          /*this function displays the strings below along with the values called to create a single string that communicates the given info to the user, in this case Erik's vehicle info*/
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function info(Model, Make) {
    document.write(Model + " is manufactured by " + Make+"<br>");
}
    function first(Model, Make) {
        document.write("What company makes the " + Model + "?" + "<br>")
        info(Model, Make);
    }
first("Viper", "Dodge");
first("Trail Hawk", "Jeep");
first("Pinto", "Ford");

