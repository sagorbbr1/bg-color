window.onload = function () {
    main();

}

function main () {
    const btn = document.querySelector('#btn');
    const root = document.querySelector('#root');
    const color = document.querySelector('#color');


    
    btn.addEventListener('click', function () {
        const bgColor = createRGB();
        color.textContent = createRGB();

        root.style.backgroundColor = bgColor;
    
    
    })



}

function createRGB() {
    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;

    return `rgb(${red}, ${green}, ${blue})`
}


// const btn = document.querySelector('#btn');

// btn.addEventListener('click', function (e) {
    
//     const randColor = Math.floor(Math.random() * 255) + 1;

//     const body = document.documentElement.lastChild;

//     body.style.backgroundColor = `#${randColor}${randColor}`;
// })
