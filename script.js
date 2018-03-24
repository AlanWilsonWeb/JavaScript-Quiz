class Question {
  constructor(index, quest, optionA, aBool, optionB, bBool, optionC, cBool, optionD, dBool, points) {
    this.index = index;
    this.quest = quest;
    this.optionA = optionA;
    this.aBool = aBool;
    this.optionB = optionB;
    this.bBool = bBool;
    this.optionC = optionC;
    this.cBool = cBool;
    this.optionD = optionD;
    this.dBool = dBool;
    this.points = points;
  }
  displayEm() {
    const markup = `
  <div class="quiz"><h3>Question ${this.index}: ${this.quest}</h3>
  <h4>A) ${this.optionA}</h4>
  <h4>B) ${this.optionB}</h4>
  <h4>C) ${this.optionC}</h4>
  <h4>D) ${this.optionD}</h4>
  </div>
  `;
  document.getElementById(`placeholder${this.index}`).innerHTML = markup;
  }
  logic() {
    
  }
};

var question1 = new Question(1, quizData[1].question, quizData[1].choiceA.answer, quizData[1].choiceA.correct, quizData[1].choiceB.answer, quizData[1].choiceB.correct, quizData[1].choiceC.answer, quizData[1].choiceC.correct, quizData[1].choiceD.answer, quizData[1].choiceD.correct, quizData[1].value);
question1.displayEm();
var question2 = new Question(2, quizData[2].question, quizData[2].choiceA.answer, quizData[2].choiceA.correct, quizData[2].choiceB.answer, quizData[2].choiceB.correct, quizData[2].choiceC.answer, quizData[2].choiceC.correct, quizData[2].choiceD.answer, quizData[2].choiceD.correct, quizData[2].value);
question2.displayEm();
var question3 = new Question(3, quizData[3].question, quizData[3].choiceA.answer, quizData[3].choiceA.correct, quizData[3].choiceB.answer, quizData[3].choiceB.correct, quizData[3].choiceC.answer, quizData[3].choiceC.correct, quizData[3].choiceD.answer, quizData[3].choiceD.correct, quizData[3].value);
question3.displayEm();
var question4 = new Question(4, quizData[4].question, quizData[4].choiceA.answer, quizData[4].choiceA.correct, quizData[4].choiceB.answer, quizData[4].choiceB.correct, quizData[4].choiceC.answer, quizData[4].choiceC.correct, quizData[4].choiceD.answer, quizData[4].choiceD.correct, quizData[4].value);
question4.displayEm();
var question5 = new Question(5, quizData[5].question, quizData[5].choiceA.answer, quizData[5].choiceA.correct, quizData[5].choiceB.answer, quizData[5].choiceB.correct, quizData[5].choiceC.answer, quizData[5].choiceC.correct, quizData[5].choiceD.answer, quizData[5].choiceD.correct, quizData[5].value);
question5.displayEm();
