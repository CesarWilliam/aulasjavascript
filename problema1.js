// Problema 1
//
// Criar uma função que retorne a média de números passados por parâmetros.
// Essa função pode receber quantos números forem necessários. Exemplos:
// calcularMedia (2, 4); = 3
// calcularMedia (1, 1, 2, 3, 5); = 2.4

(function(){

    function calculoMedia1 () {
        var result = 0;
        var x = 0;
        var resultMedia = 0;
        // var qtd = arguments.length; ==> Quantidade de elementos dentro do arguments 

        while(typeof arguments[x] === 'number') {
            result += arguments[x];
            x++;
            resultMedia = result/x;
        }
        console.log("calculoMedia1 Result média: ", resultMedia);
    }

    calculoMedia1(1, 1, 2, 3, 5);


    // Ou tem essa opção também

    function calcularMedia2 () {
        var total = 0;
        var qtd = arguments.length;
        var x = 0;

        while(typeof arguments[x] === 'number') {
            total += arguments[x];
            x++;
        }
        return total/ qtd;
    }

    var media1 = calcularMedia2(2, 3);

    console.log('calcularMedia2 media1: ', media1);

})();