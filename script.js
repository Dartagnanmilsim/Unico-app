const button = document.getElementById("magicButton");

let step = 0; // controla el orden

button.addEventListener("click", () => {
  step = (step + 1) % 3;

  if (step === 1) {
    spawn("🦄");
  } 
  else if (step === 2) {
    spawn("TE AMO SALO ❤️");
  } 
  else {
    spawn("💋");
  }
});

function spawn(content) {
  const el = document.createElement("div");
  el.className = "float";
  el.textContent = content;

  el.style.left = Math.random() * window.innerWidth + "px";
  el.style.bottom = "-40px";

  document.body.appendChild(el);

  setTimeout(() => el.remove(), 4000);
}
