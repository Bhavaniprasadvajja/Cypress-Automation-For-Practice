class rahulHomePage{

    rahulNameField(){

        return cy.get('input[name="name"]:nth-child(2)')
    }
    rahulEmailField(){

        return cy.get('input[name="email"]')
    }
    rahulPassword(){
        return cy.get('#exampleInputPassword1')
    }
    rahulGenderSelection(){
        return cy.get('#exampleFormControlSelect1')
    }


}
export default rahulHomePage