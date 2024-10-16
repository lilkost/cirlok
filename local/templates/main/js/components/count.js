const count = () => {
    const countParent = document.querySelectorAll('.count-parent');

    const formatNumber = (x) => {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return parts.join(".");
    }

    countParent.forEach(parent=> {
        const countEl = parent.querySelector('.count');

        const input = countEl.querySelector('input[type="number"]');
        const btnMinus = countEl.querySelector('.count-btn-minus');
        const btnPlus = countEl.querySelector('.count-btn-plus');

        const changePrice = (parent, currentCount) => {
            if(!parent || !currentCount) return;
            
            console.log(parent, currentCount);

            const parentDataPrice = parent.getAttribute("data-price");
            
            if(parentDataPrice) {
                const sum = Number(parentDataPrice) * currentCount
                
                const dataSum = parent.getAttribute('data-sum');

                if(dataSum){
                    parent.setAttribute('data-sum', sum);
                }

                if(parent.querySelector('.basket-table__body-col_sum')) {
                    const nodeSum = parent.querySelector('.basket-table__body-col_sum');
                    console.log(formatNumber(Number(sum)))
                    nodeSum.innerHTML = `${formatNumber(sum)} р`;
                }
            }

            const countParent = parent.getAttribute("data-count");

            if(countParent) {
                parent.setAttribute("data-count", currentCount);
            }
        }

        // +
        btnPlus.addEventListener('click', ()=> {
            let currentCount = Number(parent.getAttribute('data-count'));

            currentCount++;
            parent.setAttribute('data-count', currentCount);

            if(input) {
                input.value = currentCount;
            }

            btnMinus.classList.remove('is-disabled')
            btnMinus.removeAttribute('disabled');

            changePrice(parent, currentCount);
        });
        // -
        btnMinus.addEventListener("click", ()=> {
            let currentCount = Number(parent.getAttribute('data-count'));

            if(currentCount <= 1) return;

            currentCount--;

            if(currentCount === 1) {
                btnMinus.classList.add('is-disabled');
                btnMinus.setAttribute('disabled', true);
            }

            parent.setAttribute('data-count', currentCount);

            if(input) {
                input.value = currentCount;
            }
            changePrice(parent, currentCount);
        });
        // input change value
        input.addEventListener("input", (e)=> {
            const numVal = Number(e.target.value);

            if(numVal <= 1) {
                input.value = 1;
                btnMinus.classList.add('is-disabled');
                btnMinus.setAttribute('disabled', true);

                if(parent.querySelector('.basket-table__body-col_sum')) {
                    const sumNode = parent.querySelector('.basket-table__body-col_sum');
                    
                    if(parent.getAttribute('data-price')) {
                        const defaultPrice = Number(parent.getAttribute('data-price'));
                        sumNode.innerHTML = `${formatNumber(defaultPrice)} р`;
                    }
                }

                if(parent.getAttribute('data-count')) {
                    parent.setAttribute('data-count', 1);
                }
            } else {
                btnMinus.classList.remove('is-disabled');
                btnMinus.removeAttribute('disabled');
            }

            changePrice(parent, numVal);
        });
    });
}

export default count;