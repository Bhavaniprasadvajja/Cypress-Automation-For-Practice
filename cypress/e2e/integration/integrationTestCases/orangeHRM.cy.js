import { pageForOhrm } from "../pageObjects/pageForOhrm";
const HRMS = require("../../../fixtures/pageOhrms.json")
const pageContant =new pageForOhrm;
describe('',function(){

    beforeEach('',function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    it('',function(){

       var n=HRMS.length
        

        //HRMS.forEach(function(userData){
            for(var i=0; i<n; i++){

           
            pageContant.hrmUserName().type(HRMS[i].uName)
            pageContant.hrmPassWard().type(HRMS[i].PWD)
            pageContant.hrmSubmit().click()
            cy.wait(3000)

            cy.url().then(function(url){
                if(url.includes('/dashboard')){
                    cy.contains('Dashboard').should('have.text','Dashboard')
                    cy.wait(1000)
                    cy.get('.oxd-userdropdown-tab').click()
                    cy.wait(1000)
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                }else{
                    cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('be.visible').and('have.text','Invalid credentials')
                }
            })

            }

      
    })
})