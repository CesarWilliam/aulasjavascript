var meuapp = meuapp || {}

meuapp.eventos = {
    adicionarTratador: function(valor1, valor2) {
        var total;
        total = valor1 + valor2;
        // console.log(total);
    },

    removerTratador: function(valor1, valor2) {
        var total;
        total = valor1 - valor2;
        // console.log(total);
    },

    multiplicarEvento: function(valor1, valor2) {
        var total;
        total = valor1 * valor2;
        // console.log(total);
    }
}

meuapp.eventos.adicionarTratador(4, 2);
meuapp.eventos.removerTratador(4, 2);
meuapp.eventos.multiplicarEvento(4, 2);

var Pessoa = (function (nome, idade, cor) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    // console.log('Criado usuário ' + nome);
});

var pessoa1 = new Pessoa('will', '21', 'blue');
var pessoa2 = new Pessoa('gabi', '19', 'pink');

// console.log(pessoa1,pessoa2);

var testeVar = function (genero) {
    this.genero = genero;
    alert('Pessoa instanciada ' + genero);
}
  
testeVar.prototype.dizerOla = function() {
    alert ('hello');
};
  
// var testevar1 = new testeVar('Masculino');
// var testevar2 = new testeVar('Feminino');

// testevar1.dizerOla(); // hello