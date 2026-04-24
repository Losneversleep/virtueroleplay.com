console.log("FiveM homepage loaded");





// Use emojis for now (you can replace with images later)
const container = document.getElementById("particle-container");

function createParticles(x, y) {
  if (!container) return;

  for (let i = 0; i < 10; i++) {
    const p = document.createElement("div");
    p.className = "particle";

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 70 + 25;

    const dx = Math.cos(angle) * distance + "px";
    const dy = Math.sin(angle) * distance + "px";
    const rotate = `${Math.random() * 360}deg`;

    const width = Math.random() * 10 + 8;
    const height = Math.random() * 2 + 2;

    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    p.style.width = `${width}px`;
    p.style.height = `${height}px`;
    p.style.setProperty("--x", dx);
    p.style.setProperty("--y", dy);
    p.style.setProperty("--rotate", rotate);

    container.appendChild(p);

    setTimeout(() => p.remove(), 650);
  }
}

// Apply effect to all buttons + nav links
document.querySelectorAll("a, .btn").forEach(el => {
  el.addEventListener("mouseenter", () => {
    const rect = el.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    createParticles(x, y);
  });
});

// Apply effect to all buttons + nav links
document.querySelectorAll("a, .btn").forEach(el => {
  el.addEventListener("mouseenter", (e) => {
    const rect = el.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    createParticles(x, y);
  });
});
document.querySelectorAll(".media-gallery-item").forEach(item => {
  const slides = item.querySelectorAll(".slide");
  let index = 0;
  let interval;

  item.addEventListener("mouseenter", () => {
    interval = setInterval(() => {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }, 900);
  });

  item.addEventListener("mouseleave", () => {
    clearInterval(interval);
    slides.forEach(s => s.classList.remove("active"));
    index = 0;
    slides[0].classList.add("active");
  });
});
const playerStats = {
  current: 20,
  peak: 110,
  queue: 0,
};

const currentPlayers = document.getElementById("currentPlayers");
const peakPlayers = document.getElementById("peakPlayers");
const queuePlayers = document.getElementById("queuePlayers");

if (currentPlayers) currentPlayers.textContent = playerStats.current;
if (peakPlayers) peakPlayers.textContent = playerStats.peak;
if (queuePlayers) queuePlayers.textContent = playerStats.queue;

document.querySelectorAll(".media-clip-card video").forEach(video => {
  video.removeAttribute("controls");

  const parent = video.parentElement;

  parent.addEventListener("mouseenter", () => {
    video.setAttribute("controls", "true");
    video.play();
  });

  parent.addEventListener("mouseleave", () => {
    video.removeAttribute("controls");
    video.pause();
  });
});