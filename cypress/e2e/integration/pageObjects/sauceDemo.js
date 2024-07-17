class sauceDemo {

    getSauceUserName(){

        return cy.get('[data-test="username"]',{ timeout: Cypress.config('pageLoadTimeout') })
    }
    getSaucePassWord(){

        return cy.get('[name="password"]',{ timeout: Cypress.config('pageLoadTimeout') })
    }
    getSauceLoginButton(){
       return cy.get('[name="login-button"]',{ timeout: Cypress.config('pageLoadTimeout') })

    }
    getSouceDot(){
      return  cy.get('#react-burger-menu-btn',{ timeout: Cypress.config('pageLoadTimeout') })
    }
    getSauceLogout(){
       return cy.contains('Logout',{ timeout: Cypress.config('pageLoadTimeout') })
    }


}
export default sauceDemo