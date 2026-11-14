
:root {
    --red: #ff3030;
    --gold: #ffc857;
    --dark: #08090d;
    --panel: rgba(20, 21, 29, 0.92);
    --white: #f5f5f5;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;
    overflow-x: hidden;
    background:
        radial-gradient(ellipse at 50% 20%, #351313 0%, transparent 45%),
        linear-gradient(145deg, #08090d, #140b0d 55%, #050609);
    color: var(--white);
    font-family: 'Rajdhani', sans-serif;
}

button {
    font-family: 'Orbitron', sans-serif;
    cursor: pointer;
}

#particles {
    position: fixed;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
}

.scanlines {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 5;
    opacity: 0.12;
    background: repeating-linear-gradient(
        to bottom,
        transparent 0px,
        transparent 3px,
        rgba(255,255,255,0.08) 4px
    );
}

.screen {
    position: relative;
    z-index: 2;
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 85px 20px 35px;
    animation: screenIn 0.7s ease both;
}

.hidden {
    display: none !important;
}

@keyframes screenIn {
    from {
        opacity: 0;
        transform: translateY(18px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.sound-btn {
    position: fixed;
    top: 18px;
    right: 18px;
    z-index: 20;
    padding: 11px 15px;
    color: var(--gold);
    background: rgba(15,15,18,0.85);
    border: 1px solid rgba(255,200,87,0.5);
    border-radius: 5px;
    font-size: 10px;
    letter-spacing: 1px;
}

.intro-content,
.final-content {
    width: 100%;
    max-width: 650px;
    text-align: center;
    position: relative;
    z-index: 3;
}

.eyebrow {
    color: var(--gold);
    font-family: 'Orbitron', sans-serif;
    font-size: 11px;
    letter-spacing: 4px;
    margin-bottom: 20px;
}

.game-logo {
    font-family: 'Orbitron', sans-serif;
    font-size: clamp(45px, 12vw, 95px);
    font-weight: 900;
    color: white;
    text-shadow: 0 0 15px var(--red), 0 0 45px rgba(255,40,40,0.65);
    letter-spacing: -5px;
}

.game-logo span {
    color: var(--gold);
}

h1, h2, h3 {
    font-family: 'Orbitron', sans-serif;
}

.intro-content h1 {
    font-size: clamp(30px, 7vw, 55px);
    line-height: 1.2;
    margin: 15px 0;
}

h1 span,
h2 span {
    color: var(--red);
    text-shadow: 0 0 20px rgba(255,48,48,0.35);
}

.intro-subtitle,
.description {
    color: #c2c2c8;
    font-size: 19px;
    line-height: 1.5;
    margin: 15px auto 25px;
    max-width: 470px;
}

.loading-box {
    max-width: 390px;
    margin: 35px auto 25px;
    text-align: left;
}

.loading-label {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    color: var(--gold);
    font-family: 'Orbitron', sans-serif;
    font-size: 9px;
    margin-bottom: 9px;
}

.loading-track {
    height: 8px;
    background: #292930;
    border: 1px solid #514044;
    overflow: hidden;
}

#loadingProgress {
    width: 0%;
    height: 100%;
    background: linear-gradient(90deg, var(--red), var(--gold));
    box-shadow: 0 0 15px var(--red);
    transition: width 0.2s ease;
}

.main-btn {
    display: inline-block;
    min-width: 220px;
    padding: 16px 22px;
    margin-top: 15px;
    color: #fff;
    background: linear-gradient(110deg, #a90e18, #fa3030);
    border: 1px solid #ff7777;
    clip-path: polygon(8% 0, 100% 0, 100% 75%, 92% 100%, 0 100%, 0 25%);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1.3px;
    box-shadow: 0 0 22px rgba(255,30,30,0.25);
    transition: 0.25s ease;
}

.main-btn:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 0 30px rgba(255,40,40,0.6);
    background: linear-gradient(110deg, #d01622, #ff684b);
}

.main-btn:active {
    transform: scale(0.97);
}

.small-note {
    margin-top: 20px;
    color: #777;
    font-size: 10px;
    letter-spacing: 2px;
}

.panel {
    position: relative;
    width: min(100%, 570px);
    padding: 38px 30px;
    text-align: center;
    background: var(--panel);
    border: 1px solid rgba(255, 75, 75, 0.35);
    box-shadow:
        0 0 45px rgba(0,0,0,0.65),
        inset 0 0 35px rgba(255,30,30,0.035);
    backdrop-filter: blur(12px);
}

.panel::before,
.panel::after {
    content: "";
    position: absolute;
    width: 35px;
    height: 35px;
    border-color: var(--gold);
    border-style: solid;
}

.panel::before {
    top: -1px;
    left: -1px;
    border-width: 2px 0 0 2px;
}

.panel::after {
    bottom: -1px;
    right: -1px;
    border-width: 0 2px 2px 0;
}

.panel h2 {
    font-size: clamp(24px, 6vw, 35px);
    margin: 12px 0;
}

.mission-icon {
    font-size: 55px;
    margin: 10px 0;
    filter: drop-shadow(0 0 15px var(--gold));
}

.mission-code {
    color: var(--gold);
    font-family: 'Orbitron', sans-serif;
    font-size: 11px;
    letter-spacing: 2px;
    margin: 16px 0;
}

.mission-card {
    text-align: left;
    padding: 18px;
    margin: 22px 0;
    background: rgba(0,0,0,0.35);
    border-left: 3px solid var(--red);
}

.mission-card p {
    padding: 7px 0;
    font-size: 14px;
    letter-spacing: 1px;
}

.mission-card strong {
    color: white;
}

.gold {
    color: var(--gold) !important;
}

.avatar {
    width: 105px;
    height: 105px;
    display: grid;
    place-items: center;
    margin: 5px auto 20px;
    font-size: 55px;
    border: 2px solid var(--gold);
    border-radius: 50%;
    background: radial-gradient(circle, #552b16, #140b0d);
    box-shadow: 0 0 30px rgba(255,200,87,0.3);
    animation: glow 2s infinite alternate;
}

@keyframes glow {
    from { box-shadow: 0 0 12px rgba(255,200,87,0.2); }
    to { box-shadow: 0 0 32px rgba(255,200,87,0.65); }
}

.rank {
    color: var(--gold);
    font-family: 'Orbitron', sans-serif;
    font-size: 11px;
    letter-spacing: 2px;
    margin: 12px 0 25px;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: 20px 0;
}

.stat {
    padding: 14px 7px;
    background: rgba(255,255,255,0.045);
    border: 1px solid rgba(255,255,255,0.1);
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.stat strong {
    color: var(--gold);
    font-family: 'Orbitron', sans-serif;
    font-size: 21px;
}

.stat span {
    color: #aaa;
    font-family: 'Orbitron', sans-serif;
    font-size: 9px;
    letter-spacing: 1px;
}

.profile-quote {
    padding: 15px;
    margin: 20px 0;
    color: #ddd;
    font-size: 18px;
    font-style: italic;
    border-top: 1px solid #493333;
    border-bottom: 1px solid #493333;
}

.crate-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 180px;
    height: 180px;
    margin: 30px auto;
    border: 1px solid var(--gold);
    border-radius: 16px;
    color: white;
    background: radial-gradient(circle, #63310d, #1a0b0b 70%);
    box-shadow: 0 0 30px rgba(255,180,30,0.25);
    animation: crateFloat 2s infinite ease-in-out;
}

.crate-btn span {
    font-size: 75px;
}

.crate-btn small {
    color: var(--gold);
    font-size: 10px;
    letter-spacing: 2px;
}

@keyframes crateFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.reward {
    padding: 20px;
    margin: 20px 0;
    background: rgba(255,200,87,0.07);
    border: 1px solid var(--gold);
    animation: screenIn 0.7s ease;
}

.reward-icon {
    font-size: 65px;
}

.reward h3 {
    color: var(--gold);
    font-size: 16px;
    margin: 10px 0;
}

.reward p {
    font-family: 'Orbitron', sans-serif;
    margin: 10px;
}

.game-panel {
    max-width: 650px;
}

.game-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: 20px 0;
}

.game-arena {
    position: relative;
    height: 280px;
    overflow: hidden;
    border: 1px solid rgba(255,200,87,0.5);
    background:
        linear-gradient(rgba(10,10,15,0.65), rgba(10,10,15,0.8)),
        repeating-linear-gradient(0deg, transparent 0 39px, rgba(255,255,255,0.06) 40px),
        repeating-linear-gradient(90deg, transparent 0 39px, rgba(255,255,255,0.06) 40px),
        #191016;
}

.arena-label {
    position: absolute;
    top: 12px;
    left: 12px;
    color: rgba(255,200,87,0.6);
    font-family: 'Orbitron', sans-serif;
    font-size: 9px;
    letter-spacing: 2px;
}

.target-btn {
    position: absolute;
    top: 100px;
    left: 100px;
    width: 52px;
    height: 52px;
    display: none;
    border: 1px solid var(--gold);
    border-radius: 50%;
    background: rgba(255,40,40,0.2);
    font-size: 30px;
    filter: drop-shadow(0 0 10px var(--red));
    transition: top 0.1s, left 0.1s;
}

.game-message {
    min-height: 25px;
    margin: 15px 0;
    color: var(--gold);
    font-family: 'Orbitron', sans-serif;
    font-size: 11px;
    letter-spacing: 1px;
}

.photo-frame {
    padding: 9px;
    margin: 25px auto;
    max-width: 330px;
    border: 2px solid var(--gold);
    background: #100d0d;
    box-shadow: 0 0 25px rgba(255,200,87,0.15);
}

.photo-placeholder {
    min-height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(145deg, #261313, #111);
    color: #aaa;
}

.photo-placeholder span {
    font-size: 55px;
    margin-bottom: 15px;
}

.photo-placeholder p {
    font-family: 'Orbitron', sans-serif;
    font-size: 10px;
    color: var(--gold);
}

.photo-placeholder small {
    margin-top: 8px;
}

.countdown-panel {
    background: transparent;
    border: none;
    box-shadow: none;
}

.countdown-number {
    margin: 20px auto;
    font-family: 'Orbitron', sans-serif;
    font-size: clamp(100px, 25vw, 180px);
    font-weight: 900;
    color: var(--gold);
    text-shadow: 0 0 20px var(--red), 0 0 60px var(--red);
    animation: countdownPulse 0.8s infinite alternate;
}

@keyframes countdownPulse {
    from { transform: scale(0.9); opacity: 0.7; }
    to { transform: scale(1.08); opacity: 1; }
}

#finalScreen {
    overflow: hidden;
    background: radial-gradient(ellipse, rgba(100,20,15,0.45), transparent 70%);
}

#confettiCanvas {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

.final-content {
    z-index: 3;
}

.final-crown {
    font-size: 65px;
    animation: crateFloat 2s infinite ease-in-out;
}

.booyah {
    margin: 5px 0;
    color: var(--gold);
    font-family: 'Orbitron', sans-serif;
    font-size: clamp(42px, 11vw, 75px);
    font-weight: 900;
    text-shadow: 0 0 20px #ff8c00, 0 0 45px #ff2424;
}

.final-content h1 {
    font-size: clamp(40px, 10vw, 70px);
    line-height: 1.15;
    margin: 10px 0;
}

.final-content h2 {
    color: var(--gold);
    font-size: clamp(18px, 5vw, 28px);
    letter-spacing: 4px;
    margin: 15px 0;
}

.final-message {
    max-width: 480px;
    margin: 20px auto;
    color: #ddd;
    font-size: 19px;
    line-height: 1.6;
}

.birthday-tag {
    display: inline-block;
    padding: 12px 17px;
    color: var(--gold);
    border: 1px solid rgba(255,200,87,0.55);
    background: rgba(255,200,87,0.07);
    font-family: 'Orbitron', sans-serif;
    font-size: 10px;
    letter-spacing: 1px;
}

.popup-overlay {
    position: fixed;
    inset: 0;
    z-index: 30;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: rgba(0,0,0,0.82);
    backdrop-filter: blur(8px);
}

.popup-box {
    width: min(100%, 390px);
    padding: 30px 25px;
    text-align: center;
    background: #171116;
    border: 1px solid var(--gold);
    box-shadow: 0 0 40px rgba(255,50,30,0.25);
    animation: screenIn 0.4s ease;
}

.popup-star {
    color: var(--gold);
    font-size: 40px;
}

.popup-box h2 {
    color: var(--gold);
    font-size: 20px;
    margin: 10px 0;
}

.popup-box p {
    color: #ddd;
    font-size: 18px;
    line-height: 1.5;
}

@media (max-width: 500px) {
    .screen {
        padding: 75px 14px 25px;
    }

    .panel {
        padding: 30px 17px;
    }

    .eyebrow {
        font-size: 9px;
        letter-spacing: 2px;
    }

    .description {
        font-size: 17px;
    }

    .main-btn {
        width: 100%;
        min-width: 0;
        font-size: 10px;
    }

    .game-arena {
        height: 240px;
    }

    .sound-btn {
        top: 10px;
        right: 10px;
    }
}
