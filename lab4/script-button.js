document.body.innerHTML +=
    "<div class='img-container'></div>" +
    "<div class='button-panel'>" +
    "<button class='add-button'>Додати</button>" +
    "<button class='resize-plus-button'>Збільшити</button>" +
    "<button class='resize-minus-button'>Зменшити</button>" +
    "<button class='rm-button'>Видалити</button>" +
    "</div>"

const addButton = document.querySelector('button.add-button');
const resizePlusButton = document.querySelector('button.resize-plus-button');
const resizeMinusButton = document.querySelector('button.resize-minus-button');
const removeButton = document.querySelector('button.rm-button');
const imageContainer = document.querySelector('div.img-container');
const heightLowerLimit = 200;
const widthUpperLimit = 3000;

function addImage(){
    if (imageContainer.innerHTML === ''){
        imageContainer.innerHTML = '<img src="Yaremche.jpg" alt="Яремче">';
    }
    else{
        alert('Image already exists!');
    }
}

function removeImage(){
    imageContainer.innerHTML = '';
}

function resizePlusImage(){
    if (imageContainer.innerHTML === ''){
        alert('No image!');
    }
    else{
        let image = imageContainer.getElementsByTagName('img')[0];
        if (image.width < widthUpperLimit){
            image.height *= 1.25;
            image.width *= 1.25;
        }
    }
}

function resizeMinusImage(){
    if (imageContainer.innerHTML === ''){
        alert('No image!');
    }
    else {
        let image = imageContainer.getElementsByTagName('img')[0];
        if (image.height > heightLowerLimit){
            image.height *= 0.8;
            image.width *= 0.8;
        }
    }
}

addButton.addEventListener('click', addImage);
removeButton.addEventListener('click', removeImage);
resizePlusButton.addEventListener('click', resizePlusImage);
resizeMinusButton.addEventListener('click', resizeMinusImage);
