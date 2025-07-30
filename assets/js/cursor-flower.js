document.addEventListener("DOMContentLoaded", function () {
  const svgNS = "http://www.w3.org/2000/svg";
  const container = document.getElementById("goo-container");
  if (!container) return;

  const numPetals = 5;
  const petals = [];

  for (let i = 0; i < numPetals; i++) {
    const use = document.createElementNS(svgNS, "use");
    use.setAttributeNS(null, "href", "#petal");
    use.setAttribute("width", 30 + Math.random() * 20);
    use.setAttribute("height", 30 + Math.random() * 20);
    use.setAttribute("fill", "rgba(255, 182, 193, 0.5)");
    use.setAttribute("class", "falling-petal");
    container.appendChild(use);

    petals.push({
      el: use,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speedY: 0.1 + Math.random() * 1.5,
      driftX: (Math.random() - 0.5) * 1.0,
      angle: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.25,
    });
  }

  function animate() {
    petals.forEach((petal) => {
      petal.y += petal.speedY;
      petal.x += petal.driftX;
      petal.angle += petal.rotationSpeed;

      if (petal.y > window.innerHeight) {
        petal.y = -50;
        petal.x = Math.random() * window.innerWidth;
      }

      petal.el.setAttribute("transform", "translate(" + petal.x + "," + petal.y + ") rotate(" + petal.angle + ",50,50)");
    });

    requestAnimationFrame(animate);
  }

  animate();
});
