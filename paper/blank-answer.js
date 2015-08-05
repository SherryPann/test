function BlankAnswer(type, name, value) {
  this.type = type;
  this.name = name;
  this.value = value;
}

function loadStandardAnswer() {
  return [{
    type: 'text',
    name: 'blank-1',
    value: ['统一建模语言'],
    score: 1
  }, {
    type: 'text',
    name: 'blank-2',
    value: ['封装性', '继承性', '多态性'],
    score: 3
  }, ];
}



BlankAnswer.prototype.getScore = function() {
  var StandardAnswer = loadStandardAnswer();
  var _this = this;
  var length = StandardAnswer.length;
  for (var i = 0; i < length; i++) {
    if (StandardAnswer[i].name === _this.name) {
      var right = _this.value.filter(function(val) {
        return (StandardAnswer[i].value.indexOf(val) !== -1);
      });
      return right.length * 1;
    }
  }
}
