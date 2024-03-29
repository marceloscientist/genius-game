let order = []
let clickedOrder = []
let score = 0

// 0 - verde
// 1 - vermelho 
// 2 - amarelo 
// 3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


// troca de cor
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]); 
        lightColor(elementColor, Number(i) + 1);
    }
}

// toggle the light color
let lightColor = (element, number) => {
    number *= 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(()=> {
        element.classList.remove('selected');
    }); 
}


let  checkOrder = () => {
    for(let i in clickedOrder) {
         if(clickedOrder[i] != order[i]) {
            gameOver();
             break;
         }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

let createColorElement = (color) => {
    if(color == 0) return green;
    else if(color == 1) return red;
    else if(color == 2) return yellow;
    else return blue;
}

let nextLevel = () => {
    score++;
    shuffleOrder();
}

let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo\nClique em OK para iniciar um novo jogo!`);
    order = [];
    clickedOrder = [];
    playGame();
} 

// 
let playGame = () => {
    alert(`Bem vindo ao Gênisis! Iniciando o jogo...`);
    score = 0;

    nextLevel();
}

// evemtps de clique para as cores 
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// inicio do jogo
playGame();

