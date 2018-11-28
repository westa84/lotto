function buildArrayWithRandomNumbers(list) {
    const from = 1;
    const to = 80;
    const size = 6;

    for (let i = 0; i < size; i++) {
        const random = Math.round(Math.random() * (from - to) + to);
        list.push(random);
    }
}

function setup() {
    const numbers = [];
    buildArrayWithRandomNumbers(numbers);
    render(numbers);
}

function render(list) {
    const $container = document.querySelector("#container");
    list.forEach(function (item) {
        const template = `<p>${item}</p>`;
        $container.innerHTML += template;
    } );
}

window.addEventListener('DOMContentLoaded', setup);

//14.123
//14 - Math.round
//14 = Math.floor
//console.log();

