var inncorect = 0;
var correct = 0;
var unanswered = 5;

function instruct() {
    $("#question").html("Welcome F1 fans lets test your knowledge of our sport. When the start button is pressed you will have one minute to correctly answer 5 questions");
    $('#remain').html('<button id="start" class="h4 rounded bg-success text-white w-25">' + "Start" + '</button');
};

function question1() {
    var answerChoice = ["One--1", "Two--2", "Three--3", "Four--4"];
    var correctAnswer = "Three--3";
    var timer= 15;
$("#timer").html(timer);
    for (i = 0; i < answerChoice.length; i++) {
        var a = $("<p>");
        a.addClass("answer text-center h5 rounded mycolor w-75");
        a.attr("data-name", answerChoice[i]);
        a.text(answerChoice[i]);
        $("#answers").append(a);
    }
    $(document).on("click", ".answer", checkAnswer);

    $("#question").html("How many tire compounds does Pirelli make avialible for each race?");
    function checkAnswer() {
        var userGuess = $(this).attr("data-name");
        if (userGuess === correctAnswer) {
            correct++;
            unanswered--;
            answrC();
        } else {
            inncorect++;
            unanswered--;
            answrW();
        };
    };
    function answrC(){ 
        $("#question").html("Correct!!!!");
        $("#question").addClass("h1 text-white");
        $("#answers").html("Pirelli brings "+ correctAnswer + " compounds");
        $("#remain").html("<img src='../images/tire-compounds.jpg'>")
        setTimeout( function() {  question2();}, 5000);
    
    };
    function answrW(){
        $("#question").html("Incorrect!!!!");
        $("#question").addClass("h1 text-white");
        $("#answers").html("Pirelli brings "+ correctAnswer + " compounds");
        $("#remain").html("<img src='../assets/images/tire-compounds.jpg'>") 
        setTimeout( function() {  question2();}, 5000);
    };
};
function question2() {
    var answerChoice = ["Lance Stroll", "Lewis Hamilton", "Matt Verstappen", "Charles Leclerc"];
    var correctAnswer = "Lewis Hamilton";
    $("#answers").empty();
    $("#remain").empty();
    for (i = 0; i < answerChoice.length; i++) {
        var a = $("<button>");
        a.addClass("answer text-center h5 rounded mycolor w-75");
        a.attr("data-name", answerChoice[i]);
        a.text(answerChoice[i]);
        $("#answers").append(a);


    }
    $(document).on("click", ".answer", checkAnswer);
    $("#question").html("Who was last years champion?");
    function checkAnswer() {
        var userGuess = $(this).attr("data-name");
        if (userGuess === correctAnswer) {
            correct++;
            unanswered--;
            answrC();
        } else {
            inncorect++;
            unanswered--;
            answrW();
        };
    };
    function answrC(){
        $("#question").html("Correct!!!!");
        $("#question").addClass("h1 text-white");
        $("#answers").html("Pirelli brings "+ correctAnswer + " compounds");
        $("#remain").html("<img src='/assets/images/tire-compounds.jpg'>")
        setTimeout( function() { question3();}, 5000);
    
    }
    function answrW(){
        $("#question").html("Incorrect!!!!");
        $("#question").addClass("answer text-center h5 rounded mycolor w-75");
        $("#answers").html("Pirelli brings "+ correctAnswer + " compounds");
        $("#remain").html("<img src='../images/tire-compounds.jpg'>") 
        setTimeout( function() {  question3();}, 5000);
    };
}

function question3() {
    var answerChoice = ["Ferrari", "Williams", "Mercedes", "McLaren"];
    var correctAnswer = "Ferrari";
    $("#answers").empty();
    $("#remain").empty();
    for (i = 0; i < answerChoice.length; i++) {
        var a = $("<button>");
        a.addClass("answer text-center h5 rounded  mycolor w-75");
        a.attr("data-name", answerChoice[i]);
        a.text(answerChoice[i]);
        $("#answers").append(a);
    }
    $(document).on("click", ".answer", checkAnswer);
    $("#question").html("What manufacture has the most Constructors' World Championships?");
    function checkAnswer() {
        var userGuess = $(this).attr("data-name");
        if (userGuess === correctAnswer) {
            correct++;
            unanswered--;
            answrC();
        } else {
            inncorect++;
            unanswered--;
            answrW();
        };
    };
    function answrC(){
        $("#question").html("Correct!!!!");
        $("#question").addClass("h1 text-white");
        $("#answers").html("Pirelli brings "+ correctAnswer + " compounds");
        $("#remain").html("<img src='../images/tire-compounds.jpg'>")
        setTimeout( function() { question4();}, 5000);
    
    }
    function answrW(){
        $("#question").html("Incorrect!!!!");
        $("#question").addClass("h1 text-white");
        $("#answers").html("Pirelli brings "+ correctAnswer + " compounds");
        $("#remain").html("<img src='../images/tire-compounds.jpg'>") 
        setTimeout( function() { question4();}, 5000);
    };
};

function question4() {
    var answerChoice = ["Spanish", "Hungarian", "Austrian", "Monaco"];
    var correctAnswer = "Monaco";
    $("#remain").empty();
    $("#answers").empty();
    for (i = 0; i < answerChoice.length; i++) {
        var a = $("<button>");
        a.addClass("answer text-center h5 rounded  mycolor w-75");
        a.attr("data-name", answerChoice[i]);
        a.text(answerChoice[i]);
        $("#answers").append(a);

    }
    $(document).on("click", ".answer", checkAnswer);
    $("#question").html("What Grad Prix is usually held on Memorial Day Weekend?");
    function checkAnswer() {
        var userGuess = $(this).attr("data-name");
        if (userGuess === correctAnswer) {
            correct++;
            unanswered--;
            answrC();
        } else {
            inncorect++;
            unanswered--;
            answrW();
        };
    };
    function answrC(){
        $("#question").html("Correct!!!!");
        $("#question").addClass("h1 text-white");
        $("#answers").html("Pirelli brings "+ correctAnswer + " compounds");
        $("#remain").html("<img src='../images/tire-compounds.jpg'>")
        setTimeout( function() {  question5();}, 5000);
    
    }
    function answrW(){
        $("#question").html("Incorrect!!!!");
        $("#question").addClass("h1 text-white");
        $("#answers").html("Pirelli brings "+ correctAnswer + " compounds");
        $("#remain").html("<img src='../images/tire-compounds.jpg'>") 
        setTimeout( function() { question5();}, 5000);
    };
}
function question5() {
    var answerChoice = ["0.50 sec", "3.12 sec", "1.92 sec", "2.0 sec"];
    var correctAnswer = "1.92 sec";
    $("#answers").empty();
    $("#remain").empty();
    for (i = 0; i < answerChoice.length; i++) {
        var a = $("<button>");
        a.addClass("answer text-center h5 rounded m-3 mycolor w-75");
        a.attr("data-name", answerChoice[i]);
        a.text(answerChoice[i]);
        $("#answers").append(a);

    }
    $(document).on("click", ".answer", checkAnswer);
    $("#question").html("What is the fastest Pit Stop time ever recorded in F1?");
    function checkAnswer() {
        var userGuess = $(this).attr("data-name");
        if (userGuess === correctAnswer) {
            correct++;
            unanswered--;
            answrC();
        } else {
            inncorect++;
            unanswered--;
           answrW();
        };
    };
    function answrC(){
        $("#question").html("Correct!!!!");
        $("#question").addClass("h1 text-white");
        $("#answers").html("Pirelli brings "+ correctAnswer + " compounds");
        $("#remain").html("<img src='../images/tire-compounds.jpg'>")
    
    }
    function answrW(){
        $("#question").html("Incorrect!!!!");
        $("#question").addClass("h1 text-white");
        $("#answers").html("Pirelli brings "+ correctAnswer + " compounds");
        $("#remain").html("<img src='../images/tire-compounds.jpg'>") 
    };
}

question1();







