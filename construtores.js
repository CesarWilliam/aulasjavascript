function Caneta (preco, cor) {
    this.preco = preco || 1;
    this.cor = cor || 'black';
    this.mudarCor = function(cor) {
        this.cor = cor;
    }
}

var caneta1 = new Caneta("1", "blue");


// Exemplo de função local transformada em global
// colocando os parâmetros window a função Caneta transforma-se em uma função de escopo global

(function(window){
   'use strict';
   
   window.Caneta = function (preco, cor) {
       var color = cor || 'black';
       this.preco = preco || 1;
       this.mudarCor = function (cor) {
           if (cor !== 'red' && cor !== 'blue' && cor !== 'black') {
               return;
           }
           color = cor;
       }

       this.pegaCor = function () {
            return color;
       }
   } 
})(window);