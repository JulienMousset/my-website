const logo = document.querySelector(".logo");
const menu = document.querySelector(".menu");
const items = document.querySelector(".items");
const item1 = document.querySelector(".item-1");
const item2 = document.querySelector(".item-2");
const item3 = document.querySelector(".item-3");
const item4 = document.querySelector(".item-4");
const title = document.querySelector(".title-2");
const container = document.querySelector(".profile-bw");
const card = document.querySelector(".profile-color");
const page1 = document.querySelector(".page-1");
const page2 = document.querySelector(".page-2");
const link = document.querySelector(".link");
const page3 = document.querySelector(".page-3");
const page4 = document.querySelector(".page-4");
const email = document.querySelector(".e-mail");
const button = document.querySelector("button");
const cv = document.querySelector(".cv");
const github = document.querySelector(".github");
const bandcamp = document.querySelector(".bandcamp");
const linkedin = document.querySelector(".linkedin");
const mail = document.querySelector(".mail");
const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

logo.addEventListener("mouseenter", () => {
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(2)";
});

logo.addEventListener("mouseleave", () => {
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(1)";
});

logo.addEventListener("touchend", () => {
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(1)";
});

logo.addEventListener("click", () => {
  if (menu.classList.contains("open")) {
    logo.style.transition = "all 0.5s ease";
    menu.style.transition = "all 0.5s ease";
    items.style.transition = "all 0.5s ease";
    menu.style.transform = "scale(1)";
    logo.style.backgroundColor = "#f7aea8";
    items.style.color = "transparent";
    items.style.opacity = "0";
    items.style.cursor = "default";
    items.style.pointerEvents = "none";
    menu.classList.remove("open");
    scroller.start();
  } else {
    logo.style.transition = "all 0.75s ease";
    menu.style.transition = "all 0.75s ease";
    items.style.transition = "all 1s ease";
    menu.style.transform = "scale(1000)";
    logo.style.backgroundColor = "#1a1a1a";
    items.style.color = "#1a1a1a";
    items.style.opacity = "1";
    items.style.cursor = "pointer";
    items.style.pointerEvents = "all";
    menu.classList.add("open");
    scroller.stop();
  }
});

logo.addEventListener("touchcancel", () => {
  if (menu.classList.contains("open")) {
    logo.style.transition = "all 0.5s ease";
    menu.style.transition = "all 0.5s ease";
    items.style.transition = "all 0.5s ease";
    menu.style.transform = "scale(1)";
    logo.style.backgroundColor = "#f7aea8";
    items.style.color = "transparent";
    items.style.opacity = "0";
    items.style.cursor = "default";
    items.style.pointerEvents = "none";
    menu.classList.remove("open");
    scroller.start();
  } else {
    logo.style.transition = "all 0.75s ease";
    menu.style.transition = "all 0.75s ease";
    items.style.transition = "all 1s ease";
    menu.style.transform = "scale(1000)";
    logo.style.backgroundColor = "#1a1a1a";
    items.style.color = "#1a1a1a";
    items.style.opacity = "1";
    items.style.cursor = "pointer";
    items.style.pointerEvents = "all";
    menu.classList.add("open");
    scroller.stop();
  }
});

item1.addEventListener("mouseenter", () => {
  item1.style.transition = "all 0.25s ease";
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(2)";
  logo.style.backgroundColor = "#f4f4f4";
  item1.style.color = "#f4f4f4";
});

item1.addEventListener("mouseleave", () => {
  item1.style.transition = "all 0.25s ease";
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(1)";
  item1.style.color = "#1a1a1a";
  if (menu.classList.contains("open")) {
    logo.style.backgroundColor = "#1a1a1a";
  } else {
    logo.style.backgroundColor = "#f7aea8";
  }
});

item1.addEventListener("touchend", () => {
  item1.style.transition = "all 0.25s ease";
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(1)";
  item1.style.color = "#1a1a1a";
  logo.style.backgroundColor = "#f7aea8";
});

item1.addEventListener("click", () => {
  items.style.transition = "all 0.5s ease";
  menu.style.transition = "all 0.5s ease";
  menu.style.transform = "scale(1)";
  items.style.color = "transparent";
  items.style.opacity = "0";
  items.style.cursor = "default";
  items.style.pointerEvents = "none";
  menu.classList.remove("open");
  scroller.start();
  scroller.scrollTo(page1);
});

item1.addEventListener("touchend", () => {
  console.log("hello");
  items.style.transition = "all 0.5s ease";
  menu.style.transition = "all 0.5s ease";
  menu.style.transform = "scale(1)";
  items.style.color = "transparent";
  items.style.opacity = "0";
  items.style.cursor = "default";
  items.style.pointerEvents = "none";
  menu.classList.remove("open");
  scroller.start();
  scroller.scrollTo(page1);
});

item2.addEventListener("mouseenter", () => {
  item2.style.transition = "all 0.25s ease";
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(2)";
  logo.style.backgroundColor = "#f4f4f4";
  item2.style.color = "#f4f4f4";
});

item2.addEventListener("mouseleave", () => {
  item2.style.transition = "all 0.25s ease";
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(1)";
  item2.style.color = "#1a1a1a";
  if (menu.classList.contains("open")) {
    logo.style.backgroundColor = "#1a1a1a";
  } else {
    logo.style.backgroundColor = "#f7aea8";
  }
});

item2.addEventListener("touchend", () => {
  item2.style.transition = "all 0.25s ease";
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(1)";
  item2.style.color = "#1a1a1a";
  logo.style.backgroundColor = "#f7aea8";
});

item2.addEventListener("click", () => {
  items.style.transition = "all 0.5s ease";
  menu.style.transition = "all 0.5s ease";
  menu.style.transform = "scale(1)";
  items.style.color = "transparent";
  items.style.opacity = "0";
  items.style.cursor = "default";
  items.style.pointerEvents = "none";
  menu.classList.remove("open");
  scroller.start();
  scroller.scrollTo(page2, { offset: "200" });
});

item2.addEventListener("touchend", () => {
  items.style.transition = "all 0.5s ease";
  menu.style.transition = "all 0.5s ease";
  menu.style.transform = "scale(1)";
  items.style.color = "transparent";
  items.style.opacity = "0";
  items.style.cursor = "default";
  items.style.pointerEvents = "none";
  menu.classList.remove("open");
  scroller.start();
  scroller.scrollTo(page2, { offset: "200" });
});

item3.addEventListener("mouseenter", () => {
  item3.style.transition = "all 0.25s ease";
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(2)";
  logo.style.backgroundColor = "#f4f4f4";
  item3.style.color = "#f4f4f4";
});

item3.addEventListener("mouseleave", () => {
  item3.style.transition = "all 0.25s ease";
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(1)";
  item3.style.color = "#1a1a1a";
  if (menu.classList.contains("open")) {
    logo.style.backgroundColor = "#1a1a1a";
  } else {
    logo.style.backgroundColor = "#f7aea8";
  }
});

item3.addEventListener("touchend", () => {
  item3.style.transition = "all 0.25s ease";
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(1)";
  item3.style.color = "#1a1a1a";
  logo.style.backgroundColor = "#f7aea8";
});

item3.addEventListener("click", () => {
  items.style.transition = "all 0.5s ease";
  menu.style.transition = "all 0.5s ease";
  menu.style.transform = "scale(1)";
  items.style.color = "transparent";
  items.style.opacity = "0";
  items.style.cursor = "default";
  items.style.pointerEvents = "none";
  menu.classList.remove("open");
  scroller.start();
  scroller.scrollTo(page3, { offset: "200" });
});

item3.addEventListener("touchend", () => {
  items.style.transition = "all 0.5s ease";
  menu.style.transition = "all 0.5s ease";
  menu.style.transform = "scale(1)";
  items.style.color = "transparent";
  items.style.opacity = "0";
  items.style.cursor = "default";
  items.style.pointerEvents = "none";
  menu.classList.remove("open");
  scroller.start();
  scroller.scrollTo(page3, { offset: "200" });
});

item4.addEventListener("mouseenter", () => {
  item4.style.transition = "all 0.25s ease";
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(2)";
  logo.style.backgroundColor = "#f4f4f4";
  item4.style.color = "#f4f4f4";
});

item4.addEventListener("touchstart", () => {
  item4.style.transition = "all 0.25s ease";
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(2)";
  logo.style.backgroundColor = "#f4f4f4";
  item4.style.color = "#f4f4f4";
});

item4.addEventListener("mouseleave", () => {
  item4.style.transition = "all 0.25s ease";
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(1)";
  item4.style.color = "#1a1a1a";
  if (menu.classList.contains("open")) {
    logo.style.backgroundColor = "#1a1a1a";
  } else {
    logo.style.backgroundColor = "#f7aea8";
  }
});

item4.addEventListener("touchend", () => {
  item4.style.transition = "all 0.25s ease";
  logo.style.transition = "all 0.25s ease";
  logo.style.transform = "scale(1)";
  item4.style.color = "#1a1a1a";
  logo.style.backgroundColor = "#f7aea8";
});

item4.addEventListener("click", () => {
  items.style.transition = "all 0.5s ease";
  menu.style.transition = "all 0.5s ease";
  menu.style.transform = "scale(1)";
  items.style.color = "transparent";
  items.style.opacity = "0";
  items.style.cursor = "default";
  items.style.pointerEvents = "none";
  menu.classList.remove("open");
  scroller.start();
  scroller.scrollTo(page4, { offset: "200" });
});

item4.addEventListener("touchend", () => {
  items.style.transition = "all 0.5s ease";
  menu.style.transition = "all 0.5s ease";
  menu.style.transform = "scale(1)";
  items.style.color = "transparent";
  items.style.opacity = "0";
  items.style.cursor = "default";
  items.style.pointerEvents = "none";
  menu.classList.remove("open");
  scroller.start();
  scroller.scrollTo(page4, { offset: "200" });
});

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

scope.appendTo(title);

container.addEventListener("mouseenter", () => {
  container.style.transition = "all 0.25s ease";
  container.style.opacity = "0";
});

container.addEventListener("touchstart", () => {
  container.style.transition = "all 0.25s ease";
  container.style.opacity = "0";
});

container.addEventListener("mouseleave", () => {
  container.style.opacity = "1";
});

container.addEventListener("touchend", () => {
  container.style.opacity = "1";
});

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 1;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 1;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("touchmove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 1;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 1;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  e.preventDefault();
});

container.addEventListener("mouseleave", () => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

container.addEventListener("touchend", () => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

link.addEventListener("mouseenter", () => {
  link.style.transition = "all 0.25s ease";
  link.style.backgroundColor = "#f4f4f4";
  link.style.color = "#1a1a1a";
});

link.addEventListener("mouseleave", () => {
  link.style.transition = "all 0.25s ease";
  link.style.backgroundColor = "#1a1a1a";
  link.style.color = "#f4f4f4";
});

link.addEventListener("click", () => {
  link.style.transition = "all 0.25s ease";
  link.style.backgroundColor = "#1a1a1a";
  link.style.color = "#f4f4f4";
});

email.addEventListener("mouseenter", () => {
  email.style.transition = "all 0.25s ease";
  email.style.backgroundColor = "#f4f4f4";
  email.style.color = "#1a1a1a";
});

email.addEventListener("mouseleave", () => {
  email.style.transition = "all 0.25s ease";
  email.style.backgroundColor = "#1a1a1a";
  email.style.color = "#f4f4f4";
});

email.addEventListener("click", () => {
  email.style.transition = "all 0.25s ease";
  email.style.backgroundColor = "#1a1a1a";
  email.style.color = "#f4f4f4";
});

button.addEventListener("mouseenter", () => {
  button.style.transition = "all 0.25s ease";
  button.style.border = "5px solid #1a1a1a";
  button.style.backgroundColor = "#f4f4f4";
  button.style.color = "#1a1a1a";
});

/*button.addEventListener("touchstart", () => {
  button.style.transition = "all 0.25s ease";
  button.style.border = "5px solid #1a1a1a";
  button.style.backgroundColor = "#f4f4f4";
  button.style.color = "#1a1a1a";
});*/

button.addEventListener("mouseleave", () => {
  button.style.transition = "all 0.25s ease";
  button.style.border = "5px solid #f4f4f4";
  button.style.backgroundColor = "#1a1a1a";
  button.style.color = "#f4f4f4";
});

button.addEventListener("click", () => {
  button.style.transition = "all 0.25s ease";
  button.style.border = "5px solid #f4f4f4";
  button.style.backgroundColor = "#1a1a1a";
  button.style.color = "#f4f4f4";
});

button.addEventListener("click", () => {
  cv.style.transition = "all 0.75s ease";
  cv.style.width = "100%";
  cv.style.transform = "translate(0%)";
  cv.style.opacity = 1;
  scroller.scrollTo(page4);
});

button.addEventListener("touchcancel", () => {
  cv.style.transition = "all 0.75s ease";
  cv.style.width = "100%";
  cv.style.transform = "translate(0%)";
  cv.style.opacity = 1;
  scroller.scrollTo(page4);
});

cv.addEventListener("mouseleave", () => {
  cv.style.transition = "all 0.75s ease";
  cv.style.width = "0%";
  cv.style.transform = "translate(-250%)";
  cv.style.opacity = 0;
});

cv.addEventListener("click", () => {
  cv.style.transition = "all 0.75s ease";
  cv.style.width = "0%";
  cv.style.transform = "translate(-250%)";
  cv.style.opacity = 0;
  scroller.scrollTo("bottom");
});

cv.addEventListener("touchcancel", () => {
  cv.style.transition = "all 0.75s ease";
  cv.style.width = "0%";
  cv.style.transform = "translate(-250%)";
  cv.style.opacity = 0;
  scroller.scrollTo("bottom");
});

github.addEventListener("mouseenter", () => {
  github.style.transition = "all 0.25s ease";
  github.style.transform = "scale(2)";
});

github.addEventListener("mouseleave", () => {
  github.style.transition = "all 0.25s ease";
  github.style.transform = "scale(1)";
});

github.addEventListener("click", () => {
  github.style.transition = "all 0.25s ease";
  github.style.transform = "scale(1)";
});

bandcamp.addEventListener("mouseenter", () => {
  bandcamp.style.transition = "all 0.25s ease";
  bandcamp.style.transform = "scale(2)";
});

bandcamp.addEventListener("mouseleave", () => {
  bandcamp.style.transition = "all 0.25s ease";
  bandcamp.style.transform = "scale(1)";
});

bandcamp.addEventListener("click", () => {
  bandcamp.style.transition = "all 0.25s ease";
  bandcamp.style.transform = "scale(1)";
});

linkedin.addEventListener("mouseenter", () => {
  linkedin.style.transition = "all 0.25s ease";
  linkedin.style.transform = "scale(2)";
});

linkedin.addEventListener("mouseleave", () => {
  linkedin.style.transition = "all 0.25s ease";
  linkedin.style.transform = "scale(1)";
});

linkedin.addEventListener("click", () => {
  linkedin.style.transition = "all 0.25s ease";
  linkedin.style.transform = "scale(1)";
});

mail.addEventListener("mouseenter", () => {
  mail.style.transition = "all 0.25s ease";
  mail.style.transform = "scale(2)";
});

mail.addEventListener("mouseleave", () => {
  mail.style.transition = "all 0.25s ease";
  mail.style.transform = "scale(1)";
});

mail.addEventListener("click", () => {
  mail.style.transition = "all 0.25s ease";
  mail.style.transform = "scale(1)";
});
