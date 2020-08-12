(function () {
  var names = ["Ruben David Ocasio", "Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var indx in names) {
    var firstLetter = names[indx].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[indx]);
    } else {
      helloSpeaker.speak(names[indx]);
    }
  }

})();
