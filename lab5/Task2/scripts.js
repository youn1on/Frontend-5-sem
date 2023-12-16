const tableWidth = 6;
const tableHeight = 6;

function CreateTable(){
    let content = "<div id='table-container'><table id='colored-table'>";
    for (let i = 0; i < tableHeight; i++) {
        content += "<tr>"
        for (let j = 0; j < tableWidth; j++) {
            content += "<td id='td-"+i+'-'+j+"'>" + (i*tableWidth+j+1) + "</td>"
        }
        content += "</tr>"
    }
    content += "</table></div>"
    document.body.innerHTML += content;
}

CreateTable();

function SetRandomColor(){
    console.log('set random color launched');
    let randomColorAsNum = Math.floor(Math.random()*16777215); //https://css-tricks.com/snippets/javascript/random-hex-color/
    let bgColor = '#'+(randomColorAsNum.toString(16));
    this.style.background = bgColor;
    this.style.color = GetContrastColor(bgColor);
}

function GetContrastColor(bgColor) {
    let color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    let r = parseInt(color.substring(0, 2), 16); 
    let g = parseInt(color.substring(2, 4), 16); 
    let b = parseInt(color.substring(4, 6), 16);
    let brightness = Math.round(((r * 299) + (g * 587) + (b * 114)) / 1000); //Luminance formula
    return (brightness >= 128) ? '#000000' : '#FFFFFF';
}

function SetSelectedColor(){
    console.log('set selected color launched');
    let color = document.getElementById('selected-color').value;
    this.style.background = color;
    this.style.color = GetContrastColor(color);
}

function SetRowColor(){
    let bgColor = document.getElementById('selected-color').value;
    let fgColor = GetContrastColor(bgColor);
    for (let i = 0; i < tableWidth; i++){
        let cell = document.getElementById(`td-${0}-${i}`);
        cell.style.background = bgColor;
        cell.style.color = fgColor;
    }
}

function SetEventHandlers(cellIndex){
    if (cellIndex < 0 || cellIndex >= tableHeight * tableWidth)
    {
        throw (new RangeError("Index "+(cellIndex)+" is out of tables range [0, "+(tableHeight * tableWidth)+")"))
    }
    let targetCell = document.getElementById(`td-${Math.floor(cellIndex/tableWidth)}-${cellIndex%tableWidth}`);
    targetCell.onmouseover = SetRandomColor;
    targetCell.onclick = SetSelectedColor;
    targetCell.ondblclick = SetRowColor;
}

SetEventHandlers(0);
