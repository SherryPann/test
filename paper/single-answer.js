function SingleAnswer( name, value) {
  this.name = name;
  this.value = value;
}

SingleAnswer.prototype.getScore = function() {
  var standardAnswer = loadStandardAnswer();
  var _this = this;
  var score = 0;
  for (var i = 0; i < standardAnswer.length; i++) {
    if (_this.name === standardAnswer[i].name &&
      _this.value[0] === standardAnswer[i].value[0]) {
      score = standardAnswer[i].score;
    }
  }
  return score;
}
