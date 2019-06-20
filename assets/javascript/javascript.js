var incorrect = 0;
var correct = 0;
var unanswered = 5;
var questionTime = 12;
var firstTime = true;
var decrease;
function instruct() {
    $("#question").html("Welcome F1 fans lets test your knowledge of our sport. When the start button is pressed you will have one minute to correctly answer 5 questions");
    $('#remain').html('<button id="start" class="h4 rounded bg-success text-white w-25">' + "Start" + '</button');
    $(document).on("click", "#start", question1);
};

function question1() {
    var answerChoice = ["One--1", "Two--2", "Three--3", "Four--4"];
    var correctAnswer = "Three--3";
    questionTime = 12;
    $("#timer").html(questionTime);
    let decrease = setInterval(depend, 1000);
    console.log("setInterval decrease: " + decrease);
    $("#remain").empty();
    function depend() {
        console.log("depend decrease: " + decrease);

        questionTime--;
        $("#timer").text(questionTime);
        console.log("questionTime: " + questionTime);
        if (questionTime === 0) {
            console.log("clearInterval decrease: " + decrease);

            clearInterval(decrease);
            noAnswer1();
        }
    }
    for (i = 0; i < answerChoice.length; i++) {
        var a = $("<p>");
        a.addClass("answer1 text-center m-2 h5 rounded mycolor w-75");
        a.attr("data-name", answerChoice[i]);
        a.text(answerChoice[i]);
        $("#answers").append(a);
    }
    //$(document).on("click", ".answer1", checkAnswer1);
    if (firstTime) $(document).on("click", ".answer1", checkAnswer1);
    console.log("a1: firsttime " + firstTime);
    $("#question").html("How many tire compounds does Pirelli make avialible for each race?");
    function checkAnswer1() {
        console.log("checkAnswer1");
        var userGuess = $(this).attr("data-name");
        if (userGuess === correctAnswer) {
            correct++;
            unanswered--;
            answrC1();
        } else {
            incorrect++;
            unanswered--;
            answrW1();
        };
        console.log("incorrect: " + incorrect);
        console.log("unanswered: " + unanswered);

    };
    function answrC1() {
        console.log("clearInterval decrease: " + decrease);
        clearInterval(decrease);
        $("#question").html("Correct!!!!");
        $("#question").removeClass("text-danger h5");
        $("#question").addClass("text-white h1 ");
        $("#answers").html("Pirelli brings " + correctAnswer + " compounds");
        $("#remain").html("<img src='assets/images/tire-compounds.jpg' width='250px' height='225px'>")
        setTimeout(function () { question2(); }, 5000);

    };
    function answrW1() {
        console.log("clearInteval decrease: " + decrease);
        clearInterval(decrease);
        $("#question").html("Incorrect!!!!");
        $("#question").removeClass("text-danger h5");
        $("#question").addClass("text-white h1 ");
        $("#answers").html("Pirelli brings " + correctAnswer + " compounds");
        $("#remain").html("<img src='assets/images/tire-compounds.jpg' width='250px' height='225px'>")
        setTimeout(function () { question2(); }, 5000);
    };
    function noAnswer1() {
        $("#question").html("Times Up!!!!");
        $("#question").removeClass("text-danger h5");
        $("#question").addClass("text-white h1 ");
        $("#answers").html("Pirelli brings " + correctAnswer + " compounds");
        $("#remain").html("<img src='assets/images/tire-compounds.jpg' width='250px' height='225px'>")
        setTimeout(function () { question2(); }, 5000);
    };
};
function question2() {
    var answerChoice = ["Lance Stroll", "Lewis Hamilton", "Matt Verstappen", "Charles Leclerc"];
    var correctAnswer = "Lewis Hamilton";
    questionTime = 12;
    $("#timer").html(questionTime);
    let decrease = setInterval(depend, 1000);
    console.log("decrease: " + decrease);

    $("#question").removeClass("text-white h1");
    $("#question").addClass("text-danger h5 ");
    $("#answers").empty();
    $("#remain").empty();
    function depend() {
        console.log("depend decrease: " + decrease);

        questionTime--;
        $("#timer").text(questionTime);
        console.log("questionTime: " + questionTime);
        if (questionTime === 0) {
            console.log("clearInteval decrease: " + decrease);

            clearInterval(decrease);
            noAnswer2();
        }
    }
    for (i = 0; i < answerChoice.length; i++) {
        var a = $("<p>");
        a.addClass("answer2 text-center h5 m-3 rounded mycolor w-75");
        a.attr("data-name", answerChoice[i]);
        a.text(answerChoice[i]);
        $("#answers").append(a);


    }
    if (firstTime) $(document).on("click", ".answer2", checkAnswer2);
    console.log("a2: firsttime " + firstTime);

    $("#question").html("Who was last years champion?");
    function checkAnswer2() {
        console.log("checkAnwers2");

        var userGuess = $(this).attr("data-name");
        if (userGuess === correctAnswer) {
            correct++;
            unanswered--;
            answrC2();
        } else {
            incorrect++;
            unanswered--;
            answrW2();
        };
        console.log("incorrect: " + incorrect);
        console.log("unanswered: " + unanswered);
    };
    function answrC2() {
        console.log("clearInteval decrease: " + decrease);

        clearInterval(decrease);
        $("#question").html("Correct!!!!");
        $("#question").removeClass("text-danger h5");
        $("#question").addClass("text-white h1 ");
        $("#answers").html("Last years champion was " + correctAnswer);
        $("#remain").html("<img src='assets/images/Lewis-Hamilton.jpg'width='225px' height='225px'>")
        setTimeout(function () { question3(); }, 5000);

    }
    function answrW2() {
        console.log("clearInteval decrease: " + decrease);

        clearInterval(decrease);
        $("#question").html("Incorrect!!!!");
        $("#question").removeClass("text-danger h5");
        $("#question").addClass("text-white h1 ");
        $("#answers").html("Last years champion was " + correctAnswer);
        $("#remain").html("<img src='assets/images/Lewis-Hamilton.jpg'width='225px' height='225px'>")
        setTimeout(function () { question3(); }, 5000);
    };
    function noAnswer2() {
        $("#question").html("Times Up!!!!");
        $("#question").removeClass("text-danger h5");
        $("#question").addClass("text-white h1 ");
        $("#answers").html("Last years champion was " + correctAnswer);
        $("#remain").html("<img src='assets/images/Lewis-Hamilton.jpg'width='225px' height='225px'>")
        setTimeout(function () { question3(); }, 5000);
    };

}

function question3() {
    var answerChoice = ["Ferrari", "Williams", "Mercedes", "McLaren"];
    var correctAnswer = "Ferrari";
    var questionTime = 12;
    $("#timer").html(questionTime);
    let decrease = setInterval(depend, 1000);
    console.log("setInteval decrease: " + decrease);

    $("#question").removeClass("text-white h1");
    $("#question").addClass("text-danger h5 ");
    $("#answers").empty();
    $("#remain").empty();
    function depend() {
        console.log("depend decrease: " + decrease);

        questionTime--;
        $("#timer").text(questionTime);
        console.log("questionTime: " + questionTime);
        if (questionTime === 0) {
            console.log("clearInteval decrease: " + decrease);

            clearInterval(decrease);
            noAnswer3();
        }
    }
    for (i = 0; i < answerChoice.length; i++) {
        var a = $("<p>");
        a.addClass("answer3 text-center h5 m-3 rounded  mycolor w-75");
        a.attr("data-name", answerChoice[i]);
        a.text(answerChoice[i]);
        $("#answers").append(a);
    }
    if (firstTime) $(document).on("click", ".answer3", checkAnswer3);
    console.log("a3: firsttime " + firstTime);

    $("#question").html("What manufacture has the most Constructors' World Championships?");
    function checkAnswer3() {
        console.log("checkAnswer3");
        var userGuess = $(this).attr("data-name");
        if (userGuess === correctAnswer) {
            correct++;
            unanswered--;
            answrC3();
        } else {
            incorrect++;
            unanswered--;
            answrW3();
        };
        console.log("incorrect: " + incorrect);
        console.log("unanswered: " + unanswered);
    };
    function answrC3() {
        console.log("clearInteval decrease: " + decrease);

        clearInterval(decrease);
        $("#question").html("Correct!!!!");
        $("#question").removeClass("text-danger h5");
        $("#question").addClass("text-white h1 ");
        $("#answers").html(correctAnswer + " has the most Constructors' World Championships");
        $("#remain").html("<img src='assets/images/ferrari.jpg'width='225px' height='225px'>")
        setTimeout(function () { question4(); }, 5000);

    }
    function answrW3() {
        console.log("clearInteval decrease: " + decrease);

        clearInterval(decrease);
        $("#question").html("Incorrect!!!!");
        $("#question").removeClass("text-danger h5");
        $("#question").addClass("text-white h1 ");
        $("#answers").html(correctAnswer + " has the most Constructors' World Championships");
        $("#remain").html("<img src='assets/images/ferrari.jpg'width='225px' height='225px'>")
        setTimeout(function () { question4(); }, 5000);
    };
    function noAnswer3() {
        $("#question").html("Times Up!!!!");
        $("#question").removeClass("text-danger h5");
        $("#question").addClass("text-white h1 ");
        $("#answers").html(correctAnswer + " has the most Constructors' World Championships");
        $("#remain").html("<img src='assets/images/ferrari.jpg'width='225px' height='225px'>")
        setTimeout(function () { question4(); }, 5000);
    };

};
function question4() {
    var answerChoice = ["Spanish", "Hungarian", "Austrian", "Monaco"];
    var correctAnswer = "Monaco";
    var questionTime = 12;
    $("#timer").html(questionTime);
    let decrease = setInterval(depend, 1000);
    console.log("setInteval decrease: " + decrease);

    $("#question").removeClass("text-white h1");
    $("#question").addClass("text-danger h5 ");
    $("#remain").empty();
    $("#answers").empty();
    function depend() {
        console.log("depend decrease: " + decrease);

        questionTime--;
        $("#timer").text(questionTime);
        console.log("questionTime: " + questionTime);
        if (questionTime === 0) {
            console.log("clearInteval decrease: " + decrease);

            clearInterval(decrease);
            noAnswer4();
        }
    };
    for (i = 0; i < answerChoice.length; i++) {
        var a = $("<p>");
        a.addClass("answer4 text-center h5 rounded m-3  mycolor w-75");
        a.attr("data-name", answerChoice[i]);
        a.text(answerChoice[i]);
        $("#answers").append(a);

    }
    if (firstTime) $(document).on("click", ".answer4", checkAnswer4);
    console.log("a4: firsttime " + firstTime);

    $("#question").html("What Grad Prix is usually held on Memorial Day Weekend?");
    function checkAnswer4() {
        console.log("checkAnswer4");

        var userGuess = $(this).attr("data-name");
        if (userGuess === correctAnswer) {
            correct++;
            unanswered--;
            answrC4();
        } else {
            incorrect++;
            unanswered--;
            answrW4();
        };
        console.log("incorrect: " + incorrect);
        console.log("unanswered: " + unanswered);
    };
    function answrC4() {
        console.log("clearInteval decrease: " + decrease);

        clearInterval(decrease);
        $("#question").html("Correct!!!!");
        $("#question").removeClass("text-danger h5");
        $("#question").addClass("text-white h1 ");
        $("#answers").html("The " + correctAnswer + " Grad Prix is usually held on Memorial Day Weekend");
        $("#remain").html("<img src='assets/images/grand-prix.jpg'width='225px' height='225px'>")
        setTimeout(function () { question5(); }, 5000);

    }
    function answrW4() {
        console.log("clearInteval decrease: " + decrease);

        clearInterval(decrease);
        $("#question").html("Incorrect!!!!");
        $("#question").removeClass("text-danger h5");
        $("#question").addClass("text-white h1 ");
        $("#answers").html("The " + correctAnswer + " Grad Prix is usually held on Memorial Day Weekend");
        $("#remain").html("<img src='assets/images/grand-prix.jpg'width='225px' height='225px'>")
        setTimeout(function () { question5(); }, 5000);
    };
    function noAnswer4() {
        $("#question").html("Times Up!!!!");
        $("#question").removeClass("text-danger h5");
        $("#question").addClass("text-white h1 ");
        $("#answers").html("The " + correctAnswer + " Grad Prix is usually held on Memorial Day Weekend");
        $("#remain").html("<img src='assets/images/grand-prix.jpg'width='225px' height='225px'>")
        setTimeout(function () { question5(); }, 5000);
    };
}
function question5() {
    var answerChoice = ["0.50 sec", "3.12 sec", "1.92 sec", "2.0 sec"];
    var correctAnswer = "1.92 sec";
    var questionTime = 12;
    $("#timer").html(questionTime);
    let decrease = setInterval(depend, 1000);
    console.log("setInteval decrease: " + decrease);

    $("#question").removeClass("text-white h1");
    $("#question").addClass("text-danger h5 ");
    $("#answers").empty();
    $("#remain").empty();
    function depend() {
        console.log("depend decrease: " + decrease);

        questionTime--;
        $("#timer").text(questionTime);
        console.log("questionTime: " + questionTime);
        if (questionTime === 0) {
            console.log("clearInteval decrease: " + decrease);

            clearInterval(decrease);
            noAnswer5();
        }
    }
    for (i = 0; i < answerChoice.length; i++) {
        var a = $("<p>");
        a.addClass("answer5 text-center h5 rounded m-3 mycolor w-75");
        a.attr("data-name", answerChoice[i]);
        a.text(answerChoice[i]);
        $("#answers").append(a);

    }
    if (firstTime) $(document).on("click", ".answer5", checkAnswer5);
    console.log("a5: firsttime " + firstTime);

    $("#question").html("What is the fastest Pit Stop time ever recorded in F1?");
    function checkAnswer5() {
        console.log("checkAnswer5");
        var userGuess = $(this).attr("data-name");
        if (userGuess === correctAnswer) {
            correct++;
            unanswered--;
            answrC5();
        } else {
            incorrect++;
            unanswered--;
            answrW5();
        };
        console.log("incorrect: " + incorrect);
        console.log("unanswered: " + unanswered);
    };
    function answrC5() {
        console.log("clearInteval decrease: " + decrease);

        clearInterval(decrease);
        $("#question").html("Correct!!!!");
        $("#question").removeClass("text-danger h5");
        $("#question").addClass("text-white h1 ");
        $("#answers").html("The fastest recorded Pit Stop was " + correctAnswer);
        $("#remain").html("<img src='assets/images/pit-stop.jpg'width='225px' height='225px'>")
        setTimeout(function () { results(); }, 5000);

    }
    function answrW5() {
        console.log("clearInteval decrease: " + decrease);

        clearInterval(decrease);
        $("#question").html("Incorrect!!!!");
        $("#question").removeClass("text-danger h5");
        $("#question").addClass("text-white h1 ");
        $("#answers").html("The fastest recorded Pit Stop was " + correctAnswer);
        $("#remain").html("<img src='assets/images/pit-stop.jpg'width='225px' height='225px'>")
        setTimeout(function () { results(); }, 5000);
    };
    function noAnswer5() {
        $("#question").html("Times Up!!!!");
        $("#question").removeClass("text-danger h5");
        $("#question").addClass("text-white h1 ");
        $("#answers").html("The fastest recorded Pit Stop was " + correctAnswer);
        $("#remain").html("<img src='assets/images/pit-stop.jpg'width='225px' height='225px'>")
        setTimeout(function () { results(); }, 5000);
    };
}
function results() {
    $("#remain").empty();
    $("#question").html("You crossed the finish line your results are as follows");
    $("#question").removeClass("text-danger h5");
    $("#question").addClass("text-white h1 ");
    $("#answers").html("Correct: " + correct + "<br>" +
        "Incorrect: " + incorrect + "<br>" + "Unanswered " + unanswered)
    $("#answers").addClass("text-danger h3 test")
    $("#remain").html("<button id='restart'>Restart</button>")
    $(document).on("click", "#restart", restart);

};
function restart() {
    incorrect = 0;
    correct = 0;
    unanswered = 5;
    console.log("incorrect: " + incorrect);
    console.log("correct: " + correct);
    console.log("unanswered: " + unanswered);
    $("#questions").empty();
    $("#answers").empty();
    $("#question").removeClass("text-white h1");
    $("#question").addClass("text-danger h5 ");
    $("#answers").removeClass("text-danger h3 test");
    firstTime = false;
    question1();
};

instruct();






