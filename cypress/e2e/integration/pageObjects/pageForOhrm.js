export class pageForOhrm {

    hrmName ='[name="username"]'
    hrmPwd ='[name="password"]'
    hrmLogin='[type="submit"]'

    hrmUserName(){

        return cy.get(this.hrmName)
    }
    hrmPassWard(){

       return cy.get(this.hrmPwd)
    }
    hrmSubmit(){

    return cy.get(this.hrmLogin)
    }
}