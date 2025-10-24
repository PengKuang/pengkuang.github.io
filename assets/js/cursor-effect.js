const svg = document.getElementById("cursor-bubble-svg");
const blob = document.getElementById("blob-rect");

let lastX = window.innerWidth / 2;
let lastY = window.innerHeight / 2;
let mouseX = lastX;
let mouseY = lastY;

const baseWidth = 100;
const baseHeight = 80;

function lerp(a, b, n) {
  return a + (b - a) * n;
}

function animate() {

  // Smooth follow
  lastX = lerp(lastX, mouseX, 0.15);
  lastY = lerp(lastY, mouseY, 0.15);

  // // Move the SVG blob
  // svg.style.left = `${lastX - baseWidth / 2}px`;
  // svg.style.top = `${lastY - baseHeight / 2}px`;

  const angle = Math.atan2(dy, dx); // In radians
  const deg = angle * (180 / Math.PI); // Convert to degrees

  // Apply rotation around center
  svg.style.transform = `translate(${lastX - baseWidth / 2}px, ${lastY - baseHeight / 2}px) rotate(${deg}deg)`;


  // Calculate velocity
  const dx = mouseX - lastX;
  const dy = mouseY - lastY;
  const velocity = Math.sqrt(dx * dx + dy * dy);

  // Morph width/height based on velocity
  const stretchFactor = Math.min(velocity * 0.5, 20);
  const width = baseWidth + stretchFactor;
  const height = baseHeight - stretchFactor;

  const rx = Math.max(20, 40 - stretchFactor * 0.5);
  const ry = rx;

  // Apply new shape
  blob.setAttribute("width", width);
  blob.setAttribute("height", height);
  blob.setAttribute("rx", rx);
  blob.setAttribute("ry", ry);

  requestAnimationFrame(animate);
}

animate();

// Track mouse
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
