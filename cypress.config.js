const { defineConfig } = require("cypress");

module.exports = defineConfig({
<<<<<<< HEAD
  projectId: 'wxkhky',
=======
>>>>>>> 6b3db1d6237727565b616d6fcc8835afdb95d9bb
  defaultCommandTimeout: 20000,
  reporter: 'cypress-mochawesome-reporter',
  video: true,
 env:{

  URL : 'https://rahulshettyacademy.com/angularpractice/',
  URL1 :"https://example.cypress.io/",
  URL2 :"https://www.amazon.in/",
  URL3 : "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
  URL4 : "https://his-24-1-gar-sit.napierhealthcare.com/PatientPortal/#/his",
  URL5 : "https://www.saucedemo.com/",
  URL6 : "https://demo.nopcommerce.com/",
<<<<<<< HEAD
  URL7 : "https://www.dummyticket.com/dummy-ticket-for-visa-application/",
  URL8 : "https://www.orangehrm.com/"
=======
  URL7 : "https://www.dummyticket.com/dummy-ticket-for-visa-application/"
>>>>>>> 6b3db1d6237727565b616d6fcc8835afdb95d9bb
},

  e2e: {
    //baseUrl: 'https://rahulshettyacademy.com/angularpractice/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/e2e/integration/integrationTestCases/**/*.cy.js',
  },
});
