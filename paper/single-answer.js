function SingleAnswer(type, name, value) {
  this.type = type;
  this.name = name;
  this.value = value;
}

function loadStandardAnswer() {
  return [
    // {type:'text',name:'blank-1',value:['统一建模语言'],score:1},
    // {type:'text',name:'blank-2',value:['封装性','继承性','多态性'],score:3},
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
    // {type:'checkbox',name:'mult-selection-1',value:['A','B','D'],score:2},
    // {type:'checkbox',name:'mult-selection-1',value:['A','B','C'],score:2},
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
