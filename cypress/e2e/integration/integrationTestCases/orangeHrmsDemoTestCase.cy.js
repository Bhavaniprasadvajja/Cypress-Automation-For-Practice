// Import the necessary page objects and plugins
import orangeHrms from "../pageObjects/orangeHrms";
import orangeHrmsOne from "../pageObjects/orangeHrmsOne";
import 'cypress-iframe';

// Instantiate the OrangeHRM page object
const DemoUrl = new orangeHrms();
const DemoUrlOne = new orangeHrmsOne();



// Define the test suite
describe('Demo test case', function() {

  before('URl',function(){

    
    cy.fixture("orangeHrms").then(function(data)
    {

      this.Bhavani =data;


    })



  })
  beforeEach('Before data',function(){

    cy.visit(Cypress.env('URL8'));
  })

  it('HRMS Data Testing', function() {
    // Visit the URL specified in the Cypress environment variables
    

    // Interact with the page elements

    cy.log(Cypress.browser);
    DemoUrl.getHrmsBookDemo().click();
    DemoUrl.getHrmsFirstName().type(this.Bhavani.orangeHrms.HrmsName);
    DemoUrl.getHrmsEmail().type(this.Bhavani.orangeHrms.HrmsEmail);
    DemoUrl.getHrmsCompanyName().type(this.Bhavani.orangeHrms.HrmsCompanyName);
    DemoUrl.getHrmsCountry().select('India');
    DemoUrl.getHrmsPhoneNumber().type('9987478596');

    // cy.frameLoaded('#recaptcha-anchor-label'); // Ensure the iframe is loaded
    // cy.iframe('.rc-anchor-center-container').find('#recaptcha-anchor').click(); // Adjust selector as needed
    
    // // Submit the form
    // DemoUrl.getHrmsSubmitForm().click();

    DemoUrl.getHrmsSolutions().trigger('mouseover', { force: true })
    DemoUrl.getHrmsPeople().trigger('mouseover', { force: true })
    DemoUrl.getHrmsHr().click({ force: true })
    DemoUrl.getHrmsOrange().scrollIntoView();
    DemoUrl.getHrmsOrange().invoke('removeAttr', 'target').click()
    DemoUrl.getHrmsTalant().scrollIntoView()
    cy.go('back');
    DemoUrl.getHrmsLogo().click() 
  });

  it('Second one',function(){

    DemoUrlOne.getHrmsWhy().trigger('mouseover', {force:true})
    DemoUrlOne.getHrmsOurCustomer().trigger('mouseover', {force:true})
    DemoUrlOne.getHrmsCaseStudie().click({force:true})

    


  })

});