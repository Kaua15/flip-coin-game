const flipBtn = document.querySelector('.flipCoinBtn');
const resetBtn = document.querySelector('.resetBtn');
const coin = document.querySelector('.coin');
const score = document.querySelectorAll('.score span');
let heads = 0, tails = 0;


flipBtn.addEventListener('click', () => {
    let turn = Math.floor(Math.random() * 2);
    coin.style.animation = 'none';

    if (turn) {
        setTimeout(() => {
            coin.style.animation = 'fliptails 3s forwards';
        }, 100)
        tails++;
    } else {
        setTimeout(() => {
            coin.style.animation = 'flipheads 3s forwards';
        }, 100)
        heads++;
    }
    updateScore();

    disableButton();
    return;
});

resetBtn.addEventListener('click', () => {
    coin.style.animation = 'none';
    flipBtn.disabled = false;
    heads = 0;
    tails = 0;
    score[0].textContent = `Heads: ${heads}`;
    score[1].textContent = `Tails: ${tails}`;
});

function updateScore() {
    setInterval(() => {
        score[0].textContent = `Heads: ${heads}`;
        score[1].textContent = `Tails: ${tails}`;
    }, 3500);
}

function disableButton() {
    flipBtn.disabled = true;
    flipBtn.style.opacity = 0.5;
    flipBtn.style.cursor = 'arrow';

    setInterval(() => {
        flipBtn.disabled = false;
        flipBtn.style.opacity = 1;
        flipBtn.style.cursor = 'pointer';
    }, 3500);
}