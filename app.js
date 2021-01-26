const card = document.querySelector(".profile-color");
const container = document.querySelector(".profile-bw");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 1;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 1;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseleave", (e) => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

let imgArr = document.querySelectorAll(".img");
let prevX = 0;
let prevY = 0;
let moveXAmount = 0;
let moveYAmount = 0;

document.addEventListener("mousemove", function (e) {
  mousePos(e);
});

function mousePos(e) {
  moveXAmount = e.pageX - prevX;
  moveYAmount = e.pageY - prevY;

  moveImg(moveXAmount, moveYAmount);

  prevX = e.pageX;
  prevY = e.pageY;
}

function moveImg(xAmount, yAmount) {
  imgArr.forEach(function (img) {
    let movementStrength = 5 + Math.random() * 20;

    img.style.left = img.offsetLeft - xAmount / movementStrength + "px";
    img.style.top = img.offsetTop - yAmount / movementStrength + "px";
  });
}

const lol = document.querySelector(".title-2");

const text = new Blotter.Text("Julien Mousset", {
  family: "'Astloch', serif",
  size: 100,
  fill: "#f7aea8",
});

let material = new Blotter.LiquidDistortMaterial();

material.uniforms.uSpeed.value = 0.3;
material.uniforms.uVolatility.value = 0.02;
material.uniforms.uSeed.value = 0.1;

let blotter = new Blotter(material, { texts: text });

let scope = blotter.forText(text);

scope.appendTo(lol);

const logo = document.querySelector(".logo");
const github = document.querySelector(".github");
const bandcamp = document.querySelector(".bandcamp");
const linkedin = document.querySelector(".linkedin");
const mail = document.querySelector(".mail");

logo.addEventListener("mouseenter", (e) => {
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(2)";
});

logo.addEventListener("mouseleave", (e) => {
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(1)";
});

github.addEventListener("mouseenter", (e) => {
  github.style.transition = "all 0.25s ease";
  github.style.transform = "scale(2)";
});

github.addEventListener("mouseleave", (e) => {
  github.style.transition = "all 0.25s ease";
  github.style.transform = "scale(1)";
});

bandcamp.addEventListener("mouseenter", (e) => {
  bandcamp.style.transition = "all 0.25s ease";
  bandcamp.style.transform = "scale(2)";
});

bandcamp.addEventListener("mouseleave", (e) => {
  bandcamp.style.transition = "all 0.25s ease";
  bandcamp.style.transform = "scale(1)";
});

linkedin.addEventListener("mouseenter", (e) => {
  linkedin.style.transition = "all 0.25s ease";
  linkedin.style.transform = "scale(2)";
});

linkedin.addEventListener("mouseleave", (e) => {
  linkedin.style.transition = "all 0.25s ease";
  linkedin.style.transform = "scale(1)";
});

mail.addEventListener("mouseenter", (e) => {
  mail.style.transition = "all 0.25s ease";
  mail.style.transform = "scale(2)";
});

mail.addEventListener("mouseleave", (e) => {
  mail.style.transition = "all 0.25s ease";
  mail.style.transform = "scale(1)";
});

const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

const cv = document.querySelector(".cv");
const button = document.querySelector("button");

cv.addEventListener("click", (e) => {
  cv.style.transition = "all 0.75s ease";
  cv.style.width = "0%";
  cv.style.opacity = 0;
});

button.addEventListener("click", (e) => {
  cv.style.transition = "all 0.75s ease";
  cv.style.width = "196%";
  cv.style.opacity = 1;
});

const menu = document.querySelector(".menu");

logo.addEventListener("click", (e) => {
  if (menu.classList.contains("open")) {
    menu.style.transition = "all 0.5s ease";
    menu.style.transform = "scale(1)";
    logo.style.transition = "all 0.5s ease";
    logo.style.background = "#f7aea8";
    menu.classList.remove("open");
  } else {
    menu.style.transition = "all 0.75s ease";
    menu.style.transform = "scale(1000)";
    logo.style.transition = "all 0.75s ease";
    logo.style.background = "#1a1a1a";
    menu.classList.add("open");
  }
});

/*const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

logo.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});*/
