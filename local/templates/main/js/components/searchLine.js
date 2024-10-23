const searchLine = () => {
    const catalogBtn = document.querySelector('.header__btn');
    const search = document.querySelector('.header__search');
    const searchInput = document.querySelector('.header__form-input');

    const searchForm = document.querySelector('.header__form');
    const searchResult = document.querySelector('.header__search-result');

    const searchBtnClose = document.querySelector('.header__form-btn-close');

    const formButton = document.querySelector('.header__form-btn');

    searchInput.addEventListener('click', ()=> {
        catalogBtn.style.display = 'none';
        search.classList.add('is-open')

        // catalog header
        document.querySelector('.header-catalog').classList.remove('is-open');
        document.querySelector('.header__btn').classList.remove('is-active');
    });

    searchBtnClose.addEventListener('click', ()=> {
        catalogBtn.style.display = 'flex';
        search.classList.remove('is-open')
    });

    formButton.addEventListener("click", (e)=> {
        if(window.innerWidth <= 992) {
            e.preventDefault();
            
            const parent = formButton.closest('.header__search');
            if(!parent) return;

            const dataLink = String(parent.getAttribute('data-link-redirect-mobile')).replaceAll(" ", "");
            if(dataLink) window.location.replace(dataLink);
        }
    });
}

export default searchLine;