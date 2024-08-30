describe('Orange data testing',function(){

    before('before test start',function(){
        cy.visit(Cypress.env('URL3'))

    })


    it('data leave',function(){
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click();


    })
})