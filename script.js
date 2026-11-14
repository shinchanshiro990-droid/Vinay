
/* =====================================
   VINAY MODEL - BIRTHDAY BATTLE
===================================== */

const $ = (id) => document.getElementById(id);

const screens = [
    "introScreen",
    "missionScreen",
    "profileScreen",
    "crateScreen",
    "gameScreen",
    "photoScreen",
    "countdownScreen",
    "finalScreen"
];

let audioContext = null;
let musicEnabled = true;
let musicTimer = null;

let loading = 0;
let score = 0;
let gameTime = 30;
let gameTimer = null;
let gameRunning = false;
let crateOpened = false;
let countdownRunning = false;
let confettiAnimation = null;


/* SCREEN CONTROL */

function showScreen(id) {
    screens.forEach(screen => {
        $(screen).classList.add("hidden");
    });

    $(id).classList.remove("hidden");

    window.scrollTo({ top: 0, behavior: "smooth" });
}


/* SOUND ENGINE */

function initAudio() {
    if (!audioContext) {
        const AudioEngine =
            window.AudioContext || window.webkitAudioContext;

        if (!AudioEngine) return;

        audioContext = new AudioEngine();
    }

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }
}

function tone(frequency, duration = 0.15, type = "sine", volume = 0.04) {
    if (!musicEnabled || !audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.value = frequency;

    gain.gain.setValueAtTime(volume, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + duration
    );

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
}

function clickSound() {
    tone(650, 0.09, "square", 0.035);
    setTimeout(() => tone(900, 0.08, "square", 0.025), 70);
}

function rewardSound() {
    [500, 700, 900, 1100].forEach((frequency, index) => {
        setTimeout(() => {
            tone(frequency, 0.3, "triangle", 0.06);
        }, index * 150);
    });
}

function victorySound() {
    [440, 554, 659, 880, 1046].forEach((frequency, index) => {
        setTimeout(() => {
            tone(frequency, 0.5, "triangle", 0.07);
        }, index * 180);
    });
}


/* BACKGROUND MUSIC */

function startMusic() {
    if (!musicEnabled || !audioContext || musicTimer) return;

    const notes = [110, 146.83, 164.81, 220];
    let index = 0;

    musicTimer = setInterval(() => {
        if (musicEnabled) {
            tone(notes[index % notes.length], 0.7, "sine", 0.018);
            index++;
        }
    }, 850);
}

function stopMusic() {
    clearInterval(musicTimer);
    musicTimer = null;
}

$("soundBtn").addEventListener("click", () => {
    musicEnabled = !musicEnabled;

    $("soundBtn").textContent =
        musicEnabled ? "🔊 SOUND ON" : "🔇 SOUND OFF";

    if (musicEnabled) {
        initAudio();
        startMusic();
        clickSound();
    } else {
        stopMusic();
    }
});


/* LOADING */

const loadingMessages = [
    "CONNECTING TO SERVER...",
    "LOADING PLAYER PROFILE...",
    "PREPARING BATTLE ARENA...",
    "UNLOCKING BIRTHDAY MISSION...",
    "READY TO PLAY!"
];

const loadingInterval = setInterval(() => {
    loading += Math.floor(Math.random() * 4) + 3;

    if (loading >= 100) {
        loading = 100;
        clearInterval(loadingInterval);
    }

    $("loadingProgress").style.width = loading + "%";
    $("loadingPercent").textContent = loading + "%";

    const messageIndex = Math.min(
        Math.floor(loading / 25),
        loadingMessages.length - 1
    );

    $("loadingText").textContent =
        loadingMessages[messageIndex];

    if (loading === 100) {
        $("startBtn").textContent = "ENTER BATTLE ▶";
    }
}, 160);


/* POPUP */

function showPopup(title, message) {
    $("surprisePopup").querySelector("h2").textContent = title;
    $("popupMessage").textContent = message;
    $("surprisePopup").classList.remove("hidden");
}

$("popupCloseBtn").addEventListener("click", () => {
    $("surprisePopup").classList.add("hidden");
    clickSound();
});


/* START */

$("startBtn").addEventListener("click", () => {
    if (loading < 100) {
        $("loadingText").textContent = "PLEASE WAIT...";
        return;
    }

    initAudio();
    startMusic();
    clickSound();

    showScreen("missionScreen");

    showPopup(
        "MISSION RECEIVED",
        "Vinay Model, your birthday mission is waiting. Get ready, legend!"
    );
});


/* MISSION */

$("missionBtn").addEventListener("click", () => {
    clickSound();
    showScreen("profileScreen");
});


/* PLAYER PROFILE */

$("profileBtn").addEventListener("click", () => {
    clickSound();
    showScreen("crateScreen");
});


/* MYSTERY CRATE */

$("crateBtn").addEventListener("click", () => {
    if (crateOpened) return;

    crateOpened = true;

    const crate = $("crateBtn");

    crate.style.animation = "none";
    crate.style.transform = "scale(1.15) rotate(8deg)";

    tone(150, 0.3, "sawtooth", 0.07);

    setTimeout(() => {
        tone(300, 0.3, "sawtooth", 0.07);
    }, 250);

    setTimeout(() => {
        crate.classList.add("hidden");

        $("crateReward").classList.remove("hidden");
        $("crateNextBtn").classList.remove("hidden");

        rewardSound();

        showPopup(
            "LEGENDARY REWARD!",
            "You unlocked the Birthday King title! One more challenge awaits."
        );
    }, 1500);
});

$("crateNextBtn").addEventListener("click", () => {
    clickSound();
    showScreen("gameScreen");
});


/* TARGET GAME */

function moveTarget() {
    const target = $("targetBtn");
    const arena = $("gameArena");

    const maxX = Math.max(0, arena.clientWidth - target.offsetWidth);
    const maxY = Math.max(0, arena.clientHeight - target.offsetHeight);

    target.style.left = Math.random() * maxX + "px";
    target.style.top = Math.random() * maxY + "px";
}

function endGame(success) {
    clearInterval(gameTimer);
    gameRunning = false;

    $("targetBtn").style.display = "none";

    if (success) {
        $("gameMessage").textContent =
            "🏆 LEGENDARY AIM! CHALLENGE COMPLETE!";

        $("gameStartBtn").classList.add("hidden");
        $("gameNextBtn").classList.remove("hidden");

        rewardSound();

        showPopup(
            "CHALLENGE COMPLETED!",
            "Five targets destroyed! Your final surprise is unlocked."
        );
    } else {
        $("gameMessage").textContent =
            "TIME UP! TRY AGAIN, LEGEND!";

        $("gameStartBtn").textContent = "TRY AGAIN";
        $("gameStartBtn").classList.remove("hidden");
    }
}

function startGame() {
    if (gameRunning) return;

    score = 0;
    gameTime = 30;
    gameRunning = true;

    $("score").textContent = score;
    $("timer").textContent = gameTime;

    $("gameMessage").textContent = "TARGETS INCOMING! FIRE!";

    $("gameStartBtn").classList.add("hidden");
    $("gameNextBtn").classList.add("hidden");

    $("targetBtn").style.display = "block";

    moveTarget();

    gameTimer = setInterval(() => {
        gameTime--;

        $("timer").textContent = gameTime;

        if (gameTime <= 0) {
            endGame(score >= 5);
        }
    }, 1000);
}

$("gameStartBtn").addEventListener("click", () => {
    initAudio();
    clickSound();
    startGame();
});

$("targetBtn").addEventListener("click", () => {
    if (!gameRunning) return;

    score++;
    $("score").textContent = score;

    tone(750 + score * 60, 0.1, "square", 0.05);

    $("targetBtn").textContent = "💥";

    setTimeout(() => {
        if (gameRunning) {
            $("targetBtn").textContent = "🎯";
            moveTarget();
        }
    }, 130);

    if (score >= 5) {
        endGame(true);
    }
});

$("gameNextBtn").addEventListener("click", () => {
    clickSound();
    showScreen("photoScreen");
});


/* PHOTO SURPRISE */

$("photoBtn").addEventListener("click", () => {
    clickSound();
    showScreen("countdownScreen");
    startCountdown();
});


/* COUNTDOWN */

function startCountdown() {
    if (countdownRunning) return;

    countdownRunning = true;

    let number = 3;
    $("countdownNumber").textContent = number;

    const countdownTimer = setInterval(() => {
        number--;

        if (number > 0) {
            $("countdownNumber").textContent = number;
            tone(400 + number * 150, 0.25, "square", 0.07);
        } else {
            clearInterval(countdownTimer);

            $("countdownNumber").textContent = "BOOYAH!";

            setTimeout(() => {
                countdownRunning = false;

                showScreen("finalScreen");
                victorySound();
                startConfetti();

                showPopup(
                    "HAPPY BIRTHDAY!",
                    "Today is your day, Vinay Model! You are the real legend!"
                );
            }, 1200);
        }
    }, 1100);
}


/* CONFETTI */

function startConfetti() {
    const canvas = $("confettiCanvas");
    const ctx = canvas.getContext("2d");

    if (confettiAnimation) {
        cancelAnimationFrame(confettiAnimation);
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = [
        "#ff2525",
        "#ffd45a",
        "#ff8a00",
        "#ffffff",
        "#00ff88"
    ];

    const particles = [];

    for (let i = 0; i < 180; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * -canvas.height,
            size: Math.random() * 7 + 3,
            speed: Math.random() * 4 + 2,
            rotation: Math.random() * 360,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    let frame = 0;

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.y += p.speed;
            p.rotation += 3;

            if (p.y > canvas.height) {
                p.y = -10;
                p.x = Math.random() * canvas.width;
            }

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.6);
            ctx.restore();
        });

        frame++;

        if (frame < 1800) {
            confettiAnimation = requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    animate();
}


/* BACKGROUND PARTICLES */

function createParticles() {
    const container = $("particles");

    for (let i = 0; i < 35; i++) {
        const particle = document.createElement("div");

        particle.style.position = "absolute";
        particle.style.width = Math.random() * 4 + 2 + "px";
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.borderRadius = "50%";

        particle.style.background =
            Math.random() > 0.5 ? "#ff2525" : "#ffb000";

        particle.style.boxShadow = "0 0 12px currentColor";
        particle.style.opacity = Math.random() * 0.7 + 0.2;

        particle.style.animation =
            `particleFloat ${Math.random() * 5 + 4}s infinite alternate ease-in-out`;

        container.appendChild(particle);
    }
}


/* REPLAY */

$("replayBtn").addEventListener("click", () => {
    clearInterval(gameTimer);

    if (confettiAnimation) {
        cancelAnimationFrame(confettiAnimation);
        confettiAnimation = null;
    }

    gameRunning = false;
    countdownRunning = false;
    crateOpened = false;

    score = 0;
    gameTime = 30;

    $("score").textContent = "0";
    $("timer").textContent = "30";

    $("crateBtn").classList.remove("hidden");
    $("crateBtn").style.animation = "";
    $("crateBtn").style.transform = "";

    $("crateReward").classList.add("hidden");
    $("crateNextBtn").classList.add("hidden");

    $("gameNextBtn").classList.add("hidden");
    $("gameStartBtn").classList.remove("hidden");
    $("gameStartBtn").textContent = "START CHALLENGE";

    $("targetBtn").style.display = "none";
    $("targetBtn").textContent = "🎯";

    $("gameMessage").textContent = "READY PLAYER ONE?";

    $("surprisePopup").classList.add("hidden");
    $("countdownNumber").textContent = "3";

    const canvas = $("confettiCanvas");
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

    showScreen("introScreen");
});


/* INITIALIZE */

createParticles();

window.addEventListener("resize", () => {
    const canvas = $("confettiCanvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

console.log("🔥 VINAY MODEL BIRTHDAY BATTLE LOADED!");
