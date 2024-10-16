const categoryOpenInfo = () => {
    const items = document.querySelectorAll('.popular-category__item');

    items.forEach(item=> {
        const btn = item.querySelector('.popular-category__btn-info');

        btn.addEventListener("click", (e)=> {
            e.preventDefault();

            item.classList.toggle('is-active');
        });
    });
}

export default categoryOpenInfo;