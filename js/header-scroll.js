/**
 * Hide header on scroll down, show on scroll up
 */

let lastScroll = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // If scrolled more than 100px
    if (currentScroll <= 100) {
        header.style.transform = 'translateY(0)';
        return;
    }
    
    // Scrolling down - hide header
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } 
    // Scrolling up - show header
    else if (currentScroll < lastScroll) {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});