//slide

const imgs = [
  "images/cortes/pic1.jpg",
  "images/cortes/pic2.jpg",
  "images/cortes/pic3.jpg",
  "images/cortes/pic4.jpg",
  "images/cortes/pic5.jpg",
  "images/cortes/pic6.jpg",
  "images/cortes/pic7.jpg",
  "images/cortes/pic8.jpg",
  "images/cortes/pic9.jpg",
  "images/cortes/pic14.jpg",
  "images/cortes/pic15.jpg",
];

const back = document.querySelector(".back");
const next = document.querySelector(".next");
const img = document.querySelector("#imgSelected");
let i = 0;
img.src = imgs[i];

const btn = document.querySelectorAll(".btn");

btn.forEach((button) => {
  button.addEventListener("click", handler);
});

function handler() {
  if (this.textContent === ">") {
    if (i >= imgs.length - 1) {
      i = 0;
    } else {
      i = i + 1;
    }
    img.src = imgs[i];
  } else {
    if (i <= 0) {
      i = imgs.length - 1;
    } else {
      i = i - 1;
    }
    img.src = imgs[i];
  }
}
