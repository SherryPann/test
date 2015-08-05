function SingleAnswer(type, name, value) {
  this.type = type;
  this.name = name;
  this.value = value;
}

function loadStandardAnswer() {
  return [
    {
      type: 'radio',
      name: 'selection-1',
      value: ['A'],
      score: 2
    }, {
      type: 'radio',
      name: 'selection-2',
      value: ['B'],
      score: 2
    },
    {
      type: "radio",
      name: "judge-1",
      value: ['X'],
      score: 2
    }, {
      type: "radio",
      name: "judge-2",
      value: ['V'],
      score: 2
    }
  ];
}

SingleAnswer.prototype.getScore = function() {
  var standardAnswer = loadStandardAnswer();
  var _this = this;
  for (var i = 0; i < standardAnswer.length; i++) {
    if (_this.name === standardAnswer[i].name &&
      _this.value[0] === standardAnswer[i].value[0]) {
      return standardAnswer[i].score;
    }
  }
}
