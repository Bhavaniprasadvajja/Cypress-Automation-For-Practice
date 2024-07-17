//const testValue = require('../../fixtures/patientPortal.json');
import patientObject from "../pageObjects/patientObject"
import supportPatientPortal from "../pageObjects/supportPatientPortal"

describe('TestPatient',function(){

    before('Login',function(){

        cy.visit(Cypress.env('URL4'))
        cy.login('muni','Napier@12345')


    })
    

    beforeEach('fixture',function(){

        cy.fixture('patientPortal').then(function(data){
            this.Data = data;


        })
    })

    it('Patient Support', function(){

        const PatientPortal = new patientObject;
        const Support = new supportPatientPortal;

        // cy.visit(Cypress.env('URL4'))
        // PatientPortal.getUser().type(this.Data.userName)
        // PatientPortal.getPwd().type(this.Data.PassWard)
        // PatientPortal.getSubmit().click()
       this.Data.forEach(function(User) {
        
       

        cy.clickBoldLink('SUPPORT')
        //Support.getPatientSupport().click()
        Support.getPatientSubject().type(User.subject)
        Support.getPatientComments().type(User.Comment)
        Support.getPatientSubmit().click()
        Support.getImgClick().click()

        cy.on('window:alert', function(a){
            expect(a).equal('Saved Successfully')

        })



    })

})
});