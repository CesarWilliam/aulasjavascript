// Problema 5_2 - DOM - versão melhorada
//
// Lembra do loop e da função calcularMedia que criamos? Vamos criar um loop que percorra as linhas
// de uma tabela de alunos, encontre as quatro notas (n1, n2, n3 e n4) e mostre na última coluna
// dessa tabela a média correspondente de cada aluno.

function calcularMedia () {
    var total = 0;
    var qtd = arguments.length;
    var x = 0;

    while(typeof arguments[x] === 'number') {
        total += arguments[x];
        x++;
    }
    return total/ qtd;
}

(function(){
    var trs = document.querySelectorAll(".aluno");

    var x = 0;
    while(trs[x]) {
        var linhaAluno = trs[x];        
        var tds = linhaAluno.querySelectorAll('td');
        var notas = recuperarNumerosDeColunas(tds);
        var media = calcularMedia.apply(this, notas);
        linhaAluno.querySelector(".aluno-m").textContent = media;
        x++;
    }

    function recuperarNumerosDeColunas (tds) {
        var x = 0;
        var arr = [];
        while(tds[x]) {
            if ( !isNaN( tds[x].textContent ) && tds[x].textContent !== '') {
                arr.push( parseFloat(tds[x].textContent));
            }
            x++;
        }
        return arr;
    }

})();