function MultSelection(type, name, value) {
  this.type = type;
  this.name = name;
  this.value = value;
}

function loadStandardAnswer() {
  return [{
    type: 'checkbox',
    name: 'mult-selection-1',
    value: ['A', 'B', 'D'],
    score: 2
  }, {
    type: 'checkbox',
    name: 'mult-selection-1',
    value: ['A', 'B', 'C'],
    score: 2
  }];
}

MultSelection.prototype.getScore = function() {
  var standardAnswer = loadStandardAnswer();
  var _this = this;
  var length = standardAnswer.length;
  for (var i = 0; i < length; i++) {
    if(_this.name === standardAnswer[i].name){
    }
  }

}
