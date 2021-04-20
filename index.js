
var numberofbuttons = document.querySelectorAll(".drum").length; //CODE IS ABOUT DETECTING DRUM BUTTON PRESS. // use "keydown" instead of "keypress" js keyword. 
        for (var i = 0; i < numberofbuttons; i ++) { //end when i is NO LONGER less than the numberofbuttons.// "i" here means that it will start off at 0
            document.querySelectorAll(".drum")[i].addEventListener("click", function () { // i think "click" is js keyword
                var buttonInnerHTML = this.innerHTML; //innerHTML was used for recognizing keys, m, l ,k etc to identify specific drum sound
                makeSound(buttonInnerHTML); // this is essentially the button that got pressed. look above ^ on var
                buttonAnimation(buttonInnerHTML);//replacing placeholder "currentKey" with "buttonUnnerHTML"/(.drum class button press). Placeholder created at creation of function
                                }); //we are passing in the "key placeholder" by calling function makeSound()-abovd
                                }// end of for loop
document.addEventListener("keydown", function (event) { // placeholder. this is what detects keyboard strokes through the whold html doc
                makeSound(event.key);//this is the 2nd time makeSound gets called
                buttonAnimation(event.key);
                }); // CODE IS ALL ABOUT DETECTING KEYBOARD PRESS  
function makeSound(key) { // placeholder start
        switch (key) { // placeholder 
          case "w":  var tom1 = new Audio('sounds/tom-1.mp3'); tom1.play();break;
          case "a":  var tom2 = new Audio('sounds/tom-2.mp3'); tom2.play();break;
          case "s":  var tom3 = new Audio('sounds/tom-3.mp3'); tom3.play();break;
          case "d":  var tom4 = new Audio('sounds/tom-4.mp3'); tom4.play();break
          case "j":  var crash = new Audio('sounds/crash.mp3'); crash.play();break; 
          case "k":  var kickBass = new Audio('sounds/kick-bass.mp3'); kickBass.play();break;
          case "l":  var snare = new Audio('sounds/snare.mp3'); snare.play();break;
          default: console.log(buttonInnerHTML);break;  }  
                     }// ends function
function buttonAnimation(currentKey){  //"currentKey" is just a placeholder
    var activeButton =  document.querySelector("." + currentKey); // concatination so it selects the appropriate key class from html
    activeButton.classList.add("pressed");   //activeButton is our element here instead of "document"!!  classList is js. starting animation
    setTimeout(function(){activeButton.classList.remove("pressed");}, 100);// setTimeout is js. Finsihing the animation
  } 


