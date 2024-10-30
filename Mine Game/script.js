let score = document.querySelector(".score");
let scoreValue = 100;
let mineBoxes = document.querySelectorAll(".inner-box");
let holdBoxes = document.querySelector(".hold-boxes");
let checks;
let resultAnnounce = document.querySelector(".result-announce");
let buttonReset = document.querySelector(".reset-game");




function boomornot(box) {

    const generate = Math.floor(Math.random() * 10) + 1;
    const hiddenNumber = box.querySelector(".hidden-number");
    const imageResult = box.querySelector("#dynamic-image");

    let currentScore = Number(score.innerHTML);

    if (generate > 5) {
        hiddenNumber.innerHTML = generate;
        imageResult.src = "images/bomb.png";
        imageResult.classList.add("visible");
        currentScore -= 50;
        score.innerHTML = currentScore;  
        checks = false;
        resultAnnounce.innerHTML = "You lost the game!";
        mineBoxes.forEach(function(box) {
            box.style.pointerEvents = "none";
        });
    } else {
        hiddenNumber.innerHTML = '';
        currentScore += scoreValue;
        score.innerHTML = currentScore;  
        imageResult.src = "images/diamond.webp";
        imageResult.classList.add("visible");
        checks = true;
        resultAnnounce.innerHTML = "nice catch!";
        box.classList.add("remove-cursor");
    }
    

    localStorage.setItem("savedScore", currentScore)
    score.innerHTML = localStorage.getItem("savedScore");
  
}




// Attach event listeners to each box
mineBoxes.forEach((box) => {
    box.addEventListener('click', function() {
        boomornot(box);
        if (checks === false) {
            console.log("Player lost the game");
        } else if (checks === true) {
            console.log("Player won the game and can continue");
        }

    
    });
});

document.addEventListener("DOMContentLoaded", function() {

    if (localStorage.getItem("savedScore")) {
        score.innerHTML = localStorage.getItem("savedScore");
        console.log(localStorage.getItem("savedScore"));
    } else {
        score.innerHTML = 0;
    }
})
