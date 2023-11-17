class QuestionPaperGenerator {
  constructor(questionStore) {
    this.questionStore = questionStore;
  }

  generateQuestionPaper(totalMarks, difficultyDistribution) {
    const questionPaper = [];
    const availableQuestions = this.questionStore.getQuestions();

    const easyCount = Math.ceil(difficultyDistribution.easy * totalMarks);
    const mediumCount = Math.ceil(difficultyDistribution.medium * totalMarks);
    const hardCount = Math.ceil(difficultyDistribution.hard * totalMarks);

    console.log(easyCount, mediumCount, hardCount);

    const getRandomQuestion = (difficulty) => {
      const filteredQuestions = availableQuestions.filter(q => q.difficulty === difficulty);
      if (filteredQuestions.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
        return filteredQuestions.splice(randomIndex, 1)[0];
      }
      return null;
    };

    for (let i = 0; i < (easyCount / 5); i++) {
      const question = getRandomQuestion("Easy");
      if (question) {
        questionPaper.push(question);
      }
    }

    for (let i = 0; i < (mediumCount / 10); i++) {
      const question = getRandomQuestion("Medium");
      if (question) {
        questionPaper.push(question);
      }
    }

    for (let i = 0; i < (hardCount / 15); i++) {
      const question = getRandomQuestion("Hard");
      if (question) {
        questionPaper.push(question);
      }
    }

    return questionPaper;
  }
}

module.exports = QuestionPaperGenerator;
