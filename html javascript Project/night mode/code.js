//for select root we use the below code
let pageStyle = document.documentElement;
const buttonNight = document.getElementById("btn");
const buttonDay = document.getElementById("dbtn");
// add event for button click we don't use () for function
buttonNight.addEventListener("click", night);
buttonDay.addEventListener("click", day);
function night() {
  // we use setProperty(property,value) to change the property value to value
  pageStyle.style.setProperty("--pageBackGround", "var(--nightPageBackGround)");
  pageStyle.style.setProperty("--textColor", "var(--nighTextColor)");
  pageStyle.style.setProperty("--borderColor", "var(--nightBorderColor)");
}
function day() {
  pageStyle.style.setProperty("--pageBackGround", "var(--pageBackGround)");
  pageStyle.style.setProperty("--textColor", "var(--textColor)");
  pageStyle.style.setProperty("--borderColor", "--borderColor");
}
