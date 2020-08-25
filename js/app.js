// DOM Elements

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const body = document.body;

// Apply the cached theme on reload

const theme = localStorage.getItem('theme');

if (theme) {
  body.classList.add(theme);
}


var images = ["./img/my_face_smile.jpg","./img/my_Face_smile_3.jpeg"]
var faceimage = document.getElementById("faceimage");
var i = 0;
var timer = setInterval(function(){
  // If we've reached the end of the array...
  if(i >= images.length){
   i = 0;
  }
  faceimage.src = images[i++]; // Sete the path to the current counter and then increase the counter
}, 2000)

function recursiveTimer() {
  return timer;
}
// Button Event Handlers

darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
  Toast('dark-toast', {text: 'Set to dark!', icon: 'far fa-check-circle fa-lg'});
};

lightButton.onclick = () => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
  Toast('light-toast', {text: 'Set to light!', icon: 'far fa-check-circle fa-lg'});
};


// Modal opening
var modal = document.getElementById('contact-modal');
var btn = document.getElementById('open-contact-modal')
var closeModalBtn = document.getElementsByClassName('close')[0]

btn.onclick = () => { modal.style.display = 'block' }
closeModalBtn.onclick = () => { modal.style.display = 'none' }

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}


// TYPED JS STUFF
var options = {
  strings: ['Results driven &amp; flexible'],
  startDelay: 1000,
  typeSpeed: 40,
  backSpeed: 10,
  showCursor: false,
  loop: true
};
var typed = new Typed('.sub-title', options);