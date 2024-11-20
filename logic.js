let cnum = Math.floor(Math.random() * 100) + 1;
let attempt = 0;
let userinp = document.getElementById("input");
let subBtn = document.getElementById("submit");
let resBtn = document.getElementById("resBtn");
let message = document.getElementById("msg");
let attemptData = document.getElementById("Attempt");
let currentPlayerDisplay = document.getElementById("currentPlayer");

let player1Name = "";
let player2Name = "";
let currentPlayer = "";

function check() {
    let usernum = parseInt(userinp.value);
    if (cnum === usernum) {
        message.innerHTML =`Congratulations, ${currentPlayer}! You guessed the number!`;
        message.style.color = "green";
        resBtn.style.display = "block";
        subBtn.disabled = true;
        startFireworks();  // Trigger fireworks here
    } else if (cnum < usernum) {
        message.innerHTML = "Too high! Try again.";
        message.style.color = "red";
    } else {
        message.innerHTML = "Too low! Try again.";
        message.style.color = "red";
    }
    attempt++;
    attemptData.innerHTML = attempt;
    if (player2Name !== "") {
        currentPlayer = currentPlayer === player1Name ? player2Name : player1Name;
        currentPlayerDisplay.innerHTML = currentPlayer;
    }

    setTimeout(() => {
        userinp.value = "";
        message.innerHTML = "";
    }, 1500);
}

function restart() {
    cnum = Math.floor(Math.random() * 100) + 1;
    attempt = 0;
    attemptData.innerHTML = attempt;
    message.innerHTML = "";
    userinp.value = "";
    resBtn.style.display = "none";
    subBtn.disabled = false;
    currentPlayer = player1Name;
    currentPlayerDisplay.innerHTML = currentPlayer;
}

function back() {
    document.getElementById('modeSelection').style.display = 'block';
    document.getElementById('playerNames').style.display = 'none';
    document.getElementById('gameSection').style.display = 'none';
    document.getElementById('player1').value = '';
    document.getElementById('player2').value = '';
    document.getElementById('input').value = '';
    document.getElementById('currentPlayer').innerText = "Player 1";
    document.getElementById('Attempt').innerText = "0";
    document.getElementById('msg').innerText = "";
    player1Name = "";
    player2Name = "";
    currentPlayer = "";
    cnum = Math.floor(Math.random() * 100) + 1;
    attempt = 0;
}

document.getElementById('singlePlayerBtn').addEventListener('click', function() {
    document.getElementById('playerNames').style.display = 'block';
    document.getElementById('player2').style.display = 'none';
    document.getElementById('gameSection').style.display = 'block';
    document.getElementById('modeSelection').style.display = 'none';
    player1Name = document.getElementById('player1').value || "Player 1";
    currentPlayer = player1Name;
    currentPlayerDisplay.innerHTML = currentPlayer;
});

document.getElementById('multiPlayerBtn').addEventListener('click', function() {
    document.getElementById('playerNames').style.display = 'block';
    document.getElementById('player2').style.display = 'block';
    document.getElementById('gameSection').style.display = 'block';
    document.getElementById('modeSelection').style.display = 'none';
    player1Name = document.getElementById('player1').value || "Player 1";
    player2Name = document.getElementById('player2').value || "Player 2";
    currentPlayer = player1Name;
    currentPlayerDisplay.innerHTML = currentPlayer;
});

function startFireworks() {
    const duration = 3 * 1000;
    const end = Date.now() + duration;
    const frame = () => {
        confetti({
            particleCount: 2,
            spread: 70,
            origin: { y: 0.6 },
        });
        if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
}

subBtn.addEventListener('click', check);
resBtn.addEventListener('click', restart);
backBtn.addEventListener('click', back);