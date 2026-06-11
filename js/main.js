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
// 質問文を配列の要素から表示させるためにDOMをidから取得しておく

let currentQuestionIndex = 0;
// 配列questionsの要素番号を格納する


function showScreen(targetScreen) {
    startScreen.classList.remove("active");
    questionScreen.classList.remove("active");
    resultScreen.classList.remove("active");
    targetScreen.classList.add("active");
}
// ボタンを押したら指定の画面に切り替えるための関数を用意しておく

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    // 質問はquestions.jsの配列questionsに書かれている
    // currentquetionに要素を順次格納していく
    questionText.textContent = currentQuestion.text;
    // 配列から要素番号で指定した質問文をHTMLに反映させる
    progress.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
    // 要素番号は0から始まるから1を足して問題数と合わせておく
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