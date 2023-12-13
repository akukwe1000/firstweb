// var msg = 'i have been coding sine '
// console.log('i am hungry')
// alert(msg)


var hambugerdiv = document.querySelector('.hambuger-logo')
var MobileLink = document.querySelector('.mobile-link-holder')
var dropback = document.querySelector('.backdrop')

console.log(hambugerdiv)

function dosomething(){
  hambugerdiv.classList.toggle('showbuger')
  MobileLink.classList.toggle('show-mobile-link-holder')
  dropback.classList.toggle('show-dropback')
} 


