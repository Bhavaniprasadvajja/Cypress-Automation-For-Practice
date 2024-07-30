class orangeHrms{

    getHrmsBookDemo(){

       return cy.get('.web-menu-btn > .nav > :nth-child(1) > a > .btn')
    }
    getHrmsFirstName(){

      return  cy.get('#Form_getForm_FullName')
    }
    getHrmsEmail(){

       return cy.get('#Form_getForm_Email')
    }
    getHrmsCompanyName(){
        
       return cy.get('[name="CompanyName"]')
    }
    getHrmsCountry(){

       return cy.get('#Form_getForm_Country')
    }
    getHrmsPhoneNumber(){

       return cy.get('#Form_getForm_Contact')
    }
    getHrmsRobot(){

       return cy.get('#recaptcha-anchor-label')
    }
    getHrmsSubmitForm(){

       return cy.get('.Form_getForm_action_submitForm')
    }

    getHrmsSolutions(){

      return cy.contains('Solutions')
    }
    getHrmsPeople(){

     return cy.contains('People Management')
    }
    getHrmsHr(){

     return cy.contains('HR Administration')
    }
    getHrmsOrange(){

      return cy.get('.footer-main>ul>li>a').eq(0)
    }
    getHrmsTalant(){

     return cy.contains('Our Product is Separated into Four Areas of HR')
    }
    getHrmsLogo(){

      return cy.get('.navbar-brand > img')
    }

}
export default orangeHrms