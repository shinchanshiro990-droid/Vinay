
// ==================================
// VINAY MODEL - BIRTHDAY BATTLE
// ==================================


// 1. LOADING SCREEN

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader")
            .classList.add("hide");

    }, 2200);

});


// 2. FLOATING FIRE PARTICLES

const particles = document.getElementById("particles");

for (let i = 0; i < 30; i++) {

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particle.style.animationDuration =
        (3 + Math.random() * 5) + "s";

    particles.appendChild(particle);

}


// 3. START BIRTHDAY MISSION

function startMission() {

    document.getElementById("mission")
        .scrollIntoView({
            behavior: "smooth"
        });

    showPopup(
        "MISSION STARTED!",
        "Welcome to the battlefield, Vinay Model! Your special birthday mission is now active. Get ready for BOOYAH!"
    );

}


// 4. SPECIAL BIRTHDAY MESSAGE

function showMessage() {

    showPopup(
        "A MESSAGE FOR YOU ❤️",
        "Happy Birthday Vinay! Keep chasing your dreams, enjoy every moment and never stop smiling. You deserve all the happiness and success in the world!"
    );

}


// 5. COMPLETE MISSION

function completeMission() {

    document.getElementById("birthday")
        .scrollIntoView({
            behavior: "smooth"
        });

    setTimeout(() => {

        celebrate();

    }, 700);

}


// 6. POPUP MESSAGE

function showPopup(title, message) {

    document.getElementById("popup-title")
        .textContent = title;

    document.getElementById("popup-message")
        .textContent = message;

    document.getElementById("popup")
        .classList.add("show");

}


// 7. CLOSE POPUP

function closePopup() {

    document.getElementById("popup")
        .classList.remove("show");

}


// 8. BIRTHDAY CELEBRATION

function celebrate() {

    closePopup();

    for (let i = 0; i < 120; i++) {

        const confetti =
            document.createElement("div");

        confetti.className = "confetti";

        confetti.textContent = [
            "🔥",
            "🎉",
            "✨",
            "🎊",
            "⭐"
        ][Math.floor(Math.random() * 5)];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.fontSize =
            (12 + Math.random() * 20) + "px";

        confetti.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

    showPopup(
        "BOOYAH! 🏆",
        "VICTORY! Happy Birthday Vinay Model! May your life be full of legendary moments. Keep winning, legend! 🔥"
    );

}


// 9. CLOSE POPUP WHEN CLICKING OUTSIDE

document.getElementById("popup")
    .addEventListener("click", (event) => {

        if (event.target.id === "popup") {

            closePopup();

        }

    });

