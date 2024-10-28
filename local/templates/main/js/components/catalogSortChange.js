const changeTextSort = () => {
    const buttonOpen = document.querySelector('.catalog__filter-sort-title');
    const textNode = document.querySelector('.catalog__filter-sort-text-mob');
    const list = document.querySelector('.catalog__filter-sort-list');
    const buttons = document.querySelectorAll('.catalog__filter-sort-btn');
    
    const toggleClass = () => {
        list.classList.toggle('is-open');
    }

    if(buttonOpen) {
        buttonOpen.addEventListener("click", ()=> toggleClass());
    }

    buttons.forEach(btn=>{
        btn.addEventListener("click", ()=> {
            list.classList.toggle('is-open');
            const text = String(btn.getAttribute('data-text'));
            textNode.innerHTML = text;
        });
    })
}

export default changeTextSort;