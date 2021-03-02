const nav = document.querySelector('#main');
// grab top of nav
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    // sets padding to height of navbar
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    // add the fixed nav class
    document.body.classList.add('fixed-nav');
  } else {
    // remove padding at the top
    document.body.style.paddingTop = 0;
    // remove the fixed-nav class
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav);
