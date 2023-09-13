const canvas = document.querySelector("#canvas");
const colorSelector = document.querySelector("#colorPicker");
const randomColorButton = document.querySelector("#randomColor")

const canvasWidth = canvas.offsetWidth;
const canvasHeight = canvas.offsetHeight;

let num = 30;
let pixelSize = 512 / num;

let color = "#000000";
//let isColorRandom = randomColorButton.value;

//randomColorButton.addEventListener("change", function() {
//    if (this.checked) {
//        isColorRandom = true;
//        color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
//    } else {
//        isColorRandom = false;
//    }
//})

//colorSelector.addEventListener("input", function() {
//    if (randomColor == false) {
//        color = this.value;
//    }
//});

function buildCanvas() {
    //Create pixels
    for(let i = 0; i < num * num; i++) {
        let pixel = document.createElement("div");
        pixel.setAttribute("style", `height: ${pixelSize}px; width: ${pixelSize}px;`); 
        pixel.style.backgroundColor = "white"
        pixel.setAttribute("class", "pixel");
        canvas.appendChild(pixel);
        }
}   
buildCanvas();

let pixelList = document.getElementsByClassName("pixel");
let pixelArray = [...pixelList]

for(let i = 0; i < pixelArray.length; i++) {
    pixelArray[i].addEventListener("click", function() {
        if (randomColorButton.checked) {
            color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        } else {
            color = colorSelector.value;
        }
        pixelArray[i].style.backgroundColor = color;
    });
}

