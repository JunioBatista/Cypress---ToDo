import telaInicial from "../../support/pageObjects/telaInicial.page"

describe('concluir itens', () => {

  beforeEach(()=> {
    cy.visit('/')

    let listaDeToDos = ['fazer almoço', 'limpar a casa', 'comprar pão']

    listaDeToDos.forEach(element => {
      telaInicial.inputText(element)
    });
    
  }) 

  it('concluir itens da lista de to do', () => {
    telaInicial.concluirItem()
  });

})