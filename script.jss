document.addEventListener("DOMContentLoaded", () => {
  const exName = prompt("What's your ex's name?", "Alex") || "Alex";
  const yourName = prompt("Your name?", "Jordan") || "Jordan";

  document.getElementById("exName").textContent = exName;
  document.getElementById("yourName").textContent = yourName;
});

document.getElementById("celebrateBtn").addEventListener("click", function() {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'];
  const btn = this;

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.zIndex = '-1';
    confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }

  btn.textContent = "You got this! 🚀";
  setTimeout(() => btn.textContent = "Click for Good Vibes! 🎊", 3000);
});