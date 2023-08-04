
window.addEventListener('scroll', () => {
    const caja = document.querySelector('header');
    if (window.scrollY > 10) {
        caja.style.background = 'linear-gradient(180deg, rgba(28,49,165,1) 0%, rgba(0,5,36,1) 100%)';
    } else {
        caja.style.background = 'none';
        caja.style.backgroundColor = '#000524';
    }
});