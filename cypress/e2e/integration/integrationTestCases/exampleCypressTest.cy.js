
import exampleCypress from "../pageObjects/exampleCypress.cy"

describe('Cypress test',()=>{

it('Cypress Example',()=>{

const ExampleCypress = new exampleCypress

cy.visit(Cypress.env('URL1'))

ExampleCypress.getTraversal().click({force: true});
ExampleCypress.getTraversal().should('have.text', 'Traversal')
ExampleCypress.getTextExample().should('include.text', 'Examples of traversing DOM elements in Cypress, for a full reference of commands, go to docs.cypress.io')
ExampleCypress.getChildren().should('contains', '.children()')

})


})