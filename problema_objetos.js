// Problema Objetos
//
// Temos três objetos. Cada objeto tem duas propriedades: nome e sobrenome. 
// Precisamos mostrar no console o nome completo de cada um deles.

var pessoa1 = {
    nome: "Will",
    sobrenome: "Cesar"
};

var pessoa2 = {
    nome: "Lia",
    sobrenome: "Ap"
};

var pessoa3 = {
    nome: "Lucas",
    sobrenome: "Henrique"
};

console.log(pessoa1.nome + ' ' + pessoa1.sobrenome);

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

var pessoaTeste = new Pessoa("William", "Cesar");