
// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   projectId: 'dg5yp4', // Use the correct projectId
//   defaultCommandTimeout: 20000,
//   reporter: 'cypress-mochawesome-reporter',
//   video: true,
//   env: {
//     URL: 'https://rahulshettyacademy.com/angularpractice/',
//     URL1: "https://example.cypress.io/",
//     URL2: "https://www.amazon.in/",
//     URL3: "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
//     URL4: "https://his-24-1-gar-sit.napierhealthcare.com/PatientPortal/#/his",
//     URL5: "https://www.saucedemo.com/",
//     URL6: "https://demo.nopcommerce.com/",
//     URL7: "https://www.dummyticket.com/dummy-ticket-for-visa-application/",
//     URL8: "https://www.orangehrm.com/"
//   },
//   e2e: {
//     // baseUrl: 'https://rahulshettyacademy.com/angularpractice/',
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       require('cypress-mochawesome-reporter/plugin')(on);
//     },
//     specPattern: 'cypress/e2e/integration/integrationTestCases/**/*.cy.js',

//     chromeWebSecurity: false,
//     defaultCommandTimeout: 10000,
//     video: false,
//     viewportWidth: 1280,
//     viewportHeight: 720,
//     browser: {
//       chrome: {
//         args: [
//           '--disable-password-manager',
//           '--disable-save-password-bubble'
//         ]
//       }
//     }
//   },
// });

/////////////////////////////////////////////////////

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'dg5yp4', // Use the correct projectId
  defaultCommandTimeout: 20000,
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  env: {
    URL: 'https://rahulshettyacademy.com/angularpractice/',
    URL1: "https://example.cypress.io/",
    URL2: "https://www.amazon.in/",
    URL3: "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
    URL4: "https://his-24-1-gar-sit.napierhealthcare.com/PatientPortal/#/his",
    URL5: "https://www.saucedemo.com/",
    URL6: "https://demo.nopcommerce.com/",
    URL7: "https://www.dummyticket.com/dummy-ticket-for-visa-application/",
    URL8: "https://www.orangehrm.com/"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' && browser.family === 'chromium') {
          launchOptions.args.push('--disable-password-manager');
          launchOptions.args.push('--disable-save-password-bubble');
        }
        return launchOptions;
      });
    },
    specPattern: 'cypress/e2e/integration/integrationTestCases/**/*.cy.js',
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    video: false,
    viewportWidth: 1280,
    viewportHeight: 720
  },
});
