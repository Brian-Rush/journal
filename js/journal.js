function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function(body) {
  var count = body.split(' ').length;
  return count;
}

Entry.prototype.countVowels = function(body) {
  var allLetters = body.toLowerCase().split('');
  var vowels = ["a", "e", "i", "o", "u"]
  var vowelsArray = [];
  for (i = 0; i < allLetters.length; i++) {
    if (vowels.includes(allLetters[i])) {
      vowelsArray.push(allLetters[i]);
    }
  }
  var vowelTotal = vowelsArray.length;
  console.log(vowelTotal);
  return vowelTotal;
}

Entry.prototype.countConsonants = function(body) {
  var allLetters = body.toLowerCase().split('');
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
  var consonantsArray = [];
  for (i = 0; i < allLetters.length; i++) {
    if (consonants.includes(allLetters[i])) {
      consonantsArray.push(allLetters[i]);
    }
  }

  var consonantsTotal = consonantsArray.length;
  console.log(consonantsTotal);
  return consonantsTotal;
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
    var vowelCount = newEntry.countVowels(body);
    var consonantCount = newEntry.countConsonants(body);

    $('#output').append('<h3>' + title + '</h3><p>' + body + '</p><h3>' + "The total of vowels used in the body is " + vowelCount + '</h3><h3>' + "The total of consonants used in the body is " + consonantCount + '</h3>');
  });
});
