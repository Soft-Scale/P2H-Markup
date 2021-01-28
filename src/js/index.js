// new Splide( '.splide' ).mount();
new Splide('#splide', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: '50px',
    width: '920px',
    pagination: false,
    focus: 'center',
    breakpoints: {
		1180: {
            width: '860px',
            gap: '20px',
            perPage: 3,
            focus: 1,
        },
        1024: {
            width: '540px',
            gap: '20px',
            perPage: 2,
            focus: 1,
        },
        680: {
            width: '270px',
            // gap: '30px',
            perPage: 1,
            focus: 1,
        },
        480: {
            width: '230px',
            gap: '0',
            perPage: 1,
            focus: 1,
		},
	}
}).mount();

const smoothLinks = document.querySelectorAll('a[href^="#"]');

for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');


        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

(function() {

    var hamburger = {
      navToggle: document.querySelector('.nav-toggle'),
      nav: document.querySelector('nav'),
  
      doToggle: function(e) {
        e.preventDefault();
        this.navToggle.classList.toggle('expanded');
        this.nav.classList.toggle('expanded');
      }
    };
  
    hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
    hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });
  
  }());