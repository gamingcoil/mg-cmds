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
    let msg = document.createElement('p');
    document.body.appendChild(msg);
    msg.innerHTML = 'הפקודה הועתקה';
    msg.className = 'msgsuc'
}

document.querySelector('#btnCopy').onclick = 
function ()
{
    copyText(document.querySelector('#text-to-copy'));
}
