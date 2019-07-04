class ListaAlunosView{
    constructor(seletor){
        this.$seletor = blg.$(seletor);
    }
    /*
    <td class="aluno-n1">10</td>
    <td class="aluno-n2">8.5</td>
    <td class="aluno-n3">9</td>
    <td class="aluno-n4">7.5</td>	
                    */
    
    getTemplate(model){
        return `
            ${model.lista.map( aluno => `
                <tr class="aluno" data-id="${aluno._id}">
                    <td class="aluno-nome">${aluno.nome}</td>
                    ${aluno._notas.map( (nota, i) => `
                        <td class="aluno-n${(i+1)}">${nota}</td>
                    ` ).join('')}
                    <td class="aluno-m">${aluno.recuperarMedia()}</td>
                </tr>
            `        
            ).join('')}
            
        `
    }
    
    atualiza(model){
        this.$seletor.innerHTML = this.getTemplate(model);
    }
}