const questions = [
    {   //Question 1
        question: "Where is the Mona Lisa currently located?",
        answers: [
            { text: "Italy", correct: false },
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Brussels", correct: false }
        ]
    },

    {   //Question 2
        question: "Which of these scientists is widely considered to be the father of theoretical computer science?",
        answers: [
            { text: "Alan Turing", correct: true },
            { text: "Albert Einstein", correct: false },
            { text: "Charles Babbage", correct: false },
            { text: "Bill Gates", correct: false },
        ]
    },

    {   //Question 3
        question: "Where is champagne made?",
        answers: [
            { text: "Switzerland", correct: false },
            { text: "Russia", correct: false },
            { text: "France", correct: true },
            { text: "Greece", correct: false }
        ]
    },

    {   //Question 4
        question: "What is the fastest land animal in the world?",
        answers: [
            { text: "Roadrunner", correct: false },
            { text: "Coyote", correct: false },
            { text: "Lion", correct: false },
            { text: "Cheetah", correct: true }
        ]
    },

    {   //Question 5
        question: "How many continents are there?",
        answers: [
            { text: "4", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false },
            { text: "6", correct: false }
        ]
    },

    {   //Question 6
        question: "What planet is closest to the Sun",
        answers: [
            { text: "Earth", correct: false },
            { text: "Venus", correct: false },
            { text: "Mercury", correct: true },
            { text: "Neptune", correct: false }
        ]
    }
];


/*Script*/

/*Question Element*/
const questionElement = document.getElementById("question");

const answerButtonsList = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

/*Start Quiz*/
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;

    /*Text of the next question button when quiz starts*/
    nextButton.innerHTML = "Next";

    /*Show Question function*/
    showQuestion();
}

/*Show the question*/
function showQuestion(){

    resetState();
    let currentQuestion = questions[currentQuestionIndex];

    /*Since index is 0 by default we want the number for the html to be 1, so I added 1 to it;*/
    let questionNo = currentQuestionIndex + 1;

    /*Saying that for the question's inner html text it should show the question number followed by the current question's index and it's question itself*/
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    
    /*For each question's answer....*/
    currentQuestion.answers.forEach(answer => {

        /*...create an html tag(element): button, for each answer*/
        const button = document.createElement("button");

        /*the button's inner html text now equal to the answer text in the json*/
        button.innerHTML = answer.text;

        /*...add the btn classes to the button variable*/
        button.classList.add("btn");

        /*...now appending the (btn classes) to the answerButtonsList list-group*/
        answerButtonsList.appendChild(button);


        /*If answer is correct, then the button's dataset is correct*/
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    
    /*Hide the next question button*/
    nextButton.style.display = "none";

    /*Remove the appended child button elements of the answer buttons list*/
    while(answerButtonsList.firstChild){
        answerButtonsList.removeChild(answerButtonsList.firstChild);
    }
        scoreWrapper.style.justifyContent = "left";
        carCrashImg.style.display = "none";
        idiotSandwichImg.style.display = "none";
        brazilOofImg.style.display = "none";
        mrBean.style.display = "none";
        arsenalDance.style.display = "none";
        stairChad.style.display = "none";
        rickyImg.style.display = "none";
}

/*When user clicks on selected button/answer....*/
function selectAnswer(e){

    /*The selected button element will be placed in the selectedBtn variable*/
    const selectedBtn = e.target;


    /*Checks the selectedBtn's dataset from json to see if it is correct */
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        /*If true, answer is correct. Correct class is added.*/
        selectedBtn.classList.add("correct");
        score++;
    } else {
        /*If false, answer is false. False class is added.*/
        selectedBtn.classList.add("false");
    }
        selectedBtn.style.color = "white";

        /*Pinpoints from the array(json dataset). then for each button of the answer button lists' children, if the dataset when selecting a button is correct, then add the correct class, otherwise add the false class. Lastly, display the next question button after selecting a button to move on to the next question.*/
        Array.from(answerButtonsList.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
}

/*Images based on scores*/

let carCrashImg = document.getElementById("car-crash");
let idiotSandwichImg = document.getElementById("idiot-sandwich");
let brazilOofImg = document.getElementById("brazil-oof");
let mrBean = document.getElementById("mr-bean");
let arsenalDance = document.getElementById("arsenal-dance");
let stairChad = document.getElementById("stair-chad");
let rickyImg = document.getElementById("ricky-roll");

let scoreWrapper = document.getElementById("score-wrapper");

function showScore(){
    /*Reset Quiz*/
    resetState();
    /*Show score and change text of next question button to play again upon quiz completion*/
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
        scoreWrapper.style.justifyContent = "center";
        if(score === 0){
            carCrashImg.style.display = "block";
        } else if (score === 1){
            idiotSandwichImg.style.display = "block";
        } else if (score === 2){
            brazilOofImg.style.display = "block";
        } else if (score === 3){
            mrBean.style.display = "block";
        } else if (score === 4){
            arsenalDance.style.display = "block";
        } else if (score === 5){
            stairChad.style.display = "block";
        } else {
            rickyImg.style.display = "block";
        }
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else {
        startQuiz();
    }
});


startQuiz();

