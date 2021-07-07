
const butnMenu = document.querySelector('.menu-button');
const mobileMenuRef = document.querySelector("[data-menu]");
  
  butnMenu.addEventListener('click', onClikcBtn)
  
function onClikcBtn() {
  butnMenu.classList.toggle('is-open')
  mobileMenuRef.classList.toggle('is-open')
}