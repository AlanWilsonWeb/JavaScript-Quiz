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
  <div id="quizQuestion${this.index}"><h3>Question ${this.index}: ${this.quest}</h3>
  <div class="renderItem"><h4>A) ${this.optionA}</h4><input name="radioq${this.index}" id="selA${this.index}" value=${this.aBool} type="radio"></div>
  <div class="renderItem"><h4>B) ${this.optionB}</h4><input name="radioq${this.index}" id="selB${this.index}" value=${this.bBool} type="radio"></div>
  <div class="renderItem"><h4>C) ${this.optionC}</h4><input name="radioq${this.index}" id="selC${this.index}" value=${this.cBool} type="radio"></div>
  <div class="renderItem"><h4>D) ${this.optionD}</h4><input name="radioq${this.index}" id="selD${this.index}" value=${this.dBool} type="radio"></div>
  </div>
  `;
  document.getElementById(`placeholder${this.index}`).innerHTML = markup;
  }
};

for(var p = 1; p <= 5; p++){
  this["question"+p] = new Question(
    [p],
    quizData[p].question,
    quizData[p].choiceA.answer,
    quizData[p].choiceA.correct,
    quizData[p].choiceB.answer,
    quizData[p].choiceB.correct,
    quizData[p].choiceC.answer,
    quizData[p].choiceC.correct,
    quizData[p].choiceD.answer,
    quizData[p].choiceD.correct,
    quizData[p].value);
  this["question"+p].displayEm();
};

var a = 1;
var finalPoints = 0;
var ans1 = false;
var ans2 = false;
var ans3 = false;
var ans4 = false;
var ans5 = false;

step1 = () => {
  for(var q = 1; q <= 5; q++) {
    if (document.getElementById('selA'+q).checked) {
      this["ans"+q] = document.getElementById('selA'+q).value;
    }else if (document.getElementById('selB'+q).checked) {
      this["ans"+q] = document.getElementById('selB'+q).value;
    }else if (document.getElementById('selC'+q).checked) {
      this["ans"+q] = document.getElementById('selC'+q).value;
    }else if (document.getElementById('selD'+q).checked) {
      this["ans"+q] = document.getElementById('selD'+q).value;
    }else {console.log("error");};
  };
};
step2 = () => {
  while(a <= 5){
    console.log(this["ans"+a]);
    if (this["ans"+a] == "true"){
      finalPoints += this["question"+a].points;
      document.getElementById("placeholder"+a).style.backgroundColor = "#5cb85c";
    }
    else {
      finalPoints += 0;
      document.getElementById("placeholder"+a).style.backgroundColor = "#d9534f";
    };
    a++;
  };
  console.log(finalPoints);
}
step3 = () => {
    let inputOne = 100;
    let outputOne = "A";
    inputOne = (finalPoints / 25) * 100;
    if(inputOne >= 90) {
      outputOne = "A";
    }  else if(inputOne >= 80) {
      outputOne = "B";
    }  else if(inputOne >= 70) {
      outputOne = "C";
    }  else if(inputOne >= 60) {
      outputOne = "D";
    }  else {
      outputOne = "F";
    }
    return document.getElementById("finalGrade").innerHTML = `
      <div id="displayGrade">
        <h1>Results:</h1>
      <h3>Your score was </h3><h2>${finalPoints} </h2><h3>out of a possible</h3><h2> 25</h2>
        <h3>Your percentage was </h3><h2>${inputOne}%</h2>
        <h3>this receives a final grade of</h3><h1>${outputOne}</h1>
      </div>
      `;
};
logic = () => {
  step1();
  step2();
  step3();
  document.documentElement.scrollTop = 0;
};

reclear = () => {
  location.reload();
};
