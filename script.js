const canvas = document.querySelector("#canvas");
const colorSelector = document.querySelector("#colorPicker");
const randomColorButton = document.querySelector("#randomColor")
const canvasSizeSlider = document.querySelector("#sizeSelector");

const canvasWidth = canvas.offsetWidth;
const canvasHeight = canvas.offsetHeight;

const defaultCanvasSize = 30
let pixelSize = 512 / defaultCanvasSize;

let color = "#000000";

function buildCanvas(canvasSize) {
    //Create pixels
    for(let i = 0; i < canvasSize * canvasSize; i++) {
        let pixel = document.createElement("div");
        pixel.setAttribute("style", `height: ${512/canvasSize}px; width: ${512/canvasSize}px;`); 
        pixel.style.backgroundColor = "white";
        pixel.setAttribute("class", "pixel");
        canvas.appendChild(pixel);
        }

    let pixelList = document.getElementsByClassName("pixel");
    let pixelArray = [...pixelList];

    for(let i = 0; i < pixelArray.length; i++) {
        pixelArray[i].addEventListener("mousedown", function() {
            if (randomColorButton.checked) {
                color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
            } else {
                color = colorSelector.value;
            }
            pixelArray[i].style.backgroundColor = color;
        });

        pixelArray[i].addEventListener("mouseover", function(e) {
            if (e.buttons == 1 || e.buttons == 3) {
                if (randomColorButton.checked) {
                    color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
                } else {
                    color = colorSelector.value;
                }
                pixelArray[i].style.backgroundColor = color;
            }
        });
    }
}  

canvasSizeSlider.addEventListener("change", function() {
    let num = Number(this.value);
    let display = document.querySelector("#canvasSizeDisplay");
    display.innerHTML = `${num} X ${num}`;
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }
    buildCanvas(num);
})

buildCanvas(defaultCanvasSize);



