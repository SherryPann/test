function CalculateScore(){
  var testContainer = document.getElementById("testContainer");
  var form = testContainer.getElementsByTagName("form")[0];
  var formserilizer = new FormSerilizer();
  var AnswerArray = formserilizer.scan(form);
  var totalscore = new TotalScore();
  var score = totalscore.getTotalScore(AnswerArray);
}
