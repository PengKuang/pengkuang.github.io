document.addEventListener("mousemove", function (e) {
  const cursorBlob = document.getElementById("cursor-blob");
  if (cursorBlob) {
    cursorBlob.style.left = e.clientX + "px";
    cursorBlob.style.top = e.clientY + "px";
  }
});
