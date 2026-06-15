function diagnosisPlant(userAnswers) {
    let bestPlants = [];
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

        if (plant.growth === userAnswers.growth) {
            score++;
        }

        if (score > bestScore) {
            bestScore = score;
            bestPlants = [plant];
        } else if (score === bestScore) {
            bestPlants.push(plant);
        }
    });

    return bestPlants;
}