document.addEventListener("DOMContentLoaded", function () {
  const gooContainer = document.getElementById("goo-container");
  if (!gooContainer) return; // Exit if the container isn't found

  const bubbles = gooContainer.querySelectorAll(".cursor-bubble");
  if (bubbles.length === 0) return; // Exit if no bubbles are found

  // Store the current target position for the first bubble (follows mouse)
  let targetX = 0;
  let targetY = 0;

  // Store the current positions of each bubble for animation
  const bubblePositions = [];
  bubbles.forEach((bubble, index) => {
    // Initialize positions off-screen or at a starting point
    bubblePositions[index] = { x: -100, y: -100 };
    // Set initial SVG attributes
    bubble.setAttribute("cx", -100);
    bubble.setAttribute("cy", -100);
  });

  // --- Event Listener for Mouse Movement ---
  document.addEventListener("mousemove", function (e) {
    // Update the target position for the first bubble
    targetX = e.clientX;
    targetY = e.clientY;

    // Ensure bubbles become visible after first move
    bubbles.forEach((bubble, index) => {
      // You might set initial position here if you didn't above
      if (bubble.getAttribute("cx") === "-100") {
        // Simple check if still at initial off-screen pos
        bubblePositions[index].x = targetX;
        bubblePositions[index].y = targetY;
      }
    });
  });

  // --- Animation Loop ---
  function animateBubbles() {
    // Animate the first bubble towards the mouse target
    bubblePositions[0].x += (targetX - bubblePositions[0].x) * 0.15; // Adjust 0.1 for speed
    bubblePositions[0].y += (targetY - bubblePositions[0].y) * 0.15; // Adjust 0.1 for speed

    // Animate subsequent bubbles towards the previous bubble's position
    for (let i = 1; i < bubblePositions.length; i++) {
      bubblePositions[i].x += (bubblePositions[i - 1].x - bubblePositions[i].x) * 0.2; // Adjust 0.15 for speed/lag
      bubblePositions[i].y += (bubblePositions[i - 1].y - bubblePositions[i].y) * 0.2; // Adjust 0.15 for speed/lag
    }

    // Update the SVG circle elements with the new positions
    bubbles.forEach((bubble, index) => {
      bubble.setAttribute("cx", bubblePositions[index].x);
      bubble.setAttribute("cy", bubblePositions[index].y);
    });

    // Request the next animation frame
    requestAnimationFrame(animateBubbles);
  }

  // Start the animation loop
  animateBubbles();
}); // End DOMContentLoaded
