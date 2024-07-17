class supportPatientPortal {

    getPatientSupport(){

       return cy.contains('SUPPORT')
    }
    getPatientSubject(){
       return cy.get('#subject')
    }
    getPatientComments(){
       return cy.get('#comments')
    }
    getPatientSubmit(){

      return  cy.contains('Submit')
    }
    getImgClick(){

       return cy.get('.img-responsive.pat-logo')
    }


}
export default supportPatientPortal