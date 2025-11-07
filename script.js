/**
 * TOGGLE MOBILE NAVIGATION
 */
const bar = document.getElementById('bar');
const menu = document.getElementById('menu');

// if hamburger icon is clicked
if(bar){
bar.addEventListener('click', () => {
    menu.classList.toggle('active');
});
}
