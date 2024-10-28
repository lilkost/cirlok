const scrollPage = () => {
    const mainNode = document.querySelector(".main");
    const header = document.querySelector('.header');
    const headerBottomRow = header.querySelector('.header__row.header__row_bottom');

    const topMain = () => {
        const top = `${header.clientHeight}px`;
        mainNode.style = `--top: ${top}`;
    }

    topMain();

    const headerVisabilityRow = () => {
        const y = Math.round(window.pageYOffset);
        
        if(y >= 150) {
            headerBottomRow.classList.add('is-hidden');
        } 
        else {
            headerBottomRow.classList.remove('is-hidden');
        }


        // скрыть кнопки с права
        const footer = document.querySelector('footer'); // Замените 'footer' на ваш селектор футера
        const rect = footer.getBoundingClientRect();
        const buttonRight = document.querySelector('.buttons-right');
        
        // Проверяем, виден ли футер в области просмотра
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            buttonRight.style.right = '-500px'
        }
        else {
            buttonRight.style.right = '0px';
        }
    }

    window.addEventListener("scroll", (e)=> {
        headerVisabilityRow();
    });

}

export default scrollPage;