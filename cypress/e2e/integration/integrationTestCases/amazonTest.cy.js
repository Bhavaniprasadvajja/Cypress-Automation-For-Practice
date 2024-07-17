
describe('Amazon Test',()=>{

it('Amazon Script running',()=>{

    cy.visit(Cypress.env('URL2'))
    cy.get('[data-csa-c-content-id="nav_cs_mobiles"]').click();
    //cy.contains('Mobiles').click();
    cy.contains('Mobile Accessories').click({force: true});

    cy.get('.sl-sobe-carousel-viewport-row').each(($e1, index, $list)=>{
            if($e1.text().includes('Headsets'))
                {
                    cy.get('.sl-sobe-carousel-sub-card-title').eq(index).click();
    
            }    
    
        })


        cy.get('[aria-labelledby="pTron"]').click();

        //cy.contains('pTron Bassbuds Duo in-Ear Bluetooth 5.1 Wireless Headphones, Stereo Audio, Touch Control TWS Earbuds with HD Mic, Type-C Fast Charging, IPX4 Water Resistant & Voice Assistance').invoke('removeAttr', 'target').click();

        
    

    


})

})