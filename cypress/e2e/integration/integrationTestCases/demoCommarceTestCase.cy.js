///<reference types="cypress"/>

import demoCommarce from "../pageObjects/demoCommarce"
describe('Test suite',function(){



    it('Demo testing',function(){
        const DemoCommarce = new demoCommarce;


       cy.visit(Cypress.env('URL6'))
       DemoCommarce.getLogin().click();
       DemoCommarce.getDemoEmail().type('raj@gmail.com');
       DemoCommarce.getDemoPwd().type('raj@123');
       DemoCommarce.getDemoSubmit().click();
       cy.wait(5000)
       cy.get('body').then($body => {
        if ($body.find('button[aria-label="Change your password"]').length > 0) {
          cy.get('button[aria-label="Change your password"]').click(); // Click the OK button
        }
      });

      DemoCommarce.getDemoMenu().click();
      DemoCommarce.getDemoComputer().click();




    })
})