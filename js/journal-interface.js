var Entry = require('./../js/journal.js').entryModule;

//Front End
$(document).ready(function() {
  $('#input').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title,body);
    console.log(newEntry);
    var wordTotal = newEntry.wordCount(body);
    var vowelCount = newEntry.countVowels(body);
    var consonantCount = newEntry.countConsonants(body);
    var teaser = newEntry.getTeaser(body);

    $('#output').append('<h3>' + title + '</h3><p>' + teaser + '</p><h3>' + "Word count: " + wordTotal + '</h3><h3>' + "The total of vowels used in the body is " + vowelCount + '</h3><h3>' + "The total of consonants used in the body is " + consonantCount + '</h3>');

    console.log(teaser);
  });
});
