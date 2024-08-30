describe('test suite for all',function(){

    beforeEach(function(){
        cy.visit("https://testautomationpractice.blogspot.com/")
    })


it('Data retrive',function(){

    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.get("#name").type('tarak')
    cy.get("#email").type('ram@gmail.com')
    cy.get("#phone").type('9987478959')
    cy.get("#textarea").type("hyderabad,telangana")
})

it('Test gender and week selection',function(){

    cy.get("#male").click();
    cy.get(".form-check-label").each(($el, index, $list) => {
        if ($el.text().includes('Sunday')) {
            cy.wrap($el).prev('input[type="checkbox"]').check();
        }
    });
    cy.get(".form-check-label").each(($label) => {
        if ($label.text().includes('Monday')) {
            cy.wrap($label).prev('input[type="checkbox"]').check();
        }
    });
    cy.get(".form-check-label").each(($label) => {
        if ($label.text().includes('Tuesday')) {
            cy.wrap($label).prev('input[type="checkbox"]').check();
        }
    });


})

it('dropdown values',function(){

    cy.get('#country').select('India')
    cy.get('#colors').select(['Red','Blue','Green'])
    cy.get('#datepicker').type('08/01/2024').type('{enter}')

})

it.only('tabs support', function(){
    cy.contains('open cart')
    .invoke('removeAttr', 'target')
          .click()
        
          
          cy.origin('https://demo.opencart.com', () => {
            // Hover over "Laptops & Notebooks" and click it
            cy.contains('Laptops & Notebooks').trigger('mouseover').click({force: true})

            // Click "Show All Laptops & Notebooks"
            cy.contains('Show All Laptops & Notebooks').click({force: true})

            cy.get('#product-list').each(($e1, index, $list) => {
                if ($e1.text().includes('HP LP3065')) 
                    {
                        cy.get(':nth-child(6) > [data-top="993.7874877927825"]',{ timeout: 10000 }).eq(index).click();
                  cy.wait(3000); // Use more precise waits or assertions if possible
                }
              });
        })

         //cy.visit('https://testautomationpractice.blogspot.com/');



})



})