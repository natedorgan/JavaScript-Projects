var name = "Bob";
function Name_is() {
    document.getElementById("Name_is").innerHTML= "My name is " + name;
}
function Name_isnt() {
    document.getElementById("Name_isnt").innerHTML= "Others cannot be named " + name;
}

function get_Date() {
    if (new Date().getHours() < 12) {
        document.getElementById("Greeting").innerHTML= "Good morning!";
    } else {
        document.getElementById("Greeting").innerHTML= "Good day!";
    }
}

function Time_function() {
    var Time= new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

function Wrong() {
    if (Age <= 10) {
        document.write("Error")
    }
    console.log(Age);
}
Wrong();
