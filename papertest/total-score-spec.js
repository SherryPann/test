describe('TotalScore', function() {
  var testContainer = document.getElementById("test-container");
  var form;
  beforeEach(function() {
    testContainer.innerHTML = "<form>" +
      "<input type='text' name='blank-1' value='统一建模语言'/>" +
      "<input type='text' name='blank-2' value='封装性'/>" +
      "<input type='text' name='blank-2' value='继承性' />" +
      "<input type='text' name='blank-2' value='多态性'/>" +
      " <input type='radio' name='selection-1' value='A'checked> " +
      "<input type='radio' name='selection-2' value='B'checked>" +
      "<input type='checkbox' name='mult-selection-1' value='A' checked/>" +
      "<input type='checkbox' name='mult-selection-1' value='B' checked/> " +
      "<input type='checkbox' name='mult-selection-1' value='C' checked/>" +
      "<input type='checkbox' name='mult-selection-2' value='B' checked/>" +
      "<input type='checkbox' name='mult-selection-2' value='C' checked/>" +
      "<input type='checkbox' name='mult-selection-2' value='D' checked/>" +
      "</form>";
    form = testContainer.getElementsByTagName("form")[0];
  });
  afterEach(function() {
    testContainer.innerHTML = "";
  });
  describe("", function() {
    var totalScore = new TotalScore();
    var score = totalScore.getTotalScore(form);
    it("should return correct total score", function() {
      expect(score).toBe(12);
    });

  });
});
