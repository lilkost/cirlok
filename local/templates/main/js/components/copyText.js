const copyText = () => {
    const copyTextNode = document.querySelectorAll('.copy-text');

    if(!copyTextNode) return;

    const copyText = (text, node) => {
        navigator.clipboard.writeText(text)
        .then(() => {
            node.classList.add('is-succes');

            setTimeout(()=> {
                node.classList.remove('is-succes');
            }, 1000);
        })
        .catch(err => {
            node.classList.add("is-error");
            
            setTimeout(()=> {
                node.classList.remove('is-error');
            }, 1000);
        });
    }

    copyTextNode.forEach(node=> {
        node.addEventListener('click', ()=> {
            const text = String(node.getAttribute('data-copy-text'));
            copyText(text, node);
        });
    });
}

export default copyText;