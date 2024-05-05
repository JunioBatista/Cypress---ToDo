import telaInicial from "../../support/pageObjects/telaInicial.page"

describe('filtrar itens', () => {

  beforeEach(()=> {
    cy.visit('/')

    let listaDeToDos = ['fazer almoço', 'limpar a casa', 'comprar pão']

    listaDeToDos.forEach(element => {
      telaInicial.inputText(element)
    });
    telaInicial.concluirItem()

  }) 


  it('filtrar todos itens ', () => {
    telaInicial.filtrarItem("All")
  });

  it.skip('filtrar itens Ativos', () => {
    telaInicial.filtrarItem("Active")
  });

  it.skip('filtrar itens concluidos', () => {
    telaInicial.filtrarItem("Completed")
  });

})