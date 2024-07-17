describe('test suite', function(){

it('test case first', ()=>{

    cy.visit('');

    cy.get('input[name="name"]:nth-child(2)').should('be.visible');    
    cy.get('input[name="name"]:nth-child(2)').type('firstname');
    cy.get('#exampleInputPassword1').should('be.visible')
    cy.get('#exampleInputPassword1').clear().type('cypress');
    cy.get('#exampleFormControlSelect1').select('Female');
    //cy.get('#exampleFormControlSelect1').contains('have.text', 'Female')
    cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
    cy.get('#inlineRadio1').should('be.visible');
    cy.get('#inlineRadio1').click()
    cy.get('#inlineRadio3').should('be.disabled')
    //cy.get('#inlineRadio3').click()
    cy.get('input[name="name"]:nth-child(1)').should('have.value', 'firstname')

    cy.get("input[name='bday']").click();


})


})