var rollButton = document.querySelector(".roll");

rollButton.addEventListener("click", roll);


function roll() {
    var player1Dice = document.querySelector(".img1");
    var player2Dice = document.querySelector(".img2");
    var heading = document.querySelector("h1");

    var player1Number = Math.floor((Math.random() * 6) + 1);
    var player2Number = Math.floor((Math.random() * 6) + 1);

    player1Dice.setAttribute("src", "./images/dice" + player1Number + ".png");
    player2Dice.setAttribute("src", "./images/dice" + player2Number + ".png");

    if (player1Number > player2Number) {
        heading.innerHTML = "🚩 Player one wins!";
    } else if (player2Number > player1Number) {
        heading.innerHTML = "Player two wins! 🚩";
    } else {
        heading.innerHTML = "Draw!";
    }

}
