// Variables
var jewel1;
var jewel2;
var jewel3;

var scores = {
    current: 0,
    target: Math.floor(Math.random() * 100) + 50,
    goals: 0
}

// Display
function updateDisplay() {
    console.log("Target score = " + scores.target);
    console.log("Current score = " + scores.current);
    $(".displayTarget").text(scores.target);
    $(".displayCurrent").text(scores.current);
    $(".displayGoals").text(scores.goals);
}

// Display new values
function newValues() {
    jewel1 = Math.floor(Math.random() * 10) + 1;
    console.log("New value of jewel1 = " + jewel1)
    jewel2 = Math.floor(Math.random() * 10) + 1;
    console.log("New value of jewel2 = " + jewel2)
    jewel3 = Math.floor(Math.random() * 0) + 1;
    console.log("New value of jewel3 = " + jewel3)
};

newValues();

console.log("New value of jewel1 = " + jewel1);

// Add score
$(".jewel1").on("click", function () {
    scores.current = scores.current + jewel1;
    updateDisplay();
    console.log("Updated score: " + scores.current)
});


$(".jewel2").on("click", function () {
    scores.current = scores.current + jewel2;
    updateDisplay();
    console.log("Updated score: " + scores.current)
});

$(".jewel3").on("click", function () {
    scores.current = scores.current + jewel3;
    updateDisplay();
    console.log("Updated score: " + scores.current)
});


// When to stop the game
if (scores.current === scores.target) {
    newValues();
    scores.goals++;
    updateDisplay();
} else if (scores.current > scores.target) {
    newValues();
    updateDisplay();
}

// $(".displayCurrent").text(scores.current);
