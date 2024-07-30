describe('data testing',function(){


    it('Table data testing ',function(){

        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get('#productTable').scrollIntoView({timeout:2000})
        cy.wait(1000)

        cy.get('#productTable thead tr th').should('have.length','4')
        cy.get('#productTable tbody tr td').should('have.length','20')
        cy.get("#productTable tbody tr:nth-child(3) td:nth-child(2)").should('have.text','Product 3')
    })

    it('Verify the all rows values ',function(){

        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get('#productTable').scrollIntoView({timeout:2000})
        cy.wait(1000)

        cy.get('#productTable tbody tr').each(($row, index, $rows)=>{

            cy.wrap($row).within(()=>{

                cy.get('td').each(($cel, index,$cels)=>{

                    cy.log($cel.text())
                })


            })


        })
        
    })

    it.only('Page Nation ',function(){

        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get('#productTable').scrollIntoView({timeout:2000})
        cy.wait(1000)

        cy.get('#pagination li a').then(($ele)=>{
            let pageNumbers = $ele.length
            cy.log(pageNumbers)


        })

        let pageNumber =4;
        for(let p=1; p<=pageNumber; p++){

            if(pageNumber>0){
                cy.log("active pagemner", p)
                cy.get('#pagination li:nth-child('+p+') a').click();
                cy.wait(2000)

                cy.get('#productTable tbody tr').each(($row, index, $rows)=>{

                    cy.wrap($row).within(()=>{
        
                        cy.get('td').each(($cel, index,$cels)=>{
        
                            cy.log($cel.text())
                            
                        })
        
        
                    })
        
        
                })


            }


        }
    })
})

////////////////////////////////////////////

