///<reference types="cypress"/>

describe('Test',()=>{

    it('Window alrets',()=>{

        cy.visit(Cypress.env('URL3'));

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get('[title="Assign Leave"]:nth-child(1)').click();
        cy.get('.oxd-autocomplete-wrapper').type('Ranga');
        cy.wait(3000)
        cy.get("[role='listbox']").click();
        cy.get('.oxd-select-text-input').click();
        cy.get("[role='listbox']").each(($e1, index, $list)=>{
            if($e1.text().includes('CAN - FMLA'))
                {
                    cy.get("[role='listbox']").eq(index).click();

            }
            cy.get('.oxd-input.oxd-input--active').eq(1).type('2024-03-07');

          
              
            cy.get('.oxd-button').click();
            cy.get('.orangehrm-modal-footer > .oxd-button--secondary').click()
            
            cy.get('.oxd-text--toast-message',{ timeout: 10000 }).should('be.visible')
            cy.get('.oxd-text--toast-message').should('contain.text', 'Successfully')


        })





    })



})