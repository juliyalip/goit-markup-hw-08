
const buttonMenu = document.querySelector('.menu-button');
const mobileMenuRef = document.querySelector("[data-menu]");
  
buttonMenu.addEventListener('click', onClikcBtn);
  
function onClikcBtn() {
  buttonMenu.classList.toggle('is-open')
  mobileMenuRef.classList.toggle('is-open')
  }