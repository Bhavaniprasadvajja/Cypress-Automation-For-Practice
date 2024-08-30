describe('home page',function(){

    beforeEach(function(){

        cy.visit(Cypress.env('URL'))

        // cy.on('window:alert', (str) => {
        //     if (str.includes('Change your password')) {
        //       // Accept the alert to dismiss it
        //       return true;
        //     }
        //   });


    })

    it('retrive the data from home page',function(){

        cy.get('[name="name"]').eq(0).type('manoj')
        cy.get('[name="email"]').type('manoj@gmail.com')
        cy.get('#exampleInputPassword1').type('manoj@123')
        cy.get('#exampleCheck1').check();
        cy.get('#exampleFormControlSelect1').select('Male')
        cy.get('.form-check-label').each(function($label){

            if($label.text()=='Employed'){

                cy.get('#inlineRadio2').click()
            }
            

        })
        cy.get('[name="bday"]').type('2024-08-02')
        cy.get('[name="name"]').eq(1).should('have.value','manoj')
        cy.get('[type="submit"]').click();
        cy.get('.alert.alert-success.alert-dismissible').should('be.visible')
        cy.get('.alert.alert-success.alert-dismissible').should('contain', 'Success!')

        /////////////////////////////

        cy.contains('Shop').click()
        cy.get('h4.card-title').each(($e1, index, $list)=>{
            if($e1.text().includes('iphone X'))
                {
                    cy.get('button.btn.btn-info').eq(index).click();
        
            }   
        
        })

        cy.get('h4.card-title').each(function($e1, index, $list){

            if($e1.text().includes('Samsung Note 8')){

                cy.get('.btn.btn-info').eq(index).click()

                
            }

        })
        cy.get('h4.card-title').each(function($e1, index, $list){

            if($e1.text().includes('Nokia Edge')){

                cy.get('.btn.btn-info').eq(index).click()
            }
        })
        cy.get('.nav-item.active>a').click();




    })
})