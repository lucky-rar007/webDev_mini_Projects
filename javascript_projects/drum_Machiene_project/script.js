const drumPads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

function animatePad(button) {
  button.classList.add("active");

  setTimeout(() => {
    button.classList.remove("active");
  }, 100);
}

function playSound(button) {
  const audio = button.querySelector(".clip");

  audio.currentTime = 0;
  audio.play();

  display.textContent = button.id;

  animatePad(button);
}

drumPads.forEach((pad) => {
  pad.addEventListener("click", () => {
    playSound(pad);
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();

  const audio = document.getElementById(key);

  if (!audio) return;

  const button = audio.parentElement;

  playSound(button);
});
