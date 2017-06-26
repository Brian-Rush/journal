function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function(body) {
  var count = body.split(' ').length;
  return count;
}

//Prototype to create array of all letters
Entry.prototype.letterArray = function(body) {
  var allLetters = body.toLowerCase().split('');
  var vowels = ["a", "e", "i", "o", "u"]
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
  var vowelsArray = [];
  var consonantsArray = [];
  for (i = 0; i < allLetters.length; i++) {
    if (vowels.includes(allLetters[i])) {
      vowelsArray.push(allLetters[i]);
    } else if (consonants.includes(allLetters[i])) {
      consonantsArray.push(allLetters[i]);
    }
  }

  console.log(vowelsArray);
}

//Front End
$(document).ready(function() {
  $('#input').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title,body)
    console.log(newEntry);
    console.log(newEntry.wordCount(body));
    newEntry.letterArray(body);

  });
});
