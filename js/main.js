
$('.counter').counterUp({
    delay: 10,
    time: 1200
})

/* 
const toggleButton = document.getElementsByClassName('NavToggle')[0]
const navbarLinks = document.getElementsByClassName('Nav')[0]
const boton = document.getElementsByClassName('open')[0]
const botonA = document.getElementsByClassName('toggled')[0]
*/

/* 
toggleButton.addEventListener('click', () => { 
  navbarLinks.classList.toggle('active') 
  boton.classList.toggle('hidden') 
  botonA.classList.toggle('abierto') 
})  
 */

const bars = document.querySelector(".NavToggle");
const navLinks = document.querySelector(".Nav");
const links = document.querySelectorAll(".links");

bars.addEventListener('click', () => {
    navLinks.classList.toggle("active");
    links.forEach(link => {
        link.classList.toggle('active');
    });
    bars.classList.toggle("active");
});

navLinks.addEventListener('click', () => {
    navLinks.classList.toggle("active");
    links.forEach(link => {
        link.classList.toggle('active');
    });
    bars.classList.toggle("active");
});

