var inncorect=0;
var correct=0;
var unanswered=5;

function instruct(){
$("#question").html("Welcome F1 fans lets test your knowledge of our sport. When the start button is pressed you will have one minute to correctly answer 5 questions");
$('#remain').html('<button id="start" class="h4 rounded bg-success text-white w-25">'+"Start"+'</button');
};

function question1(){
    var answerChoice=["One--1","Two--2","Three--3","Four--4"];
    var correctAnswer= "Three--3";
    
  
    for (i = 0; i < answerChoice.length; i++) {
        var a = $("<button>");
          // Adds a class of movie to our button
          a.addClass("answer rounded m-3 mycolor");
          // Added a data-attribute
          a.attr("data-name", answerChoice[i]);
          // Provided the initial button text
          a.text(answerChoice[i]);
          // Added the button to the buttons-view div
          $("#answers").append(a);
    }
    $(document).on("click", ".answer", checkAnswer);

    $("#question").html("How many tire compounds does Pirelli make avialible for each race?");
function checkAnswer(){
    var userGuess=$(this).attr("data-name");
    if(userGuess === correctAnswer){
        correct++;
        unanswered--;
        question2();
    }else{
        inncorect++;
        unanswered--;
        question2();
    };
};
};
function question2(){
    var answerChoice=["Lance Stroll","Lewis Hamilton","Matt Verstappen","Charles Leclerc"];
    var correctAnswer= "Lewis Hamilton";
    $("#answers").empty();
    for (i = 0; i < answerChoice.length; i++) {
        var a = $("<button>");
          // Adds a class of movie to our button
          a.addClass("answer rounded m-3 mycolor");
          // Added a data-attribute
          a.attr("data-name", answerChoice[i]);
          // Provided the initial button text
          a.text(answerChoice[i]);
          // Added the button to the buttons-view div
          $("#answers").append(a);
          
        
    }
    $(document).on("click", ".answer", checkAnswer);
    $("#question").html("Who was last years champion?");
    function checkAnswer(){
        var userGuess=$(this).attr("data-name");
        if(userGuess === correctAnswer){
            correct++;
            unanswered--;
            question3();
        }else{
            inncorect++;
            unanswered--;
            question3();
        };
    };
}

function question3(){
    var answerChoice=["Ferrari","Williams","Mercedes","McLaren"];
    var correctAnswer= "Ferrari";
    $("#answers").empty();
    for (i = 0; i < answerChoice.length; i++) {
        var a = $("<button>");
          // Adds a class of movie to our button
          a.addClass("answer rounded m-3 mycolor");
          // Added a data-attribute
          a.attr("data-name", answerChoice[i]);
          // Provided the initial button text
          a.text(answerChoice[i]);
          // Added the button to the buttons-view div
          $("#answers").append(a);     
    }
    $(document).on("click", ".answer", checkAnswer);
    $("#question").html("What manufacture has the most Constructors' World Championships?");
    function checkAnswer(){
        var userGuess=$(this).attr("data-name");
        if(userGuess === correctAnswer){
            correct++;
            unanswered--;
            question4();
        }else{
            inncorect++;
            unanswered--;
            question4();
        };
    };
};

function question4(){
    var answerChoice=["Spanish","Hungarian","Austrian","Monaco"];
    var correctAnswer= "Monaco";
    $("#answers").empty();
    for (i = 0; i < answerChoice.length; i++) {
        var a = $("<button>");
          a.addClass("answer rounded m-3 mycolor");
          a.attr("data-name", answerChoice[i]);
          a.text(answerChoice[i]);
          $("#answers").append(a);
        
    }
    $(document).on("click", ".answer", checkAnswer);
    $("#question").html("What Grad Prix is usually held on Memorial Day Weekend?");
    function checkAnswer(){
        var userGuess=$(this).attr("data-name");
        if(userGuess === correctAnswer){
            correct++;
            unanswered--;
            question5();
        }else{
            inncorect++;
            unanswered--;
            question5();
        };
    };
}
function question5(){
    var answerChoice=["0.50 sec","3.12 sec","1.92 sec","2.0 sec"];
    var correctAnswer= "1.92 sec";
    $("#answers").empty();
    for (i = 0; i < answerChoice.length; i++) {
        var a = $("<button>");
          a.addClass("answer rounded m-3 mycolor");
          a.attr("data-name", answerChoice[i]);
          a.text(answerChoice[i]);
          $("#answers").append(a);
        
    }
    $(document).on("click", ".answer", checkAnswer);
    $("#question").html("What is the fastest Pit Stop time ever recorded in F1?");
    function checkAnswer(){
        var userGuess=$(this).attr("data-name");
        if(userGuess === correctAnswer){
            correct++;
            unanswered--;
            question3();
        }else{
            inncorect++;
            unanswered--;
            question3();
        };
    };
}

question1();







