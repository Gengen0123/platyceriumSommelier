// ビカクシダ原種18種のデータベース
const platycerium = [
  { name: "コロナリウム", water: "多め", size: "大きい", shape: "ふしぎ", obtain: "普通" },
  { name: "グランデ", water: "多め", size: "大きい", shape: "かっこいい", obtain: "普通" },
  { name: "ホルタミー", water: "多め", size: "大きい", shape: "ふしぎ", obtain: "難しい" },
  { name: "リドレイ", water: "少なめ", size: "小さい", shape: "ふしぎ", obtain: "難しい" },
  { name: "ワリチー", water: "多め", size: "大きい", shape: "ふしぎ", obtain: "難しい" },
  { name: "ワンダエ", water: "多め", size: "大きい", shape: "かっこいい", obtain: "難しい" },
  { name: "ビフルカツム", water: "普通", size: "普通", shape: "かっこいい", obtain: "簡単" },
  { name: "ヒリー", water: "普通", size: "普通", shape: "かわいい", obtain: "普通" },
  { name: "スパーバム", water: "普通", size: "大きい", shape: "かっこいい", obtain: "普通" },
  { name: "ベイチー", water: "少なめ", size: "普通", shape: "かっこいい", obtain: "普通" },
  { name: "ウィリンキー", water: "普通", size: "普通", shape: "かっこいい", obtain: "普通" },
  { name: "アンディナム", water: "少なめ", size: "普通", shape: "かっこいい", obtain: "難しい" },
  { name: "アルシコルネ", water: "普通", size: "普通", shape: "かっこいい", obtain: "普通" },
  { name: "エレファントティス", water: "多め", size: "大きい", shape: "ふしぎ", obtain: "普通" },
  { name: "エリシー", water: "普通", size: "小さい", shape: "かわいい", obtain: "難しい" },
  { name: "ステマリア", water: "普通", size: "普通", shape: "かわいい", obtain: "普通" },
  { name: "マダガスカリエンセ", water: "多め", size: "小さい", shape: "ふしぎ", obtain: "難しい" },
  { name: "クアドリディコトマム", water: "多め", size: "小さい", shape: "ふしぎ", obtain: "難しい" },
];


// ユーザーからの回答
const userAnswers = {
  water: "多め", size: "小さい", shape: "ふしぎ", obtain: "難しい"
};

// 原種と回答を比較する

for (const platyceriumSample of platycerium) { // データベースの各要素を順番に変数へ格納していく繰り返し処理の書き方
  let score = 0; // 性質が一致したらスコアを加算する式の合計値を格納する　大きいほどマッチしていることになる

  if (platyceriumSample.water === userAnswers.water) { // ユーザーの選択と原種の性質が一致していたらスコアに1が足される
    score++;
  }
  if (platyceriumSample.size === userAnswers.size) {
    score++;
  }
  if (platyceriumSample.shape === userAnswers.shape) {
    score++;
  }
  if (platyceriumSample.obtain === userAnswers.obtain) {
    score++;
  }

  console.log(platyceriumSample.name);
  console.log(score);

};
