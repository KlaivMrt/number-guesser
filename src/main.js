class BtnHandler {
    constructor() {
        this.btn = document.querySelector("#main button");
        this.paragraph = document.querySelector("#main .message");
        this.input = document.querySelector("#main input");
        this.number = Math.floor(Math.random() * 11);
        this.counter = 3;

        this.playAgain = this.playAgain.bind(this);
        this.reset = this.reset.bind(this);

        this.input.value = "";

        this.btn.addEventListener("click", this.playAgain);
        this.input.addEventListener("keypress", keypress);
    }

    reset() {
        this.number = Math.floor(Math.random() * 11);
        this.counter = 3;
    }

    playAgain() {
        this.btn.textContent = "Check";
        const guessedNum = Number(document.querySelector("#main input").value) ? document.querySelector("#main input").value : 0;
    
        if(this.counter > 0) {
            if(this.number === guessedNum) {
                this.paragraph.textContent = `Correct, ${this.number} is the right number.`
                this.reset();
                return;
            }
            this.paragraph.textContent = `${guessedNum} isn't the right number. You have ${this.counter} attempts.`
            --this.counter;
        } else {
            this.btn.textContent = "Play Again";
            this.paragraph.textContent = `Game over. ${this.number} is the right number. Try again.`
            this.reset();
        }
        this.input.value = "";
    }
}

function keypress(e) {
    // prevent from inputing anything but the numbers 0-9
    if(e.which < 48 || e.which > 57) {
        e.preventDefault();
    }

    // prevent from typing more than 2 digits
    if(e.target.value.length === 2) {
        e.preventDefault();
    }
}


function init() {    
    new BtnHandler();
}

document.addEventListener("DOMContentLoaded", init);
