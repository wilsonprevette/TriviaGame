//creating function for generating results when submit button is clicked

function getResults(){
    //creating variables for questions/correct responses and number correct/incorrect
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var correct = 0;

    //set if statements for correct answers

    if (question1 === "Halloween 3") {
        correct++;
    }

    if (question1 === "Italy") {
        correct++;
    }

    if (question1 === "Stuart Gordon") {
        correct++;
    }

    if (question1 === "Scream") {
        correct++;
    }

    if (question1 === "Roger Corman") {
        correct++;
    }

    if (question1 === "Mall") {
        correct++;
    }

    if (question1 === "The Howling") {
        correct++;
    }

    if (question1 === "John Carpenter") {
        correct++;
    }

    document.getElementById("results").style.visibility = "visible";
    document.getElementById("numberCorrect").innherHTML = "You got " + correct + " correct.";
}