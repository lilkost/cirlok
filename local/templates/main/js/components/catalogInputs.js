const catalogInputChecked = () => {
    const bodys = document.querySelectorAll('.catalog__specifications-accordion-body');
    
    bodys.forEach(body=>{
        const inputs = body.querySelectorAll('.catalog__specifications-label input');
        
        inputs.forEach(input=> {
            input.addEventListener("click", ()=> {
                const dataAll = input.getAttribute('data-all');
                if(dataAll) {
                    if(input.checked) {
                        inputs.forEach(inp=> {
                            inp.checked = true;
                        })
                    }
                    else {
                        inputs.forEach(inp=> {
                            inp.checked = false;
                        })
                    }
                }
            });
        });
    });
}

export default catalogInputChecked