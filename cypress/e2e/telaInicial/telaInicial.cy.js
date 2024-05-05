import telaInicial from "../../support/pageObjects/telaInicial.page"

describe('teste', () => {

  beforeEach(()=> {
    cy.visit('/')
  }) 

  it('Adicionar um item na lista', () => {
    telaInicial.inputText('fazer café ')
  });

  it('Adicionar varios itens a lista', () => {

    let listaDeToDos = ['fazer almoço', 'limpar a casa', 'comprar pão']

    listaDeToDos.forEach(element => {
      telaInicial.inputText(element)
    });

  });

})