///<reference types="cypress"/>

describe('Desktop Products Test Suite', function() {

    it('should add Canon EOS 5D to the cart', function() {

        cy.visit('https://demo.opencart.com/');
        cy.contains('Desktops').trigger('mouseover');
        cy.contains('Show All Desktops').click({ force: true });

        cy.get('[class="description"]').each(function($e1) {

            if ($e1.text().includes('Canon EOS 5D')) {

                cy.get('[type="submit"]').eq(0).click();
            }

        });
        cy.wait(3000)
        cy.get('#input-option-value-6').click();
        cy.get('#input-option-value-9').click();
        cy.get('#input-option-208').type('Data Input');
        cy.wait(1000);
        cy.get('#input-option-217').select('Blue(+$5.60)')
        cy.wait(2000);
        cy.get('#input-option-209').type('This area protected by data');
        cy.wait(1000)

        cy.get('#button-upload-222').selectFile('C://Users//user//Desktop//sql.txt')
    });

});