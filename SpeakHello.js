

(function (window){
 
  var helloSpeaker = {};
  helloSpeaker.name = window.name;
 

  var speakWord = "Hello";

  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);
