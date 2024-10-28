const dropdown = () => {

    const changeStateDropdown = (buttons, bodys) => {
        buttons.forEach(btn => {
            btn.addEventListener("click", ()=> {
                buttons.forEach(b=> b.classList.remove('is-active'));

                btn.classList.add('is-active');
                const currentID = btn.getAttribute('data-id');

                bodys.forEach(body=> {
                    const bodyID = body.getAttribute('data-id-body');

                    if(bodyID === currentID) {
                        body.classList.add('is-open');
                    }
                    else {
                        body.classList.remove('is-open');
                    }
                });
            });
        });
    }

    const checkClassAndToggleBlock = (className, targetBlockId) => {
        // Получаем все элементы с указанным классом
        const elements = document.querySelectorAll(`.${className}`);
            
        // Проверяем, что таких элементов три и у них есть нужный класс
        if (elements.length >= 3) {
            let count = 0;
            
            elements.forEach(element => {
                if (element.classList.contains('is-open')) {
                    count++;
                }
            });
            console.log(count);
            // Если найдено три элемента с классом "check-class", показываем блок
            if (count >= 3) {
                document.getElementById(targetBlockId).classList.add('is-open');
            } else {
                document.getElementById(targetBlockId).classList.remove('is-open');
            }
        } else {
            document.getElementById(targetBlockId).classList.remove('is-open');
        }
    }
    

    const changeOpenDropdown = (parent, openNode, isOpenBlock = false) => {
        const accordions = parent;

        accordions.forEach(acc=> {
            const top = acc.querySelector(openNode);
            top.addEventListener("click", ()=> {
                acc.classList.toggle('is-open')

                if(isOpenBlock) {
                    checkClassAndToggleBlock('conf-fitings__accordion', 'product');
                }
            });
        });
    }

    if(document.querySelector('.vacancy__item-dropdown-button')) {
        document.querySelectorAll('.vacancy__item').forEach(item=> {
            const dropButtons = item.querySelectorAll('.vacancy__item-dropdown-button');
            const dropBodys = item.querySelectorAll('.vacancy__item-dropdown-el');

            changeStateDropdown(dropButtons, dropBodys);
        })

    }

    
    if(document.querySelector('.conf-fitings__accordion')) {
        const parent = document.querySelectorAll('.conf-fitings__accordion');
        const openNode = '.conf-fitings__accordion-top';

        changeOpenDropdown(parent, openNode, true);
    }

    if(document.querySelector('.conf-fitings__specifications-accordion')) {
        const parent = document.querySelectorAll('.conf-fitings__specifications-accordion');
        const openNode = '.conf-fitings__specifications-accordion-top';

        changeOpenDropdown(parent, openNode);
    }

    if(document.querySelector('.catalog__category')) {
        const topOpen = document.querySelector('.catalog__category-top');
        const parent = document.querySelector('.catalog__category');
        
        topOpen.addEventListener("click", ()=> {
            parent.classList.toggle('is-open');
        });
    }

    if(document.querySelector('.catalog__accordion')) {
        const parent = document.querySelectorAll('.catalog__accordion');
        const openNode = '.catalog__accordion-top';

        changeOpenDropdown(parent, openNode);
    }

    if(document.querySelector('.catalog__accordion-second')) {
        const parent = document.querySelectorAll('.catalog__accordion-second');
        const openNode = '.catalog__accordion-second-top';

        changeOpenDropdown(parent, openNode);
    }

    if(document.querySelector('.catalog__specifications')) {
        const parent = document.querySelector('.catalog__specifications');
        const topOpen = document.querySelector('.catalog__specifications-top');
        
        topOpen.addEventListener("click", ()=> {
            parent.classList.toggle('is-open');
            console.log(true)
        });
    }

    if(document.querySelector('.catalog__specifications-accordion')) {
        const parent = document.querySelectorAll('.catalog__specifications-accordion');
        const openNode = '.catalog__specifications-accordion-top';

        changeOpenDropdown(parent, openNode);
    }

    if(document.querySelector('.header-catalog__item-accordion')) {
        const parent = document.querySelectorAll('.header-catalog__item-accordion');
        const openNode = '.header-catalog__item-accordion-top';

        changeOpenDropdown(parent, openNode);
    }

    if(document.querySelector('.header-catalog__list')) {
        const parent = document.querySelectorAll('.header-catalog__list');
        const openNode = '.header-catalog__item_title';

        changeOpenDropdown(parent, openNode);


        const buttonOpen = document.querySelector('.header-catalog__open-button');
        const body = document.querySelector('.header-catalog__body');

        if(!buttonOpen) return;

        buttonOpen.addEventListener("click", ()=> {
            body.classList.toggle('is-open');
            buttonOpen.classList.toggle('is-active');
        });
    }
}

export default dropdown;