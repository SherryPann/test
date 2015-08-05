describe("FormSerilizer", function() {
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

    it("should return correct array", function() {
      var formserilizer = new FormSerilizer();
      var result = formserilizer.scan(form);
      expect(result).toEqual([{
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
      }]);
    });
  });
});