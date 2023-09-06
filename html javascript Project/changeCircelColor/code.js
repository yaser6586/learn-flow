let colorIndex = 0;
function changeColor() {
  const colors = ["yellow", "green", "red", "blue", "orange"];
  document.getElementById("circle").style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}
