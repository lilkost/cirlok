const phoneMask = () => {
    const phoneNodes = document.querySelectorAll('.phone-mask');

    if(!phoneNodes) return;

    phoneNodes.forEach(phone=> {
        const element = phone;
        const maskOptions = {
            mask: '+{7}(000)000-00-00'
        };
        const mask = IMask(element, maskOptions);
    });
}

export default phoneMask;