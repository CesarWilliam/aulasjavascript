class ListaAlunos {
    constructor(_lista) {
        this.lista = [].concat(_lista);
    }

    obterPorId(_id) {
        return this.lista.filter( aluno => aluno._id === _id )[0];
    }
}