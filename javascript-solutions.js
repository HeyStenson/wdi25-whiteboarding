function getSum(arr){
  var sum = 0;
  arr.forEach(function(el, index)){
    sum += el;
  });
  console.log(sum);
  };

function reverseString(str) {

  var reversedStr = "";
  var i = str.length - 1;
  while (i >= 0) {
    reversedStr += str[i];
    i --;
  }
  return reversedStr;
  
};

