///<reference types="cypress"/>

describe('Alert',()=>{

    it('Alert Handle',()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.get('[onclick="jsAlert()"]').click;

        cy.on('window:alert', function(a){
            expect(a).equal('I am a JS Alert')

        })

        cy.get('[onclick="jsConfirm()"]').click();

        cy.on('window:confirm',function(q){
            
            expect(q).equal('I am a JS Confirm')
            return false;
        })
  



    })

    it('should handle JS prompt', () => {
        // Step 1: Visit the page with the JavaScript alerts
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    
        // Step 2: Stub the window.prompt method to return a specific value
        cy.window().then((win) => {
          // Using cy.stub to replace window.prompt with a function that returns 'Test input'
          cy.stub(win, 'prompt').returns('Test data input expect');
        });
    
        // Step 3: Click the button to trigger the JavaScript prompt
        // Using cy.contains to find the button by its text and clicking it
        cy.contains('Click for JS Prompt').click();
    
        // Step 4: Verify the result displayed on the page
        // The result element should contain the text 'You entered: Test input'
        cy.get('#result').should('have.text', 'You entered: Test data input expect');
      });
    
})