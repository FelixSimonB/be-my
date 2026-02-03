const noBtn = document.querySelector(".no");
const yesBtn = document.querySelector(".yes");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 20 - 10}deg)`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      background:linear-gradient(135deg,#ff758f,#ffb3c6);
      font-family:system-ui;
      color:white;
      text-align:center;
      padding:2rem;
    ">
      <div>
        <h1 style="font-size:3rem;">YAY!! 💖🥰</h1>
        <p style="font-size:1.3rem;">You just made my day ❤️</p>
      </div>
    </div>
  `;
});
