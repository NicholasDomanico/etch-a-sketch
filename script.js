const canvas = document.querySelector("#canvas");

const canvasWidth = canvas.offsetWidth;
const canvasHeight = canvas.offsetHeight;

let colorSelector = document.querySelector("#colorPicker");

let num = 30;
let pixelSize = 512 / num;

let color = "#000000"

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

colorSelector.addEventListener("input", function() {
    color = this.value;
});

let pixelList = document.getElementsByClassName("pixel");
let pixelArray = [...pixelList]
for(let i = 0; i < pixelArray.length; i++) {
    pixelArray[i].addEventListener("click", function() {
        pixelArray[i].style.backgroundColor = color;
    });
}

