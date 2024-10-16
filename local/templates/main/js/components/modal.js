const modal = () => {
    // Fn
    const openModal = (modal) => {
        modal.classList.add('is-open');
    }

    const closeModal = (modal) => {
        modal.classList.remove('is-open');
    }
    
    const closeModalESC = (e, modal) => {
        if(e.key === "Escape" || e.code === "Escape" || e.keyCode === 27) {
            closeModal(modal);
        }
    }

    const handleClickHiddenBlock = (e, modal) => {
        if(e.target === modal) {
            modal.classList.remove('is-open');
        }
    }

    // cookie's
    if(document.querySelector('.cookies-modal')) {
        const modal      = document.querySelector('.cookies-modal');
        const modalClose = document.querySelector('.cookies-modal__btn-close');
        const buttoms    = document.querySelectorAll('.cookies-modal__btn');

        // Проверяем наличие значения
        if (localStorage.getItem('cookie')) {
            const z = localStorage.getItem('cookie');
            
            if(z === "Y") {
                modal.style.display = "none";
            }
            else{
                modal.style.display = "block";
            }
        } else {
            modal.style.display = "block";
        }

        const hiddenBlock = () => {
            modal.classList.add('is-hidden');
        }

        const handleCliclButton = (button) => {
            const dataCookie = String(button.getAttribute('data-cookies'));
            localStorage.setItem('cookie', dataCookie);
            hiddenBlock();
        }

        buttoms.forEach(btn=> {
            btn.addEventListener("click", ()=> handleCliclButton(btn));
        });

        modalClose.addEventListener("click", ()=> hiddenBlock());
    }

    // обратная связь модальное окно
    if(document.querySelector('.questions-modal')) {
        const modal = document.querySelector('.questions-modal');
        const btnsOpen = document.querySelectorAll('.feedback-btn');
        const modalBtnClose = document.querySelector('.questions-modal__btn-close');

        btnsOpen.forEach(btn=> btn.addEventListener("click", ()=> openModal(modal)));

        modalBtnClose.addEventListener("click", ()=> closeModal(modal));

        window.addEventListener("keyup", (e)=> closeModalESC(e, modal));

        window.addEventListener('click', (e)=> handleClickHiddenBlock(e, modal))
    }

    // обратная связь
    if(document.querySelector('.kp-modal')) {
        const modal = document.querySelector('.kp-modal');
        const btnsOpen = document.querySelectorAll('.kp-open-btn');
        const modalBtnClose = document.querySelector('.kp-modal__btn-close');

        btnsOpen.forEach(btn=> btn.addEventListener("click", ()=> openModal(modal)));

        modalBtnClose.addEventListener("click", ()=> closeModal(modal));

        window.addEventListener("keyup", (e)=> closeModalESC(e, modal));

        window.addEventListener('click', (e)=> handleClickHiddenBlock(e, modal))
    }

    // окно с выбором города
    if(document.querySelector('.city-modal')) {
        const modal = document.querySelector('.city-modal');
        const btnsOpen = document.querySelectorAll('.city-btn');
        const modalBtnClose = document.querySelector('.city-modal__close-btn');
        const cityTextNode = document.querySelectorAll('.city-text');
        const textNode = document.querySelectorAll('.city-modal__item');

        btnsOpen.forEach(btn=> btn.addEventListener("click", ()=> openModal(modal)));

        modalBtnClose.addEventListener("click", ()=> closeModal(modal));

        window.addEventListener("keyup", (e)=> closeModalESC(e, modal));

        window.addEventListener('click', (e)=> handleClickHiddenBlock(e, modal));

        const setCity = (city) => {
            cityTextNode.forEach(text=> {
                text.innerHTML = city;
                closeModal(modal);
            })
        }

        // установить текущий город
        let currentText = '';

        textNode.forEach(text=> {
            text.addEventListener("click", ()=> {
                currentText = String(text.getAttribute('data-city'));

                setCity(currentText);
            });
        });


    }

    // модалка с оформлением заказа
    if(document.querySelector('.order-modal')) {
        const modal = document.querySelector('.order-modal');
        const btnsOpen = document.querySelectorAll('.order-open-modal-btn');
        const modalBtnClose = document.querySelectorAll('.order-close-modal-btn');

        btnsOpen.forEach(btn=> btn.addEventListener("click", ()=> openModal(modal)));
        modalBtnClose.forEach(btn=> btn.addEventListener("click", ()=> closeModal(modal)))

        window.addEventListener("keyup", (e)=> closeModalESC(e, modal));

        window.addEventListener('click', (e)=> handleClickHiddenBlock(e, modal))
    }
}

export default modal;