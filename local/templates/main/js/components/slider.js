const createdSliders = () => {
    const swiperBanner = new Swiper('.slider-banner', {
        direction: 'horizontal',
        loop: true,

        effect: 'fade',

        // autoplay: {
        //     delay: 5000,
        // },

        pagination: {
            el: '.slider-banner-pagination'
        },

        navigation: {
            nextEl: '.slider-banner-next',
            prevEl: '.slider-banner-prev',
        },
    });

    swiperBanner.on('slideChangeTransitionEnd', (swiper) => {
        const sliderBannerNumbersCurrent = document.getElementById('sliderBannerNumbersCurrent');
        const currentSlideActive =
            Number(document.querySelector('.slider-banner__slide.swiper-slide-active').getAttribute('data-swiper-slide-index')) + 1;

        sliderBannerNumbersCurrent.innerHTML = currentSlideActive;
    });

    if(document.querySelector('.new-products__slider')) {
        const slider = document.querySelector('.new-products__slider');

        const swiper = new Swiper(slider, {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            slidesPerView: 4,
            spaceBetween: 20,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.new-products__slider-button-next',
                prevEl: '.new-products__slider-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.new-products__slider-scrollbar',
            },
        });
    }

    if(document.querySelector('.certificate__slider')) {
        const slider = document.querySelector('.certificate__slider');

        const swiper = new Swiper(slider, {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            slidesPerView: 4,
            spaceBetween: 20,

            // Navigation arrows
            navigation: {
                nextEl: '.certificate__slider-button-next',
                prevEl: '.certificate__slider-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.certificate__slider-scrollbar',
            },
        });
    }

    if(document.querySelector('.about-page__clients-slider')){
        const slider = document.querySelector('.about-page__clients-slider');

        const swiper = new Swiper(slider, {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            slidesPerView: 6,
            spaceBetween: 20,

            // Navigation arrows
            navigation: {
                nextEl: '.about-page__clients-btn-next',
                prevEl: '.about-page__clients-btn-prev',
            },
        });
    }

    if(document.querySelector('.catalog__aside-slider')) {
        const swiper = new Swiper('.catalog__aside-slider', {
            direction: 'horizontal',
            loop: true,

            pagination: {
                el: '.catalog__aside-slider-pagination',
            },

            navigation: {
                nextEl: '.catalog__aside-slider-button_next',
                prevEl: '.catalog__aside-slider-button_prev',
            },
        });
    }

    if(document.querySelector('.card__slider-min') && document.querySelector('.card__slider-big') ) {
        let swiper = new Swiper(".card__slider-min", {
            spaceBetween: 15,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesProgress: true,
            direction: 'vertical',
            navigation: {
                nextEl: ".card__slider-min-btn_next",
                prevEl: ".card__slider-min-btn_prev",
            },
        });
        let swiper2 = new Swiper(".card__slider-big", {
            spaceBetween: 15,
            direction: 'vertical',

            thumbs: {
                swiper: swiper,
            },
        });
    }
}

export default createdSliders;