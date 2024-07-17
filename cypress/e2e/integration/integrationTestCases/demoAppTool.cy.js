const faker = require('faker');

describe('Demo Testing', function() {
  it('Demo Data Testing', function() {
    for (let i = 0; i < 5; i++) {
        cy.then(() => {
    cy.visit('https://demo.applitools.com/index.html');

    
        

        const randomName = `${faker.name.firstName()} ${faker.name.lastName()}`;
        const randomPassword = `${Math.floor(Math.random() * 10000)}`; // Ensure password is a string

        cy.log(`Generated random name: ${randomName}`);
        cy.log(`Generated random password: ${randomPassword}`);

        cy.get('#username').clear().type(randomName);
        cy.get('#password').clear().type(randomPassword);
        cy.get('#log-in').click();

        // Add assertions or further actions as needed
      });
    }
  });
});