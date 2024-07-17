class patientObject{

    getUser()    { 
        return cy.get('[name="username"]').eq(1)

    }

    getPwd()    {
        return cy.get('[name="password"]').eq(1)


    }
    getSubmit(){

        return cy.get('[data-dismiss="login"]').eq(1)
    }
    getPayment(){

        return cy.contains('PAYMENTS')
    }
    getImagination(){

        return cy.get('.toggle-user-img')
    }
    getLogoutApplication(){

       return cy.get('[data-target="#logoutPopUpId"] > a')
    }
    getYesButton(){
        return cy.contains('Yes')
    }

}
  
export default patientObject;