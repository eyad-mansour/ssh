console.log("hello world");
console.log("helllo i am hereee");

// print
// cout
//write line

// pop up boxs

// alert box
alert("hello this is alert");

// confirm box
var userAnswer = confirm("do you love js?");
console.log(userAnswer);

// prompt box
var userName = prompt("what is your name?");
console.log("user name is ", userName);
/////////////////////////////

// conditions

// if (userAnswer) {
//   console.log("we love js too");
// } else {
//   console.log("too bad ,you lost");
// }

// terrenry if:
userAnswer ? console.log("we love js too") : console.log("too bad you lost");

// arrays
var dayesOfWeek = ["Sunday", "Monday"];
console.log(typeof dayesOfWeek);
console.log(dayesOfWeek[0]);

// push(), unshift().

dayesOfWeek[2] = "Tusday";
console.log(dayesOfWeek[2]);

console.log(dayesOfWeek.length);
console.log(dayesOfWeek);

for (var i = 0; i < dayesOfWeek.length; i++) {
  if (dayesOfWeek[i] === "Friday") {
    console.log("we found Friday");
    i = dayesOfWeek.length;
    // break;
  }
}

// function

function welcomeName(name) {
  console.log("hello" + name);
}

var userNmae = prompt("what is your name?");

welcomeName(userName);
welcomeName("eyad");

welcomeName(1);
