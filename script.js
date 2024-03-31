var TrandingSlider = new Swiper('.tranding-slider',
{
    effect: 'coverflow',
    grabCursor: true, 
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect:{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-button-next',
        clickable: true,
    },
    navigation:{
        nextEl: '.swiper-buutton-next',
        prevEl: '.swiper-button-prev'
    }
})