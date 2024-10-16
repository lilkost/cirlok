const newsFilterSlider = () => {
    const slider = document.querySelector('.popular-news__slider');
    const containerEl = document.querySelector('.filter-contaier');

    if(!slider || !containerEl) return;

    const swiper = new Swiper(slider, {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 4,
        spaceBetween: 20,

        // Navigation arrows
        navigation: {
            nextEl: '.popular-news__slider-button-next',
            prevEl: '.popular-news__slider-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.popular-news__slider-scrollbar',
        },
    });

    // обновление swiper js
    const handleMixEndOnce = () => {
        swiper.update();
    };
    
    const mixer = mixitup(containerEl, {
        animation: {
            duration: 500
        },
        callbacks: {
            onMixEnd: handleMixEndOnce
        }
    });
}

export default newsFilterSlider;