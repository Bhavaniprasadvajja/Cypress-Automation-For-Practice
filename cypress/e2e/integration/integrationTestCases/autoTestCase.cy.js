import autoTest from "../pageObjects/autoTest"


describe('Autotest',()=>{

    beforeEach('testdata', function(){
        cy.fixture('example1').then(function(data)
        {
            this.Data = data;

        })

    })


    it('AutoTestcase',function(){
        

        const AutoTest = new autoTest;

        cy.visit(Cypress.env('URL'))
        AutoTest.firstTest().type(this.Data.firstName);
        AutoTest.secondTest().type(this.Data.EmailForRaj)
  


    })

    

})