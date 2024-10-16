const catalogChangePosition = () => {
    const buttons = document.querySelectorAll('.catalog__filter-position-btn');
    const catalogList = document.querySelector('.catalog__product-list');
    const titels = document.querySelector('.catalog__product-list-titels');

    buttons.forEach(btn=> {
        btn.addEventListener('click', ()=> {
            buttons.forEach(bt=>bt.classList.remove('is-active'));

            btn.classList.add('is-active');
            const currentDataPosition = btn.getAttribute('data-position');

            if(currentDataPosition === 'row'){
                catalogList.classList.remove('is-col');
                catalogList.classList.add('is-row');
                titels.classList.add('is-open')
            } 
            else if(currentDataPosition === 'col') {
                catalogList.classList.add('is-col');
                catalogList.classList.remove('is-row');
                titels.classList.remove('is-open')
            }
        });
    });
}

export default catalogChangePosition;