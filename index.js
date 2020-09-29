function mostrarResultado(valor) {
    document.getElementById('display').innerHTML = valor;
}

function obtenerResultado(tecla) {
    let display = document.getElementById('display').innerHTML;
    let resultado = display + tecla;
    return resultado;
}

function presionarNumero(valor) {
    let result = obtenerResultado(valor);
    if (result == '01010010') {
        mostrarResultado('Rolling (<>)');
    } else {
        mostrarResultado(result);
    }
}

let num1;
let num2;
let operacion;

function sumar() {
    num1 = obtenerResultado();
    operacion = '+';
    limpiar();
}

function restar() {
    num1 = obtenerResultado();
    operacion = '-';
    limpiar();
}

function multiplicar() {
    num1 = obtenerResultado();
    operacion = '*';
    limpiar();
}

function dividir() {
    num1 = obtenerResultado();
    operacion = '/';
    limpiar();
}

function limpiar() {
    mostrarResultado('');
}

function calcular() {
    num2 = obtenerResultado();
    resolver();
}

function resolver() {
    let calculo;
    let op1 = parseFloat(num1);
    let op2 = parseFloat(num2);
    if (operacion === '+') {
        calculo = op1 + op2;
    } else if (operacion === '-') {
        calculo = op1 - op2;
    } else if (operacion === '/') {
        if (op2 === 0) {
            calculo = 'ERROR'
        } else {
            calculo = op1 / op2;
        }
    } else if (operacion === '*') {
        calculo = op1 * op2;
    }
    mostrarResultado(calculo);
    operacion = '';
    num1 = 0;
    num2 = 0;
}

function ac() {
    mostrarResultado('');
    num1 = 0;
    num2 = 0;
}

function animarTicket() {
    var target = document.querySelector('.ticket');
    var player = target.animate([
        { transform: 'translate(0px, 105px)' },
        { transform: 'translate(0px,0px)' },
    ], 500);
    player.addEventListener('finish', function () {
        target.style.transform = 'translate(0px,0px)';
    });
}

var igual = document.querySelector('.igual');
igual.addEventListener('click', function () {
    animarTicket()
});