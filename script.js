
// Floating hearts
document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("floating-heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = 3 + Math.random() * 2 + "s";
        body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 500);
});
