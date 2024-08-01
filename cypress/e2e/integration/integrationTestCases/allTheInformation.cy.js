describe('test suite for all',function(){

    beforeEach(function(){
        cy.visit("https://testautomationpractice.blogspot.com/")
    })


it('Data retrive',function(){

    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.get("#name").type('tarak')
    cy.get("#email").type('ram@gmail.com')
    cy.get("#phone").type('9987478959')
    cy.get("#textarea").type("hyderabad,telangana")
})

it.only('Test gender and week selection',function(){

    cy.get("#male").click();
    cy.get(".form-check-label").each(($label) => {
        if ($label.text().includes('Sunday')) {
            cy.wrap($label).prev('input[type="checkbox"]').check();
        }
    });
    cy.get(".form-check-label").each(($label) => {
        if ($label.text().includes('Monday')) {
            cy.wrap($label).prev('input[type="checkbox"]').check();
        }
    });
    cy.get(".form-check-label").each(($label) => {
        if ($label.text().includes('Tuesday')) {
            cy.wrap($label).prev('input[type="checkbox"]').check();
        }
    });


})


})