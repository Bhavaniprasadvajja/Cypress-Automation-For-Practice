// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('selectProduct', (produceName) => { 

    cy.get('h4.card-title').each(($e1, index, $list)=>{
        if($e1.text().includes(produceName))
            {
                cy.get('button.btn.btn-info').eq(index).click();
    
        }   
    
    })


   
 })
  Cypress.Commands.add('clickBoldLink', (text) => {
        cy.contains('b', text).click();
      });

 Cypress.Commands.add('login', (User, password) => { 

    cy.get('[name="username"]').eq(1).type(User)
    cy.get('[name="password"]').eq(1).type(password)
    cy.get('[data-dismiss="login"]').eq(1).click()


  })
    



//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types="cypress"/>