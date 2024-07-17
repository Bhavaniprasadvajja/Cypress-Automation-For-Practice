/// <reference types="cypress"/>
import HomePage from "../pageObjects/homePage.cy";

describe('Test suite', function(){

    beforeEach('Test', function(){
    
    cy.fixture('firstTestData').then(function(data)
    {
    this.data= data;
    
    })
    } )
    
    
    
    it('test cases', function(){

        const homePage =new HomePage()
    
        cy.visit("");
         
        homePage.getEditBox().type(this.data.first);
        homePage.getTwoWayData().should('have.value', this.data.first);
        homePage.getGender().select(this.data.id);
        homePage.getShopTab().click();

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        
        })

       homePage.getCheckOut().click();
        //homePage.getCategory().click();
        cy.wait(5000)
    
    })

    

})