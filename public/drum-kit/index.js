var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i <= (drumButtons.length - 1); i++) {
    drumButtons[i].addEventListener("click", function() {
        var drum = this.classList[0];

        handleSound(drum);
        buttonAnimation(drum, true);
    });
}

document.addEventListener("keydown", function(event) {
    handleSound(event.key);
    buttonAnimation(event.key);
});

document.addEventListener("keyup", function(event) {
    removeAnimation(event.key);
});

function handleSound(drum) {
    var drum = drum;

    switch (drum) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
    }
}

function buttonAnimation(button, wasClick=false) {
    var buttonPressed = document.querySelector("." + button);
    buttonPressed.classList.add("pressed");

    if (wasClick === true) {
        setTimeout(function() {
            removeAnimation(button);
        }, 100);
    }
}

function removeAnimation(button) {
    var buttonPressed = document.querySelector("." + button);
    buttonPressed.classList.remove("pressed");
}
