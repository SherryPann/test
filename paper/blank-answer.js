function BlankAnswer(type, name, value) {
  this.type = type;
  this.name = name;
  this.value = value;
}

BlankAnswer.prototype.getScore = function() {
  var StandardAnswer = loadStandardAnswer();
  var score = 0;
  var length = StandardAnswer.length;
  for (var i = 0; i < length; i++) {
    if (StandardAnswer[i].name === this.name) {
      for (var j = 0; j < this.value.length; j++) {
        var isRepeat = this.value.slice(j + 1, this.value.length).indexOf(this.value[j]) !== -1;
        if ((StandardAnswer[i].value.indexOf(this.value[j]) !== -1) && !isRepeat) {
          score += StandardAnswer[i].score / StandardAnswer[i].value.length;
        }
      }
      return score;
    }

  }
}