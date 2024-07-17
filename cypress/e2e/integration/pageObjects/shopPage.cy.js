class ShopPage{

    getShopLink(){

        return cy.contains('Shop')
    }
    getCart(){

        return cy.get(".nav-link.btn.btn-primary")
    }
    getCheckOut(){
        return cy.contains('Checkout')
    }
    getCountry(){
        return cy.get('#country')
    }
    getDataSelection(){

        return cy.get('.suggestions > ul > li > a')

    }
    getCheckBox(){

       return cy.get('#checkbox2')
    }
    getPurchage(){

        return cy.get('.ng-untouched > .btn')
    }
    getSuccess(){
        cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-)')
    }
    

}

export default ShopPage;