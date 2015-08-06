function MultSelection( name, value) {
  this.name = name;
  this.value = value;
}


MultSelection.prototype.getScore = function() {
  var standardAnswer = loadStandardAnswer();
  var score = 0;
  var length = standardAnswer.length;
  for (var i = 0; i < length; i++) {
    if (this.name === standardAnswer[i].name) {
      score = this.MatchAnswer(standardAnswer[i]);
    }
  }
  return score;
}

MultSelection.prototype.MatchAnswer = function(standardA) {
  var len = this.value.length;
  var answer = this.value.filter(function(val) {
    return (standardA.value.indexOf(val) !== -1);
  });
  if (answer.length !== len || len === 0) {
    return 0;
  } else {
    return answer.length === standardA.value.length ? standardA.score : standardA.score / 2;
  }
}
