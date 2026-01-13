const button = document.getElementById("magicButton");
const container = document.getElementById("unicornContainer");

button.addEventListener("click", () => {
  for (let i = 0; i < 10; i++) {
    createUnicorn();
  }
});

function createUnicorn() {
  const unicorn = document.createElement("div");
  unicorn.className = "unicorn";
  unicorn.innerHTML = "🦄💋";

  unicorn.style.left = Math.random() * window.innerWidth + "px";
  unicorn.style.top = window.innerHeight + "px";

  container.appendChild(unicorn);

  setTimeout(() => {
    unicorn.remove();
  }, 3000);
}
