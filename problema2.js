// Problema 2
//
// Crie uma função que retorne o índice de massa corporal (IMC);
// Crie uma outra função que receba este índice e retorne uma string informando sua classificação.
//
// Fórmula - IMC = peso/altura²
//
// Classificação:
// - Muito abaixo do peso: 16 a 16,9 kg/m2
// - Abaixo do peso: 17 a 18,4 kg/m2
// - Peso normal: 18,5 a 24,9 kg/m2
// - Acima do peso: 25 a 29,9 kg/m2
// - Obesidade Grau 1: 30 a 34,9 kg/m2
// - Obesidade Grau 2: 35 a 40 kg/m2
// - Obesidade Grau 3: maior que 40 kg/m2

(function(){
    function calcularImc (peso, altura) {
        var total = peso/(altura * altura);

        if (total <= 16.9) {
            console.log("Muito abaixo do peso " + total);
        }
        else if (total >= 17 && total < 18.4) {
            console.log("Abaixo do peso " + total);
        }
        else if (total >= 18.5 && total < 24.9) {
            console.log("Peso normal " + total);
        }
        else if (total >= 25 && total < 29.9) {
            console.log("Acima do peso " + total);
        }
        else if (total >= 30 && total < 34.9) {
            console.log("Obesidade Grau 1 " + total);
        }
        else if (total >= 35 && total < 40) {
            console.log("Obesidade Grau 2 " + total);
        }
        else if (total > 40) {
            console.log("Obesidade Grau 3 " + total);
        }        
    }
    calcularImc(80, 1.80);
})();