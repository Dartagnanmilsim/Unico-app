const button = document.getElementById("magicButton");
const container = document.getElementById("unicornContainer");

button.addEventListener("click", () => {
  for (let i = 0; i < 10; i++) {
    createUnicorn();
    createKiss();
  }
  createMessage();
});

function createUnicorn() {
  const unicorn = document.createElement("div");
  unicorn.className = "unicorn";
  unicorn.textContent = "🦄";

  unicorn.style.left = Math.random() * window.innerWidth + "px";
  unicorn.style.top = window.innerHeight + "px";

  container.appendChild(unicorn);
  setTimeout(() => unicorn.remove(), 3500);
}

function createKiss() {
  const kiss = document.createElement("div");
  kiss.className = "kiss";
  kiss.textContent = "💋";

  kiss.style.left = Math.random() * window.innerWidth + "px";
  kiss.style.top = window.innerHeight + "px";

  container.appendChild(kiss);
  setTimeout(() => kiss.remove(), 3000);
}

function createMessage() {
  const msg = document.createElement("div");
  msg.className = "message";
  msg.textContent = "TE AMO SALO ❤️";

  msg.style.left = Math.random() * (window.innerWidth - 200) + "px";
  msg.style.top = window.innerHeight + "px";

  container.appendChild(msg);
  setTimeout(() => msg.remove(), 3500);
}
