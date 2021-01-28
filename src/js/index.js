// new Splide( '.splide' ).mount();
new Splide( '#splide', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
    width: '980px',
    pagination: false,
	focus  : 'center',
} ).mount();

const smoothLinks = document.querySelectorAll('a[href^="#"]');

for (let smoothLink of smoothLinks) {
    console.log(smoothLinks)
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');
        console.log(id)

        
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};