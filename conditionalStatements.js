const age = 17;
const isProUser = true;
if (age > 18) {
  console.log("user is of legel age");
} else if (isProUser) {
  console.log("user is pro");
} else {
  console.log("you are under age");
}

const color = "red";
// switch..case
switch (color) {
  case "red":
    console.log("color is red");
    break;

  case "green":
    console.log("color is green");
    break;

  case "blue":
    console.log("color is blue");
    break;

  default:
    console.log("color is black");
    break;
}
