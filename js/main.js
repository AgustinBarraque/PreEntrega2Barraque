/*nav bar responsive */
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



    