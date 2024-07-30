describe('Table',function(){

    beforeEach('Login',function(){

        cy.visit("https://demo.opencart.com/admin/index.php?route=common/login",{ failOnStatusCode: false })
        cy.get('[name="username"]').type('demo')
        cy.get('#input-password').type('demo')
        cy.get('[type="submit"]').click()
        cy.get('#menu-customer>a').click()
        cy.get('#menu-customer>ul>li:first-child').click();

    })

it('check number of rows and columns',function(){

    cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length','10')
    cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length','6')

    //table[class="table table-bordered table-hover"]>tbody>tr:nth-child(5)>td:nth-child(3)
})

})