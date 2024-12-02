'use strict'


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('⛔️ Insere um Numero!');    }

    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉🎉🎉Você Acertou! Parabens';
        document.querySelector('.message')
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347'

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    else if (guess !== Number) {
        displayMessage(guess > secretNumber ? '📈 Muito Alto!' : '📉 Muito Baixo!');
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        displayMessage('💥 Você Perdeu o Jogo!');
        document.querySelector('.score').textContent = 0;
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Comece a adivinhar...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#f3f3f3';

});

