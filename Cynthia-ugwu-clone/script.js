const cursorDot = document.querySelector(".cursor-dot");
let mouseX = 0, mouseY = 0;
let dotX = 0, dotY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  dotX += (mouseX - dotX) * 0.1;
  dotY += (mouseY - dotY) * 0.1;

  cursorDot.style.left = dotX + "px";
  cursorDot.style.top = dotY + "px";

  requestAnimationFrame(animate);
}

animate();
