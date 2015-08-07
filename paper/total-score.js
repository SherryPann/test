function TotalScore() {}
TotalScore.prototype.getTotalScore = function(AnswerArray) {
  var score = 0;
  for (var i = 0; i < AnswerArray.length; i++) {
    if (AnswerArray[i].type === 'text') {
      score += this.getBlankScore(AnswerArray[i]);
    } else if (AnswerArray[i].type === 'radio') {
      score += this.getSingleScore(AnswerArray[i]);
    } else if (AnswerArray[i].type === 'checkbox') {
      score += this.getMultScore(AnswerArray[i]);
    }
  }
  return score;
}

TotalScore.prototype.getBlankScore = function(answer) {
  var blankAnswer = new BlankAnswer(answer.name, answer.value);
  blankAnswer.getScore();
  return blankAnswer.getScore();
}
TotalScore.prototype.getSingleScore = function(answer) {
  var singleAnswer = new SingleAnswer( answer.name, answer.value);
  return singleAnswer.getScore();
}
TotalScore.prototype.getMultScore = function(answer) {
  var multSelection = new MultSelection(answer.name, answer.value);
  return multSelection.getScore();
}
