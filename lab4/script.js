const birthInfo = document.getElementById('birth-info');
const nextElement = document.querySelector('p.second-element');

birthInfo.addEventListener('click', () => swapColors(birthInfo));
nextElement.addEventListener('click', () => swapColors(nextElement));

function swapColors(element){
    if (element.classList.contains('class1')){
        element.classList.remove('class1');
        element.classList.add('class2');
    }
    else if (element.classList.contains('class2')){
        element.classList.remove('class2');
        element.classList.add('class1');
    }
    else{
        element.classList.add(element === birthInfo ? 'class1' : 'class2');
    }
}