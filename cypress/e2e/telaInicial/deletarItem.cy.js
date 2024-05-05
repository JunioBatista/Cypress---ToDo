import telaInicial from "../../support/pageObjects/telaInicial.page"

describe('deletar itens da lista', () => {

  beforeEach(()=> {
    cy.visit('/')

    let listaDeToDos = ['fazer almoço', 'limpar a casa', 'comprar pão']

    listaDeToDos.forEach(element => {
      telaInicial.inputText(element)
    });
    telaInicial.concluirItem()

  }) 


  it('deleção de um item  da lista', () => {
    telaInicial.deletarItem("All")
  });

})