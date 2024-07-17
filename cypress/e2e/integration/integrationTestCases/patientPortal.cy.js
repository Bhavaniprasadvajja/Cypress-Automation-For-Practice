// ///<reference types="cypress"/>
// import patientObject from "../pageObjects/patientObject";



// describe('patient portal',()=>{

//     beforeEach('Test', function(){
    
//         cy.fixture('patientPortal').then(function(data)
//         {
//         this.data= data;
        
//         })
//         } )

        

// it('patient Portal Testing',function(){

//     const PatientPortal = new patientObject;



//     cy.visit(Cypress.env('URL4'));

//     PatientPortal.getUser().click();
//     PatientPortal.getUser().type(this.data.userName);
//     PatientPortal.getPwd().type(this.data.PassWard);
//     PatientPortal.getSubmit().click();
//     PatientPortal.getImagination().click();
//     PatientPortal.getLogoutApplication().click();
//     PatientPortal.getYesButton().click();





// })

// })


////////////////////////////////////////////////////////////////

///<reference types="cypress"/>
import patientObject from "../pageObjects/patientObject";


describe('Patient Portal', () => {
    beforeEach('Load Fixture Data', function() {
        cy.fixture('patientPortal').then(function(data) {
            this.data = data;
        });
    });

    it('Patient Portal Testing with Multiple Users', function() {
        const PatientPortal = new patientObject();

        cy.visit(Cypress.env('URL4'));

        // Iterate over each user in the fixture
        this.data.forEach((user) => {
    PatientPortal.getUser().click();
    PatientPortal.getUser().type(user.userName);
    PatientPortal.getPwd().type(user.PassWard);
    PatientPortal.getSubmit().click();
    PatientPortal.getPayment().click();
    cy.wait(2000)
    PatientPortal.getImagination().click();
    PatientPortal.getLogoutApplication().click();
    PatientPortal.getYesButton().click();
        });
    });
});