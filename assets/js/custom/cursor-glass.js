const glass = document.getElementById("cursor-glass");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let lastX = mouseX;
let lastY = mouseY;
let velocity = 0;
let currentScale = 1;

function animateGlass() {
// Smooth position
glass.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(${currentScale})`;
requestAnimationFrame(animateGlass);
}

animateGlass();

// Velocity-aware scaling
document.addEventListener("mousemove", (e) => {
lastX = mouseX;
lastY = mouseY;
mouseX = e.clientX;
mouseY = e.clientY;

const dx = mouseX - lastX;
const dy = mouseY - lastY;
velocity = Math.sqrt(dx * dx + dy * dy);

// Map velocity to scale range (1 to 1.6)
const scale = 1 + Math.min(velocity / 50, 0.6);

// Smooth lerping
currentScale += (scale - currentScale) * 0.2;

// Auto-hide on idle (optional)
glass.style.opacity = '1';
clearTimeout(glass._timeout);
glass._timeout = setTimeout(() => {
    glass.style.opacity = '0';
}, 2000);
});
