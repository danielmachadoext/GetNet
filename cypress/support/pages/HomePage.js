class HomePage {
    visit() {
        cy.visit('https://site.getnet.com.br/');
    }

    verifyUrl() {
        cy.url().should('eq', 'https://site.getnet.com.br/');
    }

    clickMenuBurguer() {
        cy.get('[data-testid=gnt-overlay]').click();
    }

    clickAjudaMenu() {
        cy.get('[data-testid=menu-Ajuda]').click();
    }
}
export default HomePage;
