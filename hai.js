

(function (window){
 
  var hai = {};
  hai.name = window.name;
 

  var bicara = "Hello";

  hai.speak = function(name) {
    console.log(bicara + " " + name);
  }

  window.hai = hai;

})(window);
