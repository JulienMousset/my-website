"use strict";

/* -------- SCROLL -------- */
const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

/* -------- MENU -------- */
const screen = window.matchMedia("(max-width: 1280px)");
const logo = document.querySelector(".logo");
const menu = document.querySelector(".menu");
const items = document.querySelector(".items");
const item1 = document.querySelector(".item-1");
const item2 = document.querySelector(".item-2");
const item3 = document.querySelector(".item-3");
const item4 = document.querySelector(".item-4");
const page1 = document.querySelector(".page-1");
const page2 = document.querySelector(".page-2");
const page3 = document.querySelector(".page-3");
const page4 = document.querySelector(".page-4");

/* Animation */
function logoIn() {
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(2)";
}

function logoOut() {
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(1)";
}

function logoClick() {
  if (menu.classList.contains("open")) {
    logo.style.transition = "all 0.5s ease";
    menu.style.transition = "all 0.5s ease";
    items.style.transition = "all 0.5s ease";
    menu.style.transform = "scale(1)";
    logo.style.backgroundColor = "var(--pink)";
    items.style.color = "transparent";
    items.style.opacity = "0";
    items.style.cursor = "default";
    items.style.pointerEvents = "none";
    document.body.style.overflow = "auto";
    menu.classList.remove("open");
    scroller.start();
  } else {
    logo.style.transition = "all 0.75s ease";
    menu.style.transition = "all 0.75s ease";
    items.style.transition = "all 1s ease";
    menu.style.transform = "scale(1000)";
    logo.style.backgroundColor = "var(--black)";
    items.style.color = "var(--black)";
    items.style.opacity = "1";
    items.style.cursor = "pointer";
    items.style.pointerEvents = "all";
    document.body.style.overflow = "hidden";
    menu.classList.add("open");
    scroller.stop();
  }
}

logo.addEventListener("mouseenter", logoIn);
logo.addEventListener("mouseleave", logoOut);
logo.addEventListener("click", logoClick);

/* Items */
function itemClick() {
  items.style.transition = "all 0.5s ease";
  menu.style.transition = "all 0.5s ease";
  menu.style.transform = "scale(1)";
  items.style.color = "transparent";
  items.style.opacity = "0";
  items.style.cursor = "default";
  items.style.pointerEvents = "none";
  document.body.style.overflow = "auto";
  menu.classList.remove("open");
  scroller.start();
}

function logoColor() {
  if (menu.classList.contains("open")) {
    logo.style.backgroundColor = "var(--black)";
  } else {
    logo.style.backgroundColor = "var(--pink)";
  }
}

/* Item1 */
function item1In() {
  item1.style.transition = "all 0.25s ease";
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(2)";
  logo.style.backgroundColor = "var(--white)";
  item1.style.color = "var(--white)";
}

function item1Out() {
  item1.style.transition = "all 0.25s ease";
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(1)";
  item1.style.color = "var(--black)";
}

function item1Click() {
  itemClick();
  scroller.scrollTo(page1);
}

item1.addEventListener("mouseenter", item1In);
item1.addEventListener("mouseleave", () => {
  item1Out();
  logoColor();
});
item1.addEventListener("touchend", () => {
  item1Out();
  logo.style.backgroundColor = "var(--pink)";
});
item1.addEventListener("click", item1Click);
item1.addEventListener("touchend", item1Click);

/* Item2 */
function item2In() {
  item2.style.transition = "all 0.25s ease";
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(2)";
  logo.style.backgroundColor = "var(--white)";
  item2.style.color = "var(--white)";
}

function item2Out() {
  item2.style.transition = "all 0.25s ease";
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(1)";
  item2.style.color = "var(--black)";
}

function item2Click() {
  itemClick();
  if (screen.matches) {
    scroller.scrollTo(page2);
  } else {
    scroller.scrollTo(page2, { offset: "200" });
  }
}

item2.addEventListener("mouseenter", item2In);
item2.addEventListener("mouseleave", () => {
  item2Out();
  logoColor();
});
item2.addEventListener("touchend", () => {
  item2Out();
  logo.style.backgroundColor = "var(--pink)";
});
item2.addEventListener("click", item2Click);
item2.addEventListener("touchend", item2Click);

/* Item3 */
function item3In() {
  item3.style.transition = "all 0.25s ease";
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(2)";
  logo.style.backgroundColor = "var(--white)";
  item3.style.color = "var(--white)";
}

function item3Out() {
  item3.style.transition = "all 0.25s ease";
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(1)";
  item3.style.color = "var(--black)";
}

function item3Click() {
  itemClick();
  if (screen.matches) {
    scroller.scrollTo(page3);
  } else {
    scroller.scrollTo(page3, { offset: "200" });
  }
}

item3.addEventListener("mouseenter", item3In);
item3.addEventListener("mouseleave", () => {
  item3Out();
  logoColor();
});
item3.addEventListener("touchend", () => {
  item3Out();
  logo.style.backgroundColor = "var(--pink)";
});
item3.addEventListener("click", item3Click);
item3.addEventListener("touchend", item3Click);

/* Item4 */
function item4In() {
  item4.style.transition = "all 0.25s ease";
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(2)";
  logo.style.backgroundColor = "var(--white)";
  item4.style.color = "var(--white)";
}

function item4Out() {
  item4.style.transition = "all 0.25s ease";
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(1)";
  item4.style.color = "var(--black)";
}

function item4Click() {
  itemClick();
  if (screen.matches) {
    scroller.scrollTo(page4);
  } else {
    scroller.scrollTo(page4, { offset: "200" });
  }
}

item4.addEventListener("mouseenter", item4In);
item4.addEventListener("mouseleave", () => {
  item4Out();
  logoColor();
});
item4.addEventListener("touchend", () => {
  item4Out();
  logo.style.backgroundColor = "var(--pink)";
});
item4.addEventListener("click", item4Click);
item4.addEventListener("touchend", item4Click);

/* -------- PROFILE PICTURE -------- */
const container = document.querySelector(".profile-bw");
const card = document.querySelector(".profile-color");

function pictureIn() {
  container.style.transition = "all 0.25s ease";
  container.style.opacity = "0";
}

function pictureOut() {
  container.style.opacity = "1";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
}

function pictureMove(e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 1;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 1;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
}

container.addEventListener("mouseenter", pictureIn);
container.addEventListener("touchstart", pictureOut);
container.addEventListener("mousemove", pictureMove);
container.addEventListener("touchmove", (e) => {
  pictureMove(e);
  e.preventDefault();
});
container.addEventListener("mouseleave", pictureOut);
container.addEventListener("touchend", pictureOut);

/* -------- LINKS -------- */
const school = document.querySelector(".school");
const email = document.querySelector(".e-mail");

/* School */
function schoolIn() {
  school.style.transition = "all 0.25s ease";
  school.style.backgroundColor = "var(--white)";
  school.style.color = "var(--black)";
}

function schoolOut() {
  school.style.transition = "all 0.25s ease";
  school.style.backgroundColor = "var(--black)";
  school.style.color = "var(--white)";
}

school.addEventListener("mouseenter", schoolIn);
school.addEventListener("mouseleave", schoolOut);
school.addEventListener("click", schoolOut);

/* E-mail */
function emailIn() {
  email.style.transition = "all 0.25s ease";
  email.style.backgroundColor = "var(--white)";
  email.style.color = "var(--black)";
}

function emailOut() {
  email.style.transition = "all 0.25s ease";
  email.style.backgroundColor = "var(--black)";
  email.style.color = "var(--white)";
}

email.addEventListener("mouseenter", emailIn);
email.addEventListener("mouseleave", emailOut);
email.addEventListener("click", emailOut);

/* -------- RESUME -------- */
const button = document.querySelector("button");
const resume = document.querySelector(".resume");
const contact = document.querySelector(".contact");
const handshake = document.querySelector(".handshake");
const letter = document.querySelector(".letter");

/* Button */
function buttonIn() {
  button.style.transition = "all 0.25s ease";
  button.style.border = "5px solid var(--black)";
  button.style.backgroundColor = "var(--white)";
  button.style.color = "var(--black)";
}

function buttonOut() {
  button.style.transition = "all 0.25s ease";
  button.style.border = "5px solid var(--white)";
  button.style.backgroundColor = "var(--black)";
  button.style.color = "var(--white)";
}

function buttonClick() {
  resume.style.transition = "all 0.75s ease";
  if (window.innerWidth > window.innerHeight) {
    resume.style.height = "150vh";
    resume.style.width = null;
  } else {
    resume.style.width = "100%";
    resume.style.height = null;
    page4.style.height = "100vh";
  }
  resume.style.transform = "translate(0%)";
  contact.style.opacity = "0";
  email.style.opacity = "0";
  button.style.opacity = "0";
  github.style.opacity = "0";
  bandcamp.style.opacity = "0";
  linkedin.style.opacity = "0";
  mail.style.opacity = "0";
  handshake.style.opacity = "0";
  letter.style.opacity = "0";
  scroller.scrollTo(page4);
}

button.addEventListener("mouseenter", buttonIn);
button.addEventListener("touchstart", buttonIn);
button.addEventListener("mouseleave", buttonOut);
button.addEventListener("click", buttonOut);
button.addEventListener("click", buttonClick);
button.addEventListener("touchcancel", buttonClick);

/* Resume */
function resumeOut() {
  resume.style.transition = "all 0.75s ease";
  if (window.innerWidth > window.innerHeight) {
    resume.style.height = "0vh";
  } else {
    resume.style.width = "0%";
    page4.style.height = "150vh";
  }
  resume.style.transform = "translate(-250%)";
  contact.style.opacity = "1";
  email.style.opacity = "1";
  button.style.opacity = "1";
  github.style.opacity = "1";
  bandcamp.style.opacity = "1";
  linkedin.style.opacity = "1";
  mail.style.opacity = "1";
  handshake.style.opacity = "1";
  letter.style.opacity = "1";
}

function resumeClick() {
  resumeOut();
  scroller.scrollTo("bottom");
}

resume.addEventListener("mouseleave", resumeOut);
resume.addEventListener("click", resumeClick);
resume.addEventListener("touchcancel", resumeClick);

/* -------- SOCIALS -------- */
const mail = document.querySelector(".mail");
const github = document.querySelector(".github");
const bandcamp = document.querySelector(".bandcamp");
const linkedin = document.querySelector(".linkedin");

/* Github */
function githubIn() {
  github.style.transition = "all 0.25s ease";
  github.style.transform = "scale(2)";
}

function githubOut() {
  github.style.transition = "all 0.25s ease";
  github.style.transform = "scale(1)";
}

github.addEventListener("mouseenter", githubIn);
github.addEventListener("mouseleave", githubOut);
github.addEventListener("click", githubOut);

/* Bandcamp */
function bandcampIn() {
  bandcamp.style.transition = "all 0.25s ease";
  bandcamp.style.transform = "scale(2)";
}

function bandcampOut() {
  bandcamp.style.transition = "all 0.25s ease";
  bandcamp.style.transform = "scale(1)";
}

bandcamp.addEventListener("mouseenter", bandcampIn);
bandcamp.addEventListener("mouseleave", bandcampOut);
bandcamp.addEventListener("click", bandcampOut);

/* Linkedin */
function linkedinIn() {
  linkedin.style.transition = "all 0.25s ease";
  linkedin.style.transform = "scale(2)";
}

function linkedinOut() {
  linkedin.style.transition = "all 0.25s ease";
  linkedin.style.transform = "scale(1)";
}

linkedin.addEventListener("mouseenter", linkedinIn);
linkedin.addEventListener("mouseleave", linkedinOut);
linkedin.addEventListener("click", linkedinOut);

/* Mail */
function mailIn() {
  mail.style.transition = "all 0.25s ease";
  mail.style.transform = "scale(2)";
}

function mailOut() {
  mail.style.transition = "all 0.25s ease";
  mail.style.transform = "scale(1)";
}

mail.addEventListener("mouseenter", mailIn);
mail.addEventListener("mouseleave", mailOut);
mail.addEventListener("click", mailOut);

/* -------- ORIENTATION CHANGE -------- */
window.addEventListener("orientationchange", () => {
  resumeOut();
  scroller.scrollTo("top");
});
