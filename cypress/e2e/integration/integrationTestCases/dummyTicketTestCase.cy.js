import dummyTicket from "../pageObjects/dummyTicket"
import Papa from 'papaparse';
describe('Demo ticket Applicaiton', function(){

    let csvData;

    beforeEach(function() {
      // Read and parse the CSV file before all tests
      cy.readFile('cypress/fixtures/dummyTickect.csv').then((data) => {
        Papa.parse(data, {
          header: true,
          complete: function(results) {
            csvData = results.data; // Store parsed data in a variable
          }
        });
      });
    });

    it('Data Retrive from CSV',function(){

        const DummyTicket = new dummyTicket;

         
            
            
                
         csvData.forEach((bhavani) => { 
        cy.visit(Cypress.env('URL7'))
        DummyTicket.getDummyFirstName().type(bhavani.firstData);
        DummyTicket.getDummyLastName().type(bhavani.lastData);
        DummyTicket.getDummyDate().click({force: true});
 

    const year = bhavani.Year;
    const month =bhavani.Month-1;
    const date = bhavani.Date;

    DummyTicket.getDummyYear().select(`${year}`)
    DummyTicket.getDummyMonth().select(`${month}`)
    DummyTicket.getDummyDateCalender().contains(date).click();
    DummyTicket.getDummyGender().click();
    DummyTicket.getDummyGender().click();
    DummyTicket.getDummycheckbox1().click();
    DummyTicket.getDummayAddMore().click();
    //DummyTicket.getDummaySearch().should('be.visible').type(bhavani.AddData).type('{enter}'); 
    DummyTicket.getDummaySearch().should('be.visible').then(($input) => {
      // Log the input field to make sure it's correctly selected
      //cy.log($input);
      cy.wrap($input).type(bhavani.AddData).type('{enter}');
  }); 
    DummyTicket.getDummyFromCity().type(bhavani.FromCity);
    DummyTicket.getDummyToCity().type(bhavani.ToCity);
    DummyTicket.getDummyDeparton().click()
   
cy.get('.ui-datepicker-year').select('2025')
cy.get('.ui-datepicker-month').select('Mar')
cy.get('[data-date="25"]').click()
cy.get('[name="notes"]').type('Data Entry');
cy.get('#select2-reasondummy-container').click();
cy.get('.select2-search__field').type('Visa application').type('{enter}');
cy.get('[name="appoinmentdate"]').click();
cy.get('[data-handler="selectYear"]').select('2002')
cy.get('[data-handler="selectMonth"]').select('Aug')
cy.get('[data-date="5"]').click();
cy.get('#deliverymethod_1').click();
cy.get('#billname').type('bhavani')
cy.get('#billing_phone').type('99874785975')
cy.get('#billing_email').type('naveen@gmail.com')
cy.get('#select2-billing_country-container').click()
cy.get('.select2-search__field').type('india').type('{enter}')
cy.get('[name="billing_address_1"]').type('hyderabad')
cy.get('[name="billing_address_2"]').type('jntu')
cy.get('[data-placeholder="Apartment, suite, unit, etc. (optional)"]').type('kukatpally')
cy.get('#select2-billing_state-container').click();
cy.get('.select2-search__field').type('Andhra Pradesh').type('{enter}')
cy.get('[name="billing_postcode"]').type('500090')


     })
});

})