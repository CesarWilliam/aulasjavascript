// IIFE (Immediately-invoked function expression) - Funções que se auto-invocam 

(function(){
    'use strict';

    // function simples com parâmetros

    function somar(n1, n2) {
        console.log(n1 + n2);
    }

    somar(20, 20);

    // function com array de parâmetros

    function multiplicar (arr) {
        console.log(arr[0] * arr[1]);
    }

    multiplicar([10, 2]);

    // function com array de parâmertos e arguments
    // arguments cria um "array" com as informações contidas dentro dos parâmetros da chamada 
    // da função, sem precisar ter o parâmetro dentro da função declarada
    // valor 0 no arguments é considerado falso

    function somarArray () {
        var result = 0;
        var x = 0;

        while(typeof arguments[x] === 'number'){ // se for número retorna true no while
            result += arguments[x];
            // result = result + arguments[x];

            x++;
            // x = x + 1;
        }
        console.log('result: ', result);
    }

    somarArray(0, 0, 0, 10, 5, 30, 20);
})();