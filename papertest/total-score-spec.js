describe('TotalScore', function() {
  var AnswerArray = [{
      type: 'text',
      name: 'blank-1',
      value: ['统一建模语言']
    }, {
      type: 'text',
      name: 'blank-2',
      value: ['封装性', '继承性', '多态性']
    }, {
      type: 'radio',
      name: 'selection-1',
      value: ['A']
    }, {
      type: 'radio',
      name: 'selection-2',
      value: ['B']
    }, {
      type: 'checkbox',
      name: 'mult-selection-1',
      value: ['A', 'B', 'C']
    }, {
      type: 'checkbox',
      name: 'mult-selection-2',
      value: ['B', 'C', 'D']
    }];
  describe("", function() {
    var totalScore = new TotalScore();
    var score = totalScore.getTotalScore(AnswerArray);
    it("should return correct total score", function() {
      expect(score).toBe(10);
    });

  });
});
