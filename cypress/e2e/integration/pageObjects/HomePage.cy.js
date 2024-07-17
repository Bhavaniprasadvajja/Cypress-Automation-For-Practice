class HomePage{

    getEditBox(){

        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayData(){

        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getGender(){

        return cy.get("#exampleFormControlSelect1")
    }
    
    getShopTab(){

        return cy.get('.navbar-nav>li:nth-child(2)')
    }

    getCategory(){

        return cy.contains("Category 2")
    }

   getCheckOut(){
     return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')


   }


}
export default HomePage;