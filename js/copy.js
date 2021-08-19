function copyText(htmlElement)
{
    if (!htmlElement) {
        return;
    }

    let elementText = htmlElement.innerText;

    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText);
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement);
    const msg = document.querySelector('#msg-suc');
    msg.innerHTML = 'הפקודה הועתקה';
    msg.className = 'msgsuc'
}