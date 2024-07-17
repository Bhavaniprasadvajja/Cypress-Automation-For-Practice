class demoCommarce {

    getLogin(){

       return cy.contains('Log in')
    }
    getDemoEmail(){

      return  cy.get('[name="Email"]')
    }
    getDemoPwd(){

       return cy.get('#Password')
    }
    getDemoSubmit(){
      return  cy.get('.button-1.login-button')
    }
    getDemoMenu(){
        return cy.get('.menu-toggle')
    }
    getDemoComputer(){
       return cy.get('.mobile > :nth-child(1) > [href="/computers"]')
    }


}
export default demoCommarce