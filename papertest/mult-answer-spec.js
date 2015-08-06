describe("MultSelection", function() {
  var multSelection = new MultSelection( 'mult-selection-1', ['C','D']);
  var score;
  beforeEach(function() {
    score = multSelection.getScore();
  })
  it("accept type name and value as parameters", function() {
    expect(multSelection.name).toBe('mult-selection-1');
    expect(multSelection.value).toEqual(['C','D']);
  });
  it("return the correct score", function() {
    expect(score).toBe(0);
  });
});
