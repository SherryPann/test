describe('SingleAnswer', function() {
  var singleAnswer = new SingleAnswer('judge-1', ['X']);
  var score = 0;
  beforeEach(function() {
    score = singleAnswer.getScore();
  });
  it("receive type,name and value as parameters", function() {
    expect(singleAnswer.name).toBe("judge-1");
    expect(singleAnswer.value).toEqual(['X']);
  });
  it("should return the correct score", function() {
    expect(score).toBe(2);
  });
});
