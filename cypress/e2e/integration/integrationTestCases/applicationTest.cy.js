const fixtureData = require('../../../fixtures/example1.json')
const dataRetirve = require('../../../fixtures/firstTestData.json')

describe('Test run', function(){

    // beforeEach('testdata', function(){
    //     cy.fixture('example1').then(function(data)
    //     {
    //         this.Data = data;

    //     })

    // })


it("script Run", function(){

    cy.visit(Cypress.env('URL'))

    cy.get('[name="name"]:nth-child(2)').type(fixtureData.firstName)
    cy.get('[name="email"]').type(fixtureData.EmailForRaj)
    cy.get('[type="password"]').type(fixtureData.PassWordForRaj)
    cy.get('#exampleFormControlSelect1').select(fixtureData.genderIdentification)
    cy.get('[name="name"]:nth-child(1)').should('have.value', fixtureData.firstName)

    cy.get(':nth-child(2) > .nav-link').click()
    fixtureData.ProductNameFile.forEach(function(element){
        cy.selectProduct(element)
    })
    cy.contains('Checkout').click();
    cy.contains('Checkout').click();
    cy.get('#country').type(fixtureData.CountryName)
    cy.get('.suggestions>ul>li>a').click();
    cy.get("#checkbox2").click({force: true});
    cy.get('[value="Purchase"]').click()
    // cy.get('.alert').should('have.include', 'Success! Thank you! Your order will be delivered in next few weeks :-)')
    cy.get('.alert').then(function(element){

        const actualText=element.text()
        expect(actualText.includes('Success')).to.be.true


    })

})

})