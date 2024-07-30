describe('Napier', function() {
    it('Napier script with conditional popup handling', function() {
      // Visit the Napier healthcare login page
      cy.visit('https://his-24-1-gar-sit.napierhealthcare.com/napier-his-web/index.html?env=Tenant2');
  
      // Enter username
      cy.get('#username').eq(0).type('Niru');
  
      // Enter password and press Tab to move to the next focusable element
      cy.get('#password').eq(0).type('User@1');
  
      // Use realPress to simulate pressing the Tab key
      cy.get('#password').eq(0).realPress('Tab');
  
      // Wait for the login button to become enabled (if applicable)
      cy.get('#login_submit_frm').eq(0).should('be.enabled');
  
      // Click the login button
      cy.get('#login_submit_frm').eq(0).click();
  
      // Handle optional confirmation popup
      cy.get('.his-container.info-alert-border.ng-scope').if().should('be.visible').then(() => {
        cy.contains('Yes').click();
      });
  
      // Add an assertion to ensure the login was successful, e.g., by checking URL or presence of an element on the next page
      cy.url().should('include', '/dashboard'); // Update this with the actual URL or condition
    });
  });