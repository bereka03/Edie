let burger_menu = document.querySelector('.burger');
let nav_menu = document.querySelector('.nav-list-wrapper');
let cancel_icon = document.querySelector('.cancel');
let nav_links = document.querySelectorAll('.nav-link');
function openMenu() {
    burger_menu.addEventListener('click', () => {
        nav_menu.classList.toggle('active');
    })
}
function removeMenu() {
    cancel_icon.addEventListener('click', () => {
        nav_menu.classList.remove('active');
    });
    nav_links.forEach( n => n.addEventListener('click', () => {
        nav_menu.classList.remove('active');
    }))
}
openMenu();
removeMenu();
