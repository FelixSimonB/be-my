const noBtn = document.querySelector(".no");
const yesBtn = document.querySelector(".yes");
const mainCard = document.getElementById("main-card");
const yesCard = document.getElementById("yes-card");
const music = document.getElementById("bg-music");
const scene = document.querySelector(".scene");

// Start music on first interaction
const enableSound = () => {
  music.muted = false;
  music.volume = 0.4;
  music.play().catch(() => {});
  document.removeEventListener("click", enableSound);
  document.removeEventListener("touchstart", enableSound);
};

document.addEventListener("click", enableSound);
document.addEventListener("touchstart", enableSound);

// NO button dodge
const moveButton = () => {
  const padding = 40;
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - padding);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - padding);
  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
};
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

// YES button shows yes-card and triggers heart confetti
yesBtn.addEventListener("click", () => {
  mainCard.style.display = "none";
  yesCard.style.display = "block";

  // Heart confetti
  createHearts(30);
});

// Function to generate hearts
function createHearts(num) {
  for (let i = 0; i < num; i++) {
    const heart = document.createElement("div");
    heart.classList.add("confetti-heart");
    heart.textContent = "💞"; // Make sure the heart emoji is set
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = 2 + Math.random() * 3 + "s";
    heart.style.fontSize = 20 + Math.random() * 30 + "px";

    scene.appendChild(heart);

    // Remove heart after animation ends
    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }
}
