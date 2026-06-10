const startButton = document.querySelector("#startButton");
const backToStartButton = document.querySelector("#backToStartButton");

const startScreen = document.querySelector("#startScreen");
const questionScreen = document.querySelector("#questionScreen");
const resultScreen = document.querySelector("#resultScreen");
// getElementByIdでもいいんだけど、より汎用性のあるquerySelectorに慣れておくためにquerySelectorを使用

startButton.addEventListener("click", function () {
    startScreen.classList.remove("active");
    questionScreen.classList.add("active");
});

backToStartButton.addEventListener("click", function () {
    resultScreen.classList.remove("active");
    startScreen.classList.add("active");
}
)