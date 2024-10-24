const textProductResize = () => {
    const products = document.querySelectorAll('.product');
    const backsetItems = document.querySelectorAll('.basket-table__body-row');

    if(products){
        console.log(true);
        
        const changeSizePage = () => {
            products.forEach(prod=> {
                const prodArt = prod.querySelector('.product__article');
                if(!prodArt) return;
                    const prodArtTextNode = prodArt.querySelector('span');
                if(!prodArtTextNode) return;
                    const textDes = String(prodArt.getAttribute('data-desc-text'));
                    const textMob = String(prodArt.getAttribute('data-mob-text'));
    
                    prodArtTextNode.innerHTML= '';
    
                    if(window.innerWidth <= 480) {
                        prodArtTextNode.innerHTML = textMob;
                    }
                    else {
                        prodArtTextNode.innerHTML = textDes;
                    }
            });
        }

        changeSizePage();
        window.addEventListener("resize", ()=> changeSizePage());
    }

    if(backsetItems) {
        const basketItemChangeText = () => {
            backsetItems.forEach(item=> {
                const nameNode = item.querySelector('.basket-table__body-col.basket-table__body-col_name');
                const artNode = item.querySelector('.basket-table__body-col.basket-table__body-col_art');
                
                const nameText = {
                    desctop: String(nameNode.getAttribute('data-name-des')),
                    mobile: String(nameNode.getAttribute('data-name-mob'))
                }

                const artText = {
                    desctop: String(artNode.getAttribute('data-name-des')),
                    mobile: String(artNode.getAttribute('data-name-mob'))
                }

                if(window.innerWidth <= 480) {
                    nameNode.innerHTML = nameText.mobile;
                    artNode.innerHTML = artText.mobile
                } 
                else {
                    nameNode.innerHTML = nameText.desctop;
                    artNode.innerHTML = artText.desctop
                }
            });
        }

        basketItemChangeText();

        window.addEventListener("resize", ()=>basketItemChangeText());
    }
}

export default textProductResize;