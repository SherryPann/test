var  result = [];
var arr = document.getElementsByTagName("input");
var length = document.getElementsByTagName("input").length;
for(var i = 0;i < length;i ++){
  if(arr[i].type === "text"){

  result.push(arr[i].value);
  }
}
console.log( result);
