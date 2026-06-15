const startButton = document.querySelector("#startButton");
const backToStartButton = document.querySelector("#backToStartButton");

const startScreen = document.querySelector("#startScreen");
const questionScreen = document.querySelector("#questionScreen");
const resultScreen = document.querySelector("#resultScreen");

const progress = document.querySelector("#progress");
const questionText = document.querySelector("#questionText");
const answerList = document.querySelector("#answerList");

const resultList = document.querySelector("#resultList");
const searchButton = document.querySelector("#searchButton");

let currentQuestionIndex = 0;
let userAnswers = {};

function showScreen(targetScreen) {
    startScreen.classList.remove("active");
    questionScreen.classList.remove("active");
    resultScreen.classList.remove("active");

    targetScreen.classList.add("active");
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    questionText.textContent = currentQuestion.text;
    progress.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;

    answerList.innerHTML = "";

    currentQuestion.options.forEach(function (option) {
        const button = document.createElement("button");

        button.textContent = option;
        button.classList.add("answerButton");

        button.addEventListener("click", function () {
            userAnswers[currentQuestion.key] = option;

            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                const resultPlants = diagnosisPlant(userAnswers);

                showResult(resultPlants);
                showScreen(resultScreen);
            }
        });

        answerList.appendChild(button);
    });
}

function showResult(resultPlants) {
    resultList.innerHTML = "";

    resultPlants.forEach(function (plant) {
        const card = document.createElement("div");
        card.classList.add("resultCard");

        const name = document.createElement("h2");
        name.textContent = plant.name;

        const image = document.createElement("img");
        image.src = plant.image;
        image.alt = plant.name;
        image.classList.add("resultImage");

        const credit = document.createElement("p");
        credit.classList.add("imageCredit");
        credit.textContent = `画像提供：${plant.imageCredit}`;

        const description = document.createElement("p");
        description.classList.add("plantDescription");
        description.textContent = plant.description;

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(credit);
        card.appendChild(description);

        resultList.appendChild(card);
    });

    if (resultPlants.length > 0) {
        const firstPlant = resultPlants[0];
        searchButton.href = `https://www.google.com/search?q=${encodeURIComponent(firstPlant.name + " 育て方")}`;
    }
}

function resetDiagnosis() {
    currentQuestionIndex = 0;
    userAnswers = {};
    resultList.innerHTML = "";
}

startButton.addEventListener("click", function () {
    resetDiagnosis();
    showQuestion();
    showScreen(questionScreen);
});

backToStartButton.addEventListener("click", function () {
    resetDiagnosis();
    showScreen(startScreen);
});