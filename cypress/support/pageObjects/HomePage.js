class HomePage {
    visit() {
        cy.visit('https://getnet.com.br/');
    }

    verifyUrl() {
        cy.url().should('eq', 'https://getnet.com.br/');
    }

    clickMenuBurguer() {
        cy.get('[data-testid=gnt-overlay]').click();
    }

    clickAjudaMenu() {
        cy.get('[data-testid=menu-Ajuda]').click();
    }
}
export default HomePage;
