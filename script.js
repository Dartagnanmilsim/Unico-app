const button = document.getElementById("magicButton");
const container = document.getElementById("unicornContainer");

button.addEventListener("click", () => {
  for (let i = 0; i < 15; i++) {
    spawn("🦄");
    spawn("💋");
  }
  spawn("TE AMO SALO ❤️");
});

function spawn(content) {
  const el = document.createElement("div");
  el.className = "float";
  el.textContent = content;

  el.style.left = Math.random() * (window.innerWidth - 120) + "px";
  el.style.top = window.innerHeight + "px";

  container.appendChild(el);

  setTimeout(() => el.remove(), 3500);
}
