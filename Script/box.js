var age = prompt("Enter Your Age")
if (age < 18) {
    var par = confirm("I have parents permission");
    if (par == true) {
        alert("You are allowed to ride")
    } else {
        alert("You are not allowed to ride")
    }
} else {
    alert("You are allowed to ride")
}