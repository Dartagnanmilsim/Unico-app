const button = document.getElementById("magicButton");
const container = document.getElementById("unicornContainer");

button.addEventListener("click", () => {
  for (let i = 0; i < 12; i++) {
    spawnUnicorn();
    spawnKiss();
  }
  spawnMessage();
});

function randomX() {
  return Math.random() * (window.innerWidth - 50);
}

function spawnUnicorn() {
  const el = document.createElement("div");
  el.className = "unicorn";
  el.textContent = "🦄";
  el.style.left = randomX() + "px";
  el.style.top = window.innerHeight + "px";
  container.appendChild(el);
  setTimeout(() => el.remove(), 3500);
}

function spawnKiss() {
  const el = document.createElement("div");
  el.className = "kiss";
  el.textContent = "💋";
  el.style.left = randomX() + "px";
  el.style.top = window.innerHeight + "px";
  container.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

function spawnMessage() {
  const el = document.createElement("div");
  el.className = "message";
  el.textContent = "TE AMO SALO ❤️";
  el.style.left = randomX() + "px";
  el.style.top = window.innerHeight + "px";
  container.appendChild(el);
  setTimeout(() => el.remove(), 3500);
}
