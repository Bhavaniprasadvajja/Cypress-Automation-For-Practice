Cypress.on('uncaught:exception', (err, runnable) => {
    // Check if the error message includes 'Masonry is not defined'
    if (err.message.includes('Masonry is not defined')) {
      // Return false to prevent Cypress from failing the test
      return false;
    }
    // Let other errors fail the test
    return true;
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    // List of error messages to ignore
    const ignoreErrors = [
      'r(...).popover is not a function',
      'oldInputs is not defined',
      'reCAPTCHA has already been rendered in this element'
    ];
  
    // If the error message is in the ignoreErrors array, return false to prevent Cypress from failing the test
    if (ignoreErrors.some(error => err.message.includes(error))) {
      return false;
    }
  
    // Return true to let other errors fail the test
    return true;
  });

  import 'cypress-iframe';
  import "cypress-real-events/support";
  require('cypress-if');