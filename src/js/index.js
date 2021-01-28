// new Splide( '.splide' ).mount();
new Splide( '#splide', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
    width: '980px',
    pagination: false,
	focus  : 'center',
} ).mount();
