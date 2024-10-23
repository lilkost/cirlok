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
    }

    window.addEventListener("scroll", (e)=> {
        headerVisabilityRow();
    });

}

export default scrollPage;