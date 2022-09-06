function my_Dictionary() {                       /*defines the key value pairs that constitute this dictionary*/
    var Animal = {
        Species: "Capybara",
        Name: "Frank",
        Mood: "Chill",
        Age: "Timeless"
    };
    delete Animal.Species;                     /*deletes the value associated with Species in the above dictionary*/
    document.getElementById("Dictionary").innerHTML = Animal.Species; /*displays the value for Species above. Since it is deleted beforehand, it displays undefined*/
}
