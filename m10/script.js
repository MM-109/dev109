const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", function(event) {
  const dots = document.getElementsByClassName("dot");
  while (dots.length > 0) {
    dots[0].parentNode.removeChild(dots[0]);
  }
  event.stopPropagation();
});

document.addEventListener("click", function(event) {
  const dot = document.createElement("div");
  dot.className = "dot";

  const color = document.querySelector("#color").value;
  const size = document.querySelector("#size").value;

  dot.style.backgroundColor = color;
  dot.style.width = size + "px";
  dot.style.height = size + "px";
  dot.style.left = (event.pageX - size / 2) + "px";
  dot.style.top = (event.pageY - size / 2) + "px";

  document.body.appendChild(dot);
});
