let currentDate = new Date();
let options = {weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric'};
let dateString = currentDate.toLocaleDateString('vi-VN', options);
const main = document.querySelector('.header-middle');
const header = document.querySelector('.header');
const backToTop = document.querySelector('.layout__sticky-icon');
const display = document.querySelector('#back-to-top');

// get current date
document.getElementById('currentDateHeader').innerHTML = dateString;

// sticky top header navigation
const observer = new IntersectionObserver((e, o) => {
    const top = document.querySelector('.header__bot');
    e.forEach(e => {
        if (e.isIntersecting === false) {
            console.log(e);
            top.style.position = 'fixed';
            display.classList.add('show')
        } else {
            display.classList.remove('show')
            top.style.position = 'static';
        }
    })
}, {root: null, threshold: 0, rootMargin: '50px'});
observer.observe(main)

//Back to top
backToTop.addEventListener('click', function (e) {
    e.preventDefault();
    header.scrollIntoView({behavior: 'smooth'});
});

