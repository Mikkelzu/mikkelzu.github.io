
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


// TYPED JS STUFF
var options = {
  strings: ['Software engineer', 'Lover of burgers', 'Masochist of vanilla JavaScript', 'Coffee consumer', 'TypeScript advocate', '.NET Developer'],
  startDelay: 1000,
  typeSpeed: 40,
  backSpeed: 10,
  showCursor: false,
  loop: true
};
var typed = new Typed('.sub-title', options);