import sauceDemo from "../pageObjects/sauceDemo";
///<reference types="cypress"/>
describe('Data Testing',function(){

    beforeEach('Fixture data',function(){

        cy.fixture('sauceDemoData').then(function(data){

            this.Data = data;
})


    })

    it('SauceDemo Testing',function(){

        const Demo = new sauceDemo;

        cy.visit(Cypress.env('URL5'),{ timeout: Cypress.config('pageLoadTimeout') });

        Demo.getSauceUserName().type(this.Data.SouceUser);
        Demo.getSaucePassWord().type(this.Data.SoucePWD);
        Demo.getSauceLoginButton().click();
        Demo.getSouceDot().click();
        Demo.getSauceLogout().click();

        


    })



})