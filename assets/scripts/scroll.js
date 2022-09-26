const links = document.querySelectorAll(".link");
links.forEach((link) => link.addEventListener("click", handlerSlide));

function handlerSlide(link) {
  link.preventDefault();
  let href = this.getAttribute("href");
  let top = document.querySelector(href).offsetTop - 40;

  scroll({
    top,
    behavior: "smooth",
  });
}

//element hiden
const scrollElements = document.querySelectorAll(".elements");
let value = false;

window.addEventListener("scroll", () => {
  timer(handleScroll(), 200);
});
const handleScroll = () => {
  scrollElements.forEach((element) => {
    if (elementInView(element, 1)) {
      displayScrollElement(element);
    } else if (elementOutofView(element)) {
      hideScrollElement(element);
    }
  });
};
const elementInView = (element, offset = 0) => {
  let elementTop = element.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / offset
  );
};

const elementOutofView = (element) => {
  let elementTop = element.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const timer = (funct, time) => {
  if (timer) return;
  value = true;

  setTimeout(() => {
    funct();
    value = false;
  }, time);
};
