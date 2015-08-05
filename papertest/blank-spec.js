describe("BlankAnswer",function(){
  var blankAnswer = new BlankAnswer('text','blank-1',['统一建模语言']);
  var score = 0;
  beforeEach(function(){
     score = blankAnswer.getScore();
  })
  it("accept type,name and value as parameters",function(){
    expect(blankAnswer.type).toBe("text");
    expect(blankAnswer.name).toBe("blank-1");
    expect(blankAnswer.value).toEqual(['统一建模语言']);
  });
  it("return the correct score",function(){
    expect(score).toBe(1);
  });
});
