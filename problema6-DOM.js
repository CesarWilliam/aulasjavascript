// Problema 6 - DOM
//
// Percorra todos os parágrafos de uma página e altere o conteúdo de cada um deles para 
// "Este site foi hackeado por 'Seu nome'".

(function(){
    'use strict';
    var paragrafo = document.querySelectorAll('p');
    var x = 0;

    while(paragrafo[x]) {
        paragrafo[x].textContent = "Seu site foi hackeado";
        x++;
    }

})();