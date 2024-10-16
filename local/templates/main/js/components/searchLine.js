const searchLine = () => {
    const catalogBtn = document.querySelector('.header__btn');
    const search = document.querySelector('.header__search');
    const searchInput = document.querySelector('.header__form-input');

    const searchForm = document.querySelector('.header__form');
    const searchResult = document.querySelector('.header__search-result');

    const searchBtnClose = document.querySelector('.header__form-btn-close');


    searchInput.addEventListener('click', ()=> {
        catalogBtn.style.display = 'none';
        search.classList.add('is-open')
    });

    searchBtnClose.addEventListener('click', ()=> {
        catalogBtn.style.display = 'flex';
        search.classList.remove('is-open')
    });
}

export default searchLine;