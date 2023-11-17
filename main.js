const QuestionStore = require('./src/questionStore');
const QuestionPaperGenerator = require('./src/questionPaperGenerator');
const questions = require('./questions.json');

const questionStore = new QuestionStore();

questions.forEach(question => {
  questionStore.addQuestion(question);
});

const questionPaperGenerator = new QuestionPaperGenerator(questionStore);

const totalMarks = 100;
const difficultyDistribution = {
  easy: 0.2,
  medium: 0.5,
  hard: 0.3
};
const questionPaper = questionPaperGenerator.generateQuestionPaper(totalMarks, difficultyDistribution);

// Display the generated question paper
console.log("Generated Question Paper:");
console.log(questionPaper);
