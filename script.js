class Question {
  constructor(quest, optionA, optionB, optionC, optionD, points) {
    this.quest = quest;
    this.optionA = optionA;
    this.optionB = optionB;
    this.optionC = optionC;
    this.optionD = optionD;
    this.points = points;
  }
};

var question1 = new Question(quizData[1].question, quizData[1].choiceA.answer, quizData[1].choiceB.answer, quizData[1].choiceC.answer, quizData[1].choiceD.answer, quizData[1].value);
var question2 = new Question(quizData[2].question, quizData[2].choiceA.answer, quizData[2].choiceB.answer, quizData[2].choiceC.answer, quizData[2].choiceD.answer, quizData[2].value);
var question3 = new Question(quizData[3].question, quizData[3].choiceA.answer, quizData[3].choiceB.answer, quizData[3].choiceC.answer, quizData[3].choiceD.answer, quizData[3].value);
var question4 = new Question(quizData[4].question, quizData[4].choiceA.answer, quizData[4].choiceB.answer, quizData[4].choiceC.answer, quizData[4].choiceD.answer, quizData[4].value);
var question5 = new Question(quizData[5].question, quizData[5].choiceA.answer, quizData[5].choiceB.answer, quizData[5].choiceC.answer, quizData[5].choiceD.answer, quizData[5].value);

console.log(question1);
console.log(question2);
console.log(question3);
console.log(question4);
console.log(question5);
