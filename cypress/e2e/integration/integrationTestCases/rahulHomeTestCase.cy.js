/// <reference types="cypress"/>

import rahulHomePage from "../pageObjects/rahulHomePage.cy";



describe('Test suite', function(){

    beforeEach('Test', function(){
    
    cy.fixture('firstTestData').then(function(data)
    {
    this.data= data;
    
    })
    } )
    
   
    for (let i=1; i<=5; i++){
    it('Rahul Home Page', function(){

        const RahulPage = new rahulHomePage;

        cy.visit(Cypress.env('URL'))

        RahulPage.rahulNameField().type(this.data.first)
        RahulPage.rahulEmailField().type(this.data.Emailid)
        RahulPage.rahulPassword().type(this.data.PWD)
        RahulPage.rahulGenderSelection().select(this.data.id)



    })
}

    

})