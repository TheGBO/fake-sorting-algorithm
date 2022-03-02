var buttons = document.getElementsByClassName("pad-btn");
var colors = ["red", "yellow", "green", "blue", "orange"]
for (let i = 0; i < 600; i++) {
    document.getElementById("game").innerHTML += `<button class="pad-btn"></button> `;
    
}



function randomFromArray(array){
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

const timer = ms => new Promise(res => setTimeout(res, ms));

async function organizeBtns(){
    for (let index = 0; index < buttons.length; index++) {
        const element = buttons[index % buttons.length];
        element.style.backgroundColor = colors[index % colors.length];

        await timer(5);
    } 
}

async function blinkBtns(){
    for (let index = 0; index < buttons.length; index++) {
        const element = buttons[index % buttons.length];
        element.style.backgroundColor = randomFromArray(colors);
        console.log(index);
    }
}


async function start(){
    await organizeBtns();
}


blinkBtns();

setTimeout(() => {
    start();
}, 1000);