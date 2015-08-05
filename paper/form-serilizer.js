function FormSerilizer() {}

function getAnswer(elem, result) {
  for (var i = 0; i < result.length; i++) {
    if (result[i].name === elem.name) {
      result[i].value.push(elem.value);
      return;
    }

  }
  result.push({
    type: elem.type,
    name: elem.name,
    value: [elem.value]
  });
}

FormSerilizer.prototype.scan = function(form) {
  var result = [];
  [].forEach.call(form, function(elem) {
    if (elem.type === 'text' || elem.checked) {
      getAnswer(elem, result);
    }
  });
  return result;
}