const headEl = document.getElementById("headEl"); // id
console.log(headEl);
headEl.style.background = "yellow";
headEl.addEventListener("click", () => {
  console.log("clicked");
});

const eleByCN = document.getElementsByClassName("heading");
console.log(eleByCN);

let a = 0;
while (a < eleByCN.length) {
  eleByCN[a].style.background = "red";
  a++;
}

const eleByTN = document.getElementsByTagName("p");
console.log(eleByTN);

let b = 0;
while (b < eleByTN.length) {
  eleByTN[b].innerText = "text changed";
  b++;
}

const aaa = document.querySelectorAll("p");
console.log(aaa);

const spanEl = document.createElement("span");
spanEl.innerText = "text";
console.log(spanEl);

const body = document.getElementsByTagName("body");
console.log(body);
body[0].appendChild(spanEl);
