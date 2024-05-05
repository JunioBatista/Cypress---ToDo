import { ELEMENTS } from '../elements/telaInicial.elements.js'
import { FILTERS } from '../elements/telaInicial.elements.js'

class telaInicial{ 


    inputText(toDoItem){
        cy.get(ELEMENTS.inputTextToDo).type(toDoItem).type('{enter}')
    }

    concluirItem() {
        cy.get(ELEMENTS.buttonMarkTaskAsDone)
        .last()
        .click()
    }

    filtrarItem(filter) {
        cy.get(FILTERS.all)
        .contains(filter)
        .and('be.visible')
        .click()
    }

    deletarItem() {
        cy.get(ELEMENTS.listaItens)
        .first()
        .find('button')
        .invoke('show')
        .click()
    }
}

export default new telaInicial