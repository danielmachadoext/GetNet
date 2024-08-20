class CentralDeAjudaPage {
    verifyUrl() {
        cy.url().should('include', '/central-de-ajuda');
    }

    clickCentralDeAjuda() {
        cy.contains('Central de Ajuda').click();
    }

    searchKeyword(keyword) {
        cy.get('[data-testid=search-input]').type(keyword);
        cy.get('[data-testid=search-input]').type('{enter}');
    }

    verifySearchResults() {
        cy.get('[data-testid=search-results]').should('be.visible');
    }

    selectBoletoOption() {
        cy.contains('Eu concluí a negociação, de que forma receberei meu boleto?').click();
    }

    verifyModalContent() {
        cy.get('.modal-body').should('contain.text', 'texto explicaGvo a dúvida selecionada');
    }
}
export default CentralDeAjudaPage;
