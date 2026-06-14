const startButton = document.querySelector("#startButton");
const backToStartButton = document.querySelector("#backToStartButton");
// ボタンが押されたらそのボタンのDOMを格納する変数を定義する
// getElementByIdでもいいけど、より汎用性のあるquerySelectorに慣れておくためにquerySelectorを使用する

const startScreen = document.querySelector("#startScreen");
const questionScreen = document.querySelector("#questionScreen");
const resultScreen = document.querySelector("#resultScreen");
// activeを書いたり消したりすることでCSSから表示を切り替えるために使う

const progress = document.querySelector("#progress");
//今何問目かを表示させるために使う
const questionText = document.querySelector("#questionText");
// 質問文を配列の要素から表示させるために取得しておく
const answerList = document.querySelector("#answerList");

let currentQuestionIndex = 0;
// 配列questionsの要素番号を格納する

const userAnswers = {};

function showScreen(targetScreen) {
    startScreen.classList.remove("active");
    questionScreen.classList.remove("active");
    resultScreen.classList.remove("active");
    targetScreen.classList.add("active");
}
// ボタンを押したら指定の画面に切り替えるための関数を用意しておく

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.text;
    // 質問文を取得して表示する

    progress.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
    // 現在の質問数をカウントする

    answerList.innerHTML = "";
    currentQuestion.options.forEach(function (option) {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("answerButton");


        button.addEventListener("click", function () {
            userAnswers[currentQuestion.key] = option;
            console.log(userAnswers);

            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                const resultPlant = diagnosisPlant(userAnswers);
                console.log(resultPlant);
                showScreen(resultScreen);
            }
        });
        // いずれかの回答ボタンをクリックすると質問数カウントが進む
        //  回答した質問数と用意されている質問数が同じ以上になったら、結果画面に移る

        answerList.appendChild(button);
        // JSで作成した選択肢ボタンを子要素に入れて表示する
    });
};



startButton.addEventListener("click", function () {
    currentQuestionIndex = 0;
    showQuestion();
    showScreen(questionScreen);
});
// スタート画面の診断をはじめるボタン　押すと質問画面へと遷移する

backToStartButton.addEventListener("click", function () {
    currentQuestionIndex = 0;
    showScreen(startScreen);
});
// 結果画面のもう一度診断するボタン　押すとスタート画面へと遷移する