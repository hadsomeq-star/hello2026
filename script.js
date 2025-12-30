const text = "hello2026";
const container = document.getElementById("letters");
const finalText = document.getElementById("finalText");

let delay = 0;

[...text].forEach((char, i) => {
    const span = document.createElement("span");
    span.innerText = char;
    span.className = "letter";
    span.style.left = Math.random() * 80 + "%";
    span.style.animationDelay = delay + "s";
    container.appendChild(span);
    delay += 0.2;
});

setTimeout(() => {
    container.innerHTML = "";
    finalText.style.display = "block";
    startHearts();
}, 4000);

function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 300);
}