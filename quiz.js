(function() {
    const myQuestions = [
        {
            question: "Which sea creature has three hearts? ",
            answers: {
                a: "Octopus",
                b: "Blue Whale",
                c: "Sea Turtle"
            },
            correctAnswer: "a"
        },
        {
           question: "What is the Italian word for pie? ",
           answers: {
               a: "Donut",
               b: "Pie Cake",
               c: "Pizza",
           },
           correctAnswer: "c"
        },
        {
            question: "Which is the only mammal that cannot jump? ",
            answers: {
                a: "Snake",
                b: "Elephant",
                c: "Kangaroo",
            },
            correctAnswer: "b"
        }
    ];

    function buildQuiz() {
        const output = [];
        

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];

            for(letter in currentQuestion.answers) {
                answers.push(
                    `<label id="${questionNumber}${letter}" href="#">
                        <input type="radio" name="question${questionNumber}" value="${letter}" id="${questionNumber}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            output.push(
                `<div class="slide">
                    <div class="question">${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join("")} </div>
                </div>`
            );
        });

        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll(".answers");

        let numCorrect = 0;

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `label input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
            const answerID = (answerContainer.querySelector(selector) || {}).id;
            const selector1 = `label[id="${answerID}"]`;
            var answerElem = answerContainer.querySelector(selector1);
            const selector2 = `label[id="${questionNumber}${currentQuestion.correctAnswer}"]`;
            var answerElem1 = answerContainer.querySelector(selector2);

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;

                answerElem.style.background = "#70F85A";
                answerElem.style.fontWeight = "900";
            } else {
                answerElem1.style.color="#70F85A";
                answerElem.style.background="#FD2929";
                answerElem1.style.fontWeight ="900";
            }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        if (currentSlide === 0) {
            previousButton.style.display = "none"
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);

    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextsSlide);
})
