// Get the icon element
const icon = document.getElementById('menu-icon');
const nav = document.querySelector('ul');
// Add an event listener for the click event
icon.addEventListener('click', show );
//function show:
function show(){
  nav.classList.toggle('active');
};
