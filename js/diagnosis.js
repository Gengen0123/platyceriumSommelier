function diagnosisPlant(userAnswers) {
    let bestPlant = null;
    let bestScore = -1;

    platycerium.forEach(function (plant) {
        let score = 0;

        if (plant.water === userAnswers.water) {
            score++;
        }
        if (plant.size === userAnswers.size) {
            score++;
        }
        if (plant.shape === userAnswers.shape) {
            score++;
        }
        if (plant.price === userAnswers.price) {
            score++;
        }
        if (plant.difficulty === userAnswers.difficulty) {
            score++;
        }
        if (plant.grouth === userAnswers.grouth) {
            score++;
        }
    });
    return bestPlant;
}