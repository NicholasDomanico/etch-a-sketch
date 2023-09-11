const canvas = document.querySelector("#canvas");

const canvasWidth = canvas.offsetWidth;
const canvasHeight = canvas.offsetHeight;

function buildCanvas() {
    let num = 30;
    let pixelSize = 512 / num;

    //Create pixels
    for(let i = 0; i < num * num; i++) {
        let pixel = document.createElement("div");
        pixel.setAttribute("style", `height: ${pixelSize}px; width: ${pixelSize}px;`); 
        pixel.style.backgroundColor = "white"
        pixel.setAttribute("class", "pixel");
        canvas.appendChild(pixel);
        }
    
    let pixelList = document.getElementsByClassName("pixel");
    let pixelArray = [...pixelList]
    for(let i = 0; i < pixelArray.length; i++) {
        pixelArray[i].addEventListener("click", function() {
            pixelArray[i].style.backgroundColor = "black";
        });
    }
}

buildCanvas();
