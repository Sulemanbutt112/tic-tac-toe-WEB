let btn = document.querySelectorAll(".gameButton");
let turn = true;
let newbtn = document.querySelector("#new-game");
let resetbtn = document.querySelector("#reset");
let msgArea = document.querySelector(".message-area");
let winner = document.querySelector(".winner");
let count = 0;

let winningSeq = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];



const resetgame = () => {
    turn = true;
    count = 0;
    enableBtns();
    msgArea.classList.add("hidden");
}
const disableBtns = () => {
    for (let i of btn) {
        i.disabled = true;
    }
}
const enableBtns = () => {
    for (let i of btn) {
        i.disabled = false;
        i.innerText = "";
    }
}


btn.forEach((gameButton) => {
    gameButton.addEventListener("click", () => {
        count++;
        console.log(count);
        if (turn) {
            gameButton.innerText = 'O';
            turn = false;
        } else {
            gameButton.innerText = 'X';
            turn = true;
        }
        gameButton.disabled = true;
        checkeWinner();
    });
});


const showWinner = (win) => {
    winner.innerText = `Congratulations! Winner is ${win}`;
    msgArea.classList.remove("hidden");
    disableBtns();
}

const draw = () => {
    winner.innerText = `It's a draw!`
    msgArea.classList.remove("hidden");
    disableBtns();
}

const checkeWinner = () => {
    for (let pattern of winningSeq) {
        let pos1 = btn[pattern[0]].innerText;
        let pos2 = btn[pattern[1]].innerText;
        let pos3 = btn[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos1 === pos3) {
                showWinner(pos1);
            } else if (count === 9) {
                draw();
            }
        }

    }

}

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);