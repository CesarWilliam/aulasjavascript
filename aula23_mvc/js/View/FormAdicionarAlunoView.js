class FormAdicionarAlunoView extends View {
    constructor(seletor) {
        super(seletor);
        this.$seletor.innerHTML = this.getTemplate();
    }

    getTemplate() {
        return `
        <form class="form-inline" style="margin-bottom: 50px">

            <div class="form-group">
                <input type="text" id="nome" class="form-control" placeholder="nome" required>
            </div>

            <div class="form-group">
                <input type="number" class="form-control" placeholder="nota1" id="nota1" required min="0" max="10">
            </div> 

            <div class="form-group">
                <input type="number" class="form-control" placeholder="nota2" id="nota2" required min="0" max="10">
            </div> 

            <div class="form-group">
                <input type="number" class="form-control" placeholder="nota3" id="nota3" required min="0" max="10">
            </div> 

            <div class="form-group">
                <input type="number" class="form-control" placeholder="nota4" id="nota4" required min="0" max="10">
            </div>           

            <button type="submit" class="btn btn-default">Adicionar</button>
        </form>
        `
    }
}