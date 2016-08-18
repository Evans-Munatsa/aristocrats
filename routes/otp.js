exports.generateOneTimePin = function(){
  var number =("" + Math.random()).substring(2,7);
  console.log(number);
  return number;
}
