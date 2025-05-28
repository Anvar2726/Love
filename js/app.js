const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const heart = document.querySelector(".hearts");
const gifImg = document.querySelector(".gif-img");
const body = document.querySelector("body");
const detailsForm = document.querySelector(".user-info");
const modal = document.querySelector(".details-modal");
const textInfo = document.querySelector(".info-text");

let userName = "";

function getSplitText() {
  const loveMessage = `Dunyoda 4 milliarddan ortiq ayol bor. Har birining yurishi, nigohi, ovozi o‘ziga xos. Ammo ularning ichidan seni uchratish ehtimoli 0.00000000025 edi. Bu oddiy omad emas. Bu — koinotning yuragimga yozgan eng nozik mo‘jizasi edi. ${userName}, sen ehtimoldan tashqaridagi yagona haqiqatimsan.`;
  const text = loveMessage.split(" ");
  textInfo.textContent = "";
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.textContent = text[i];
    span.classList.add("letter");
    span.style.animationDelay = i * 0.09 + "s";
    span.style.marginRight = "5px";
    textInfo.appendChild(span);
  }
}

noBtn.addEventListener("click", () => {
  let top = Math.ceil(Math.random() * 100);
  let left = Math.ceil(Math.random() * 80);
  noBtn.style.position = "absolute";
  noBtn.style.top = `${top}%`;
  noBtn.style.left = `${left}%`;
});

detailsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  detailsForm.checkValidity();
  if (detailsForm.checkValidity()) {
    modal.classList.add("fade-out");
    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  }
  userName = e.target.name.value;
});

yesBtn.addEventListener("click", () => {
  noBtn.style.position = "relative";
  noBtn.style.top = `0%`;
  noBtn.style.left = `0%`;
  heart.style.opacity = "1";
  textInfo.style.display = "inline-block";
  heart.textContent += `
  ❤️${userName}❤️`;
  gifImg.src = "/assets/3ce884bb29ad1909a2c253354497420f.gif";
  initParticles();
  getSplitText();
  body.style.transition = "background-color 0.5s ease-in-out";
  body.style.backgroundColor = "#ffb6c1";
});

function initParticles() {
  hearts();
}

function hearts() {
  const elements = document.querySelectorAll(".particletext.hearts");

  elements.forEach((el) => {
    const heartCount = (el.offsetWidth / 50) * 5;

    for (let i = 0; i <= heartCount; i++) {
      const size = rnd(60, 120) / 10;
      const top = rnd(20, 80);
      const left = rnd(0, 95);
      const delay = rnd(0, 30) / 10;

      const span = document.createElement("span");
      span.className = "particle";
      span.style.top = `${top}%`;
      span.style.left = `${left}%`;
      span.style.width = `${size}px`;
      span.style.height = `${size}px`;
      span.style.animationDelay = `${delay}s`;

      el.appendChild(span);
    }
  });
}

function rnd(m, n) {
  m = parseInt(m);
  n = parseInt(n);
  return Math.floor(Math.random() * (n - m + 1)) + m;
}
