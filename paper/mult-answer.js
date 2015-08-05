function MultSelection(type,name,value){
  this.type = type;
  this.name = name;
  this.value = value;
}

MultSelection.prototype.getScore = function(){
  var standard-answer = loadStandardAnswer();
  var _this = this;

  standard-answer.forEach(function(elem){
    if(_this.name === elem.name){
      
    }
  })
  }
