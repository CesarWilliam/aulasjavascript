// Problema 5 - DOM
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
        var n1, 
            n2, 
            n3,
            n4, 
            media;

        var tds = linhaAluno.querySelectorAll('td');

        n1 = pegaNota(tds[1]);
        n2 = pegaNota(tds[2]);
        n3 = pegaNota(tds[3]);
        n4 = pegaNota(tds[4]);        

        media = calcularMedia(n1, n2, n3, n4);

        linhaAluno.querySelector(".aluno-m").textContent = media;

        x++;
    }

    function pegaNota (td) {
        return parseFloat(td.textContent);
    }

})();

