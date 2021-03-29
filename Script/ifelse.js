var a = 150;
var b = 10000;
var c = 1500;

if (a > b) {
    console.log("a is big");
} else if (b > c) {
    console.log("b is big");
} else {
    console.log('c is big')
}



age = 15;
permision = "true"

if (age >= 18 && permision) {
    console.log("allowed for ride");
} else {
    console.log("not allowed")
}

age = 62;
permision = "false"

if ((age >= 18 && permision === false) || age >= 60) {
    console.log("ride not allowed");
} else {
    console.log("ride allowed")
}

var x1 = 15 / 5;
var x2 = 15 % 5;
console.log(x1, x2);

// alert("hello");
var s = prompt('what is your name?', 'yamini');
// alert(s);

var all = prompt("Enter your name", "Empire")
alert(all)

var a2 = confirm("yes I love yaamini")
alert(a2)