//create start/reset timer button functions
let timer
function start(){
    
}

//create function for generating results when submit button is clicked
function getResults(){
    //creating variables for questions/correct responses and number correct/incorrect
    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    let question4 = document.quiz.question4.value;
    let question5 = document.quiz.question5.value;
    let question6 = document.quiz.question6.value;
    let question7 = document.quiz.question7.value;
    let question8 = document.quiz.question8.value;
    let correct = 0;

    //set if statements for correct answers

    if (question1 == "Halloween 3") {
        correct++;
    }

    if (question1 == "Italy") {
        correct++;
    }

    if (question1 == "Stuart Gordon") {
        correct++;
    }

    if (question1 == "Scream") {
        correct++;
    }

    if (question1 == "Roger Corman") {
        correct++;
    }

    if (question1 == "Mall") {
        correct++;
    }

    if (question1 == "The Howling") {
        correct++;
    }

    if (question1 == "John Carpenter") {
        correct++;
    }

    //making results div visible after submit button is clicked, change message accordingly

    document.getElementById("results").style.visibility = "visible";
    document.getElementById("numberCorrect").innerHTML = "You got" + correct + " correct!";
}