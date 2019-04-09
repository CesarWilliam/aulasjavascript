// Problema 1 - DOM
//
// Mostrar na tela (div com uma mensagem) uma mensagem de boas-vindas.
// Ex: Bem vindo, Will!. O nome do usuário pode ser uma variável cujo valor foi digitado pelo prompt()

(function(){
    var nome = prompt("Qual seu nome?");
    document.querySelector("#msg1").textContent = "Bem vindo " + nome;
})();

// A propriedade .textContent sempre será referenciada a texto, uma string
// Para modifica o html é necessário utilizar a propridade .innerHTML


// Problema 2 - DOM
//
// Repetir o exemplo anterior, mas fazer com que o nome do usuário seja digitado num input (e não mais no prompt);


var nome2;
function escreve () {
    'use strict';
    nome2 = document.querySelector("#txtNome");
    var nome = nome2.value;
    document.querySelector("#msg2").textContent = "Bem vindo " + nome;
}