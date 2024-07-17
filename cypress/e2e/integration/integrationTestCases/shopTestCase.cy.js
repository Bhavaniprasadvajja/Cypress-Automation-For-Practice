/// <reference types="cypress"/>



import ShopPage from "../pageObjects/shopPage.cy";

describe('Test suite', function(){

    beforeEach('Test', function(){
    
    cy.fixture('firstTestData').then(function(data)
    {
    this.data= data;
    
    })
    } )
    
    
    
    it('test cases', function(){

        const shopPage =new ShopPage()
    
        cy.visit(Cypress.env('URL'))
         
        shopPage.getShopLink().click();

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        
        })
        shopPage.getCart().click();
        shopPage.getCheckOut().click()
        shopPage.getCountry().type(this.data.Country)
        shopPage.getDataSelection().click()
        shopPage.getCheckBox().click({force: true})
        shopPage.getPurchage().click()
        //shopPage.getSuccess().should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-)')
        cy.get('.alert').then(function(element){

            const actualText=element.text()
            expect(actualText.includes('Success')).to.be.true


        })

    
    })

    

})