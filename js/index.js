const texts = ['WordPress Developer', 'Front-End Developer', 'and', 'Content Creator'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.titles').innerText = letter;

  if (letter.length === currentText.length) {
    count++
    index = 0;
  }

  setTimeout(type, 300);

}())


//Open menu

let prevPos = window.pageYOffset;
let menu = document.querySelector('.header-nav-mobile')

window.onscroll = function menuScroll() {
  let currentPos = window.pageYOffset

  if (currentPos > prevPos){
    menu.style.bottom = '-100px'
  } else {
    menu.style.bottom = '0'
  }

  prevPos = currentPos
}