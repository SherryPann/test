//sno only accept number
document.getElementById("number").addEventListener("keydown",function(evt){
  console.log(String.fromCharCode(evt.keyCode));
  if(evt.keyCode !== 8 && (evt.keyCode < 48 || evt.keyCode > 57)){
    evt.preventDefault();
  }
})

// //getmultiplyselection
// var selection1 = document.getElementsByName("mult-selection-1");
// function getResult(){
//   var result = [].filter.call(selection1,function(element){
//     return element.checked;
//   }).map(function(elem){
//     return elem.value;
//   });
//   return result.join('');
// }
// [].forEach.call(selection1,function(element){
//   element.addEventListener("click",function(){
//     console.log(getResult());
//   });
// })

//get the mult-question answer


function getSelection(answer){
var selection1 = answer;
function getResult(){
  var result = [].filter.call(selection1,function(element){
    return element.checked;
  }).map(function(elem){
    return elem.value;
  });
  return result.join('');
}
[].forEach.call(selection1,function(element){
  element.addEventListener("click",function(){
    console.log(getResult());
  });
})
}

var answer1 = document.getElementsByName("mult-selection-1");
getSelection(answer1);

var answer2 = document.getElementsByName("mult-selection-2");
getSelection(answer2);
