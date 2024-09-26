'use strict'


const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu ol')
const ancors = document.querySelectorAll('.menu a')

burger.addEventListener('click', () => {
	burger.classList.toggle('open-burger');
	if (burger.classList.contains('open-burger')) {
		menu.style.top = '55px'
	} else {
		menu.style.top = '-270px'
	}
})

ancors.forEach(item => {

    item.addEventListener('click', (e) => {
        e.preventDefault();
        let href = item.getAttribute('href').slice(1);
        const scrollTarget = document.querySelector('#'+ href);
        const topOffset = document.querySelector('.menu').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        menu.style.top = '-270px';
        burger.classList.remove('open-burger');
        
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});