import HomePage from 'cypress/support/pageObjects/HomePage';
import CentralDeAjudaPage from 'cypress/support/pageObjects/CentralDeAjudaPage';

describe('Teste Automatizado Cypress', () => {
    const homePage = new HomePage();
    const centralDeAjudaPage = new CentralDeAjudaPage();

    it('Acessar o site e verificar a Central de Ajuda', () => {
        // Acessar o site
        homePage.visit();

        // Verificar se o site foi acessado corretamente
        homePage.verifyUrl();

        // Clicar no menu Burguer
        homePage.clickMenuBurguer();

        // Clicar no menu "Ajuda"
        homePage.clickAjudaMenu();

        // Verificar se a página da Central de Ajuda foi carregada
        centralDeAjudaPage.verifyUrl();

        // Clicar em "Central de Ajuda"
        centralDeAjudaPage.clickCentralDeAjuda();

        // Verificar se a página da Central de Ajuda foi carregada
        centralDeAjudaPage.verifyUrl();

        // Digitar a palavra-chave "Boleto" no campo de busca
        centralDeAjudaPage.searchKeyword('Boleto');

        // Verificar se os resultados da busca foram carregados corretamente
        centralDeAjudaPage.verifySearchResults();

        // Selecionar a opção "Eu concluí a negociação, de que forma receberei meu boleto?"
        centralDeAjudaPage.selectBoletoOption();

        // Verificar se a modal foi aberta corretamente com a mensagem esperada
        centralDeAjudaPage.verifyModalContent();
    });
});









/*describe('Teste Automatizado Cypress', () => {
    it('Acessar o site e verificar a Central de Ajuda', () => {
      // Acessar o site
      cy.visit('https://site.getnet.com.br/');
      
      // Verificar se o site foi acessado corretamente
      cy.url().should('eq', 'https://site.getnet.com.br/');
  
      // Clicar no menu Burguer
      cy.get('[data-testid=gnt-overlay]').click();  

      // Clicar no menu "Ajuda"
      //cy.get('gnt-nav-menu-depth2').trigger('mouseover'); 
      cy.get('[data-testid=menu-Ajuda]').click();
  
      // Verificar se a página da Central de Ajuda foi carregada
      cy.url().should('include', '/central-de-ajuda');
  
      // Clicar em "Central de Ajuda"
      cy.contains('Central de Ajuda').click();
  
      // Verificar se a página da Central de Ajuda foi carregada
      cy.url().should('include', '/central-de-ajuda');
  
      // Digitar a palavra-chave "Boleto" no campo de busca
      cy.get('[data-testid=search-input]').type('Boleto');
  
      // Pressionar Enter para realizar a busca
      cy.get('[data-testid=search-input]').type('{enter}');
  
      // Verificar se os resultados da busca foram carregados corretamente
      cy.get('[data-testid=search-results]').should('be.visible');
  
      // Selecionar a opção "Eu concluí a negociação, de que forma receberei meu boleto?"
      cy.contains('Eu concluí a negociação, de que forma receberei meu boleto?').click();
  
      // Verificar se a modal foi aberta corretamente com a mensagem esperada
      cy.get('.modal-body').should('contain.text', 'texto explicaGvo a dúvida selecionada');
    });
  });
  */