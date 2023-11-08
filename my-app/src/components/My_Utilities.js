
document.addEventListener("wheel", function (event) {
  if (
    document.activeElement.type === "number" &&
    document.activeElement.classList.contains("noscroll")
  ) {
    document.activeElement.blur();
  }
});

