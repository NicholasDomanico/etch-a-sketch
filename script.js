const canvas = document.querySelector("#canvas");

const canvasWidth = canvas.offsetWidth;
const canvasHeight = canvas.offsetHeight;

function buildCanvas() {
    let horizontalSpace = canvasWidth / 16;
    let verticalSpace = canvasHeight / 16;

    for(let i = 0; i < horizontalSpace; i++) {
        for(let b = 0; b < verticalSpace; b++) {
            //Create pixels
            let pixel = document.createElement("div");
            pixel.style.cssText = `height: 16px; width: 16px; background-color: #e2dacf;`;
            canvas.appendChild(pixel);
        }
    }
}




buildCanvas();
