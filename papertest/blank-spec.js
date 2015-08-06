describe("BlankAnswer", function() {
  var blankAnswer = new BlankAnswer( 'blank-2', ['封装性', '封装性', '封装性']);
  var score = 0;
  beforeEach(function() {
    score = blankAnswer.getScore();
  })
  it("accept type,name and value as parameters", function() {
    expect(blankAnswer.name).toBe("blank-2");
    expect(blankAnswer.value).toEqual(['封装性', '封装性', '封装性']);
  });
  it("return the correct score", function() {
    expect(score).toBe(1);
  });
});
