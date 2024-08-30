describe('',function(){

    it('',function(){

        cy.visit('https://demoblaze.com/index.html')
        cy.get('#login2').click();
        cy.get('#loginusername').type('test').realPress('Tab');
        cy.wait(1000)
        cy.get('#loginpassword').type('test');
        cy.get('[onclick="logIn()"]').click();

        cy.contains('Phones').click();
        cy.get('.card-title').each('', function($e1,index){
            if($e1.text().includes('Samsung galaxy s7')){
                cy.get('.card-title').eq(index).click()
            }
            

        })
        cy.contains('Add to cart').click();
        cy.wait(3000)
        cy.go('back');
        cy.go('back');

        ///////////////////////////////////

        cy.contains('Laptops').click();
        cy.get('.card-title').each('',function($e1,index){
            if($e1.text().includes('Sony vaio i5')){
                cy.get('.card-title').eq(0).click();

            }


        })
        cy.contains('Add to cart').click();
        cy.wait(3000)
        cy.go('back');
        cy.go('back');
        cy.wait(3000)
        cy.contains('Laptops').click();
        cy.wait(3000)

        cy.get('.card-title').each('',function($e1,index){
            if($e1.text().includes('MacBook air')){
                cy.get('.card-title').eq(index).click();     


            }


        })
        cy.contains('Add to cart').click();
        cy.go('back');
        cy.go('back');

    })

    // it('', function(){

       



    // })
})