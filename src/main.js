const $promedioJ1 = document.querySelector('#promedio-j1');
const $promedioJ2 = document.querySelector('#promedio-j2');
const $botonDeshacer = document.querySelector('#boton-deshacer');

let secuenciaJugador1 = [];
let secuenciaJugador2 = [];






const $inputValorDados = document.querySelector('#resultado-dados');

$inputValorDados.onkeypress  = function(e) {
    
    setTimeout(function() {
        if ($inputValorDados.value.length === 2) {
            const nuevosDados = separarNumEnArray(obtenerValorDados());
            
            manejarSecuencias(nuevosDados);
        
        } 
    }, 100)
    
    
}

function manejarSecuencias(dados) {
    if (secuenciaJugador1.length === 0) {
        secuenciaJugador1 = [...secuenciaJugador1, ...dados];
        actualizarPromedio(secuenciaJugador1, true);
        console.log(secuenciaJugador1);
    } else if (secuenciaJugador2.length < secuenciaJugador1.length) {
        secuenciaJugador2 = [...secuenciaJugador2, ...dados];
        actualizarPromedio(secuenciaJugador2, false);
        console.log(secuenciaJugador2);
    } else {
        secuenciaJugador1 = [...secuenciaJugador1, ...dados];
        actualizarPromedio(secuenciaJugador1, true);
        console.log(secuenciaJugador1);
    }
    
}
function actualizarPromedio(array, jugador) {
    const promedio = calcularPromedio(array);
    if (jugador) { //jugador 1
        resaltarInput($promedioJ1, 'azul');
        $promedioJ1.value = promedio;
    } else { //jugador 2
        resaltarInput($promedioJ2, 'azul');
        $promedioJ2.value = promedio;
    }
}

$botonDeshacer.onclick = deshacerAnotacion;

function deshacerAnotacion() {
    if (secuenciaJugador1.length > secuenciaJugador2.length) {
        secuenciaJugador1.pop();
        secuenciaJugador1.pop();
        console.log(secuenciaJugador1);
        resaltarInput($promedioJ1, 'rojo');
        actualizarPromedio(secuenciaJugador1, true);
    } else {
        secuenciaJugador2.pop();
        secuenciaJugador2.pop();
        console.log(secuenciaJugador2);
        resaltarInput($promedioJ2, 'rojo');
        actualizarPromedio(secuenciaJugador2, false);
    }
    return false;
}

function separarNumEnArray(num) { // TERMINADO
    
    const elementosSeparados = num.split('').map(e => Number(e));

    return elementosSeparados;
   
}

function configurarNombres(arrNombres) { // TERMINADO
    console.log('hola')
    const nombre1 = document.querySelector('#jugador-1').value;
    const nombre2 = document.querySelector('#jugador-2').value;

    const nombreEnPantalla1 = document.querySelector('#nombre-jugador-1');
    const nombreEnPantalla2 = document.querySelector('#nombre-jugador-2');

    nombreEnPantalla1.textContent = nombre1;
    nombreEnPantalla2.textContent = nombre2;

    const $datosJugadores = document.querySelector('.datos-jugadores');
    $datosJugadores.classList.add('oculto');

    const $calculadora = document.querySelector('#calculadora');
    $calculadora.classList.remove('oculto');

    

}

const $botonNombres = document.querySelector('#boton-nombres'); // TERMINADO

$botonNombres.onclick = configurarNombres; // TERMINADO


function calcularPromedio(array) {
    if (array.length) {
        const resultado = array.reduce((acc, num) => {
            return num + acc;
        })

        const promedio = (resultado / array.length).toFixed(1); 
      
        return promedio;
    }
    

    
}

function obtenerValorDados() {
    let valor = document.querySelector('#resultado-dados');
    const dados = valor.value;

    
    resetearValorDados();
    return dados;
}

function resetearValorDados() {
    document.querySelector('#resultado-dados').value = ''
}

function resaltarInput(input, color) {
    
    const claseCSS = `resaltar-${color}`;

    input.classList.add(claseCSS);

    setTimeout(() => {
        input.classList.remove(claseCSS);
    }, 190)

    input.classList.add('transparente');
}

const primerPromedio = document.querySelector('#promedio-j1');

// resaltarInput(primerPromedio, 'rojo');
// console.log('a')
