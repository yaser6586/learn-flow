const si = document.getElementById("btn");
const csi = document.getElementById("cbtn");
si.addEventListener("click", showSub);
function showSub() {
  document.getElementById("subitem1").style.display = "block";
  document.getElementById("subitem2").style.display = "block";
  document.getElementById("cbtn").style.display = "block";
  document.getElementById("btn").style.display = "none";
}
csi.addEventListener("mousedown", () => {
  document.getElementById("subitem1").style.display = "none";
  document.getElementById("subitem2").style.display = "none";
  document.getElementById("cbtn").style.display = "none";
  document.getElementById("btn").style.display = "block";
});
