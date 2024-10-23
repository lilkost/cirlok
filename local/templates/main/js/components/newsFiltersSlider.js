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
        
        pagination: {
            el: '.popular-news__pagination'
        },

        breakpoints:{
            1161: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            860: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            }, 
            568: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            280: {
                slidesPerView: 1.55,
                spaceBetween: 10,
            },
        }

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