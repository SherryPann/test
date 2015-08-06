function CalculateScore() {
  var form = document.getElementById("test-container");
  var formserilizer = new FormSerilizer();
  var AnswerArray = formserilizer.scan(form);
  var totalscore = new TotalScore();
  var Score = 0;
  Score = totalscore.getTotalScore(AnswerArray);
  document.getElementById('score').value = Score;
}