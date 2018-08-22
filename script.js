// Variables
var jewel1;
var jewel2;
var jewel3;

var scores = {
    target: Math.floor(Math.random() * 100) + 50,
    goals: 0,
    losses: 0
}

var end = scores.target;

// Display
function updateDisplay() {
    console.log("Target score = " + scores.target);
    $(".displayTarget").text(scores.target);
    $(".displayGoals").text(scores.goals);
}

// Display new values
function resetValues() {
    console.log("New game start");
    jewel1 = Math.floor(Math.random() * 15) + 1;
    console.log("Value of jewel 1 = " + jewel1)
    jewel2 = Math.floor(Math.random() * 15) + 1;
    console.log("Value of jewel 2 = " + jewel2)
    jewel3 = Math.floor(Math.random() * 15) + 1;
    console.log("Value of jewel 3 = " + jewel3)
    scores.target = Math.floor(Math.random() * 100) + 50;
    $(".displayTarget").css('color', 'black');
};

resetValues();

// Add score
$(".jewel1").on("click", function () {
    scores.target -= jewel1;
    updateDisplay();
});

$(".jewel2").on("click", function () {
    scores.target -= jewel2;
    updateDisplay();
});

$(".jewel3").on("click", function () {
    scores.target -= jewel3;
    updateDisplay();
});

// End or reset game
$(document).on("click", function() {
    $(".messages").html("")
    end = scores.target
    if (end === 0) {
        $(".message").css('color', 'green');
        resetValues();
        $(".message").text("Score!")
        scores.goals++;
        $(".displayGoals").text(scores.goals)
        updateDisplay();
    } else if (end < 0) {
        $(".message").text("Try again")
        scores.losses++;
        $(".displayLose").text(scores.losses)
        resetValues();
        $(".message").css('color', 'red');
        updateDisplay();
    } else {
        $(".message").text("")
    }

    if (scores.losses > 10) {
        $(".message").css('color', 'red');
        $(".message").text("GAME OVER")
        var reser = setTimeout(location.reload(), 5000)
    }

    if (scores.wins > 10) {
        $(".video").show()
        $(".video").autoplay = true;
        setTimeout(function(){
            $(".video").css("animation", "1s fadeout")
        }, 13000)
        setTimeout(function(){
            $(".video").hide()
        }, 14000)
    }

})