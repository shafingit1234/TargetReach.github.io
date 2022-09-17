'use strict'
const scorePlayer1 = document.querySelector('.ply1');
const scorePlayer2 = document.querySelector('.ply2');
// console.log(scorePlayer1);
// console.log(scorePlayer2);
const btnPlayer1 = document.querySelector('#btn1');
const btnPlayer2 = document.querySelector('#btn2');
const reset = document.querySelector('.reset');
let currScorePlayer1 = 0;
let currScorePlayer2 = 0;
let flag = 1;
var targetValue = 100;
btnPlayer1.addEventListener('click', function () {
    if (flag == 0)
    {
        alert('Wrong Player');
        return;
    }
    flag = 0;
    currScorePlayer1 += Math.trunc(Math.random() * 10) + 1;
    scorePlayer1.textContent = currScorePlayer1;
    if (currScorePlayer1 >= targetValue)
    {
        alert(`Player 1 won with a score of ${currScorePlayer1}`);
        rst();
    }
});
btnPlayer2.addEventListener('click', function () {
    if (flag == 1)
    {
        alert('Wrong Player');
        return;
    }
    flag = 1;
    currScorePlayer2 += Math.trunc(Math.random() * 10) + 1;
    scorePlayer2.textContent = currScorePlayer2;
    if (currScorePlayer2 >= targetValue)
    {
        alert(`Player 2 won with a score of ${currScorePlayer2}`);
        rst();
    }
});
reset.addEventListener('click', function () {
    currScorePlayer1 = 0;
    currScorePlayer2 = 0;
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
    flag = 1;
});
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('#my-modal');
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
function rst()
{
    currScorePlayer1 = 0;
    currScorePlayer2 = 0;
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
    flag = 1;
}
function openModal()
{
    modal.style.display = 'block';
}
function closeModal()
{
    modal.style.display = 'none';
}
function outsideClick(e) {
    if (e.target == modal)
    {
        modal.style.display = 'none';
    }
}