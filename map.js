function map(array, callback) {
  var result = []
  for (var i = 0; i < array.length; i++) {
    result.push(callback(array[i]));    
  }
  return result;
}

var words = ["ground", "control", "to", "major", "tom"];

var newArr = map(words, function(word) {
  return word.length;
});

console.log(newArr);
