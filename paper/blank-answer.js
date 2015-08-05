function BlankAnswer(type,name,value){
  this.type = type;
  this.name = name;
  this.value = value;
}

function loadStandardAnswer(){
  return [
    {type:'text',name:'blank-1',value:['统一建模语言'],score:1},
    {type:'text',name:'blank-2',value:['封装性','继承性','多态性'],score:3},
  ];
}

BlankAnswer.prototype.getScore = function(){
  var standard-answer = loadStandardAnswer();
  var _this = this;
  standard-answer.forEach(function(elem){
    if(elem.name === _this.name){
    var answer = _this.value.filter(function(val){
        elem.indexOf(val) !== -1;
      })
      var length = answer.length;
      return length * 1;
    }
  })
}
