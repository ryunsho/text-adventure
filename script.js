var sentence = "The quick brown fox jumps over the lazy dog.";
var input;
var startTime, endTime;
var timer = false;
var result;

function setup() {
    input = select("#input"); // https://p5js.org/reference/p5/select/
    result = select("#result");
    input.input(startTimer);
}

function startTimer() {
    if (timer === false) {
        startTime = millis(); // https://p5js.org/reference/p5/millis/
        timer = true;
    }
    if (input.value() === sentence) {
        endTime = millis();
        speed();
        input.style("color", "black");
    }else if (input.value() === sentence.substring(0, input.value().length)) {
        input.style("color", "black");
    }else{
        input.style("color", "red");
    }
}

function speed() {
    var time = (endTime - startTime) / 1000; // time in seconds
    var wpm = (9 / time) * 60; // 9 words in the sentence, calculates wpm
    result.html("Your speed is " + wpm.toFixed(2) + " words per minute.");
    timer = false;
}

function reset() {
    input.value("");
    result.html("");
    timer = false;
}