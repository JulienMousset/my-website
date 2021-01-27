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
  size: 120,
  fill: "#f7aea8",
  fontWeight: 400,
  paddingLeft: 100,
  paddingRight: 100,
});

const material = new Blotter.LiquidDistortMaterial();

material.uniforms.uSpeed.value = 0.3;
material.uniforms.uVolatility.value = 0.02;
material.uniforms.uSeed.value = 0.1;

const blotter = new Blotter(material, { texts: text });

const scope = blotter.forText(text);

scope.appendTo(lol);

const logo = document.querySelector(".logo");
const github = document.querySelector(".github");
const bandcamp = document.querySelector(".bandcamp");
const linkedin = document.querySelector(".linkedin");
const mail = document.querySelector(".mail");
const email = document.querySelector(".e-mail");
const link = document.querySelector(".link");

link.addEventListener("mouseenter", (e) => {
  link.style.transition = "all 0.25s ease";
  link.style.color = "#f4f4f4";
  link.style.backgroundColor = "#1a1a1a";
});

link.addEventListener("mouseleave", (e) => {
  link.style.transition = "all 0.25s ease";
  link.style.color = "#1a1a1a";
  link.style.backgroundColor = "#f4f4f4";
});

email.addEventListener("mouseenter", (e) => {
  email.style.transition = "all 0.25s ease";
  email.style.color = "#1a1a1a";
  email.style.backgroundColor = "#f4f4f4";
});

email.addEventListener("mouseleave", (e) => {
  email.style.transition = "all 0.25s ease";
  email.style.color = "#f4f4f4";
  email.style.backgroundColor = "#1a1a1a";
});

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

const cv = document.querySelector(".cv");
const button = document.querySelector("button");

cv.addEventListener("mouseleave", (e) => {
  cv.style.transition = "all 0.75s ease";
  cv.style.width = "0%";
  cv.style.opacity = 0;
  cv.style.transform = "translate(-250%)";
});

cv.addEventListener("click", (e) => {
  cv.style.transition = "all 0.75s ease";
  cv.style.width = "0%";
  cv.style.opacity = 0;
  cv.style.transform = "translate(-250%)";
  scroller.scrollTo("bottom");
});

button.addEventListener("click", (e) => {
  cv.style.transition = "all 0.75s ease";
  cv.style.width = "100%";
  cv.style.opacity = 1;
  cv.style.transform = "translate(0%)";
  scroller.scrollTo(page4);
});

button.addEventListener("mouseenter", (e) => {
  button.style.transition = "all 0.25s ease";
  button.style.color = "#1a1a1a";
  button.style.backgroundColor = "#f4f4f4";
  button.style.border = "5px solid #1a1a1a";
});

button.addEventListener("mouseleave", (e) => {
  button.style.transition = "all 0.25s ease";
  button.style.color = "#f4f4f4";
  button.style.backgroundColor = "#1a1a1a";
  button.style.border = "5px solid #f4f4f4";
});

const menu = document.querySelector(".menu");
const items = document.querySelector(".items");

logo.addEventListener("click", (e) => {
  if (menu.classList.contains("open")) {
    menu.style.transition = "all 0.5s ease";
    menu.style.transform = "scale(1)";
    logo.style.transition = "all 0.5s ease";
    items.style.transition = "all 0.5s ease";
    logo.style.backgroundColor = "#f7aea8";
    items.style.color = "transparent";
    items.style.opacity = "0";
    items.style.cursor = "default";
    items.style.pointerEvents = "none";
    menu.classList.remove("open");
    scroller.start();
  } else {
    menu.style.transition = "all 0.75s ease";
    menu.style.transform = "scale(1000)";
    logo.style.transition = "all 0.75s ease";
    items.style.transition = "all 1s ease";
    logo.style.backgroundColor = "#1a1a1a";
    items.style.opacity = "1";
    items.style.color = "#1a1a1a";
    items.style.cursor = "pointer";
    items.style.pointerEvents = "all";
    cv.style.transition = "all 0.75s ease";
    cv.style.width = "0%";
    cv.style.opacity = 0;
    menu.classList.add("open");
    scroller.stop();
  }
});

const item1 = document.querySelector(".item-1");
const item2 = document.querySelector(".item-2");
const item3 = document.querySelector(".item-3");
const item4 = document.querySelector(".item-4");

const page1 = document.querySelector(".page-1");
const page2 = document.querySelector(".page-2");
const page3 = document.querySelector(".page-3");
const page4 = document.querySelector(".page-4");

item1.addEventListener("mouseenter", (e) => {
  logo.style.transition = "all 0.25s ease";
  item1.style.transition = "all 0.25s ease";
  item1.style.color = "#f4f4f4";
  logo.style.backgroundColor = "#f4f4f4";
});

item1.addEventListener("mouseleave", (e) => {
  logo.style.transition = "all 0.25s ease";
  item1.style.transition = "all 0.25s ease";
  item1.style.color = "#1a1a1a";
  if (menu.classList.contains("open")) {
    logo.style.backgroundColor = "#1a1a1a";
  } else {
    logo.style.backgroundColor = "#f7aea8";
  }
});

item2.addEventListener("mouseenter", (e) => {
  logo.style.transition = "all 0.25s ease";
  item2.style.transition = "all 0.25s ease";
  item2.style.color = "#f4f4f4";
  logo.style.backgroundColor = "#f4f4f4";
});

item2.addEventListener("mouseleave", (e) => {
  logo.style.transition = "all 0.25s ease";
  item2.style.transition = "all 0.25s ease";
  item2.style.color = "#1a1a1a";
  if (menu.classList.contains("open")) {
    logo.style.backgroundColor = "#1a1a1a";
  } else {
    logo.style.backgroundColor = "#f7aea8";
  }
});

item3.addEventListener("mouseenter", (e) => {
  logo.style.transition = "all 0.25s ease";
  item3.style.transition = "all 0.25s ease";
  item3.style.color = "#f4f4f4";
  logo.style.backgroundColor = "#f4f4f4";
});

item3.addEventListener("mouseleave", (e) => {
  logo.style.transition = "all 0.25s ease";
  item3.style.transition = "all 0.25s ease";
  item3.style.color = "#1a1a1a";
  if (menu.classList.contains("open")) {
    logo.style.backgroundColor = "#1a1a1a";
  } else {
    logo.style.backgroundColor = "#f7aea8";
  }
});

item4.addEventListener("mouseenter", (e) => {
  logo.style.transition = "all 0.25s ease";
  item4.style.transition = "all 0.25s ease";
  item4.style.color = "#f4f4f4";
  logo.style.backgroundColor = "#f4f4f4";
});

item4.addEventListener("mouseleave", (e) => {
  logo.style.transition = "all 0.25s ease";
  item4.style.transition = "all 0.25s ease";
  item4.style.color = "#1a1a1a";
  if (menu.classList.contains("open")) {
    logo.style.backgroundColor = "#1a1a1a";
  } else {
    logo.style.backgroundColor = "#f7aea8";
  }
});

item1.addEventListener("click", (e) => {
  menu.style.transition = "all 0.5s ease";
  menu.style.transform = "scale(1)";
  logo.style.transition = "all 0.5s ease";
  items.style.transition = "all 0.5s ease";
  logo.style.background = "#f7aea8";
  logo.style.backgroundColor = "#f7aea8";
  menu.style.backgroundColor = "#f7aea8";
  items.style.color = "transparent";
  items.style.opacity = "0";
  items.style.cursor = "default";
  items.style.pointerEvents = "none";
  menu.classList.remove("open");
  scroller.start();
  scroller.scrollTo(page1);
});

item2.addEventListener("click", (e) => {
  menu.style.transition = "all 0.5s ease";
  menu.style.transform = "scale(1)";
  logo.style.transition = "all 0.5s ease";
  items.style.transition = "all 0.5s ease";
  logo.style.background = "#f7aea8";
  logo.style.backgroundColor = "#f7aea8";
  menu.style.backgroundColor = "#f7aea8";
  items.style.color = "transparent";
  items.style.opacity = "0";
  items.style.cursor = "default";
  items.style.pointerEvents = "none";
  menu.classList.remove("open");
  scroller.start();
  scroller.scrollTo(page2, { offset: "200" });
});

item3.addEventListener("click", (e) => {
  menu.style.transition = "all 0.5s ease";
  menu.style.transform = "scale(1)";
  logo.style.transition = "all 0.5s ease";
  items.style.transition = "all 0.5s ease";
  logo.style.background = "#f7aea8";
  logo.style.backgroundColor = "#f7aea8";
  menu.style.backgroundColor = "#f7aea8";
  items.style.color = "transparent";
  items.style.opacity = "0";
  items.style.cursor = "default";
  items.style.pointerEvents = "none";
  menu.classList.remove("open");
  scroller.start();
  scroller.scrollTo(page3, { offset: "200" });
});

item4.addEventListener("click", (e) => {
  menu.style.transition = "all 0.5s ease";
  menu.style.transform = "scale(1)";
  logo.style.transition = "all 0.5s ease";
  items.style.transition = "all 0.5s ease";
  logo.style.background = "#f7aea8";
  logo.style.backgroundColor = "#f7aea8";
  menu.style.backgroundColor = "#f7aea8";
  items.style.color = "transparent";
  items.style.opacity = "0";
  items.style.cursor = "default";
  items.style.pointerEvents = "none";
  menu.classList.remove("open");
  scroller.start();
  scroller.scrollTo(page4, { offset: "200" });
});

const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});
