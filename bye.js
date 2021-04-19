(function(window){
  
  var bye = {};
  bye.name = name;

  
  var bicara = "Good Bye";

  
  bye.speak = function (name){
    console.log(bicara + " " + name);
  }
  
  window.bye = bye;
}
)(window);
