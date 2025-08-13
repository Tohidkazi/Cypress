
// Add custom command for login
Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://practice.expandtesting.com/login');
  cy.get('#username').clear().type(username);
  cy.get('#password').clear().type(password);
  cy.get('button[type="submit"]').click();
});

// Add chainable custom command for typing text
Cypress.Commands.add('typeText', { prevSubject: 'element' }, (subject, text) => {
  cy.wrap(subject).clear().type(text);
});

describe('Day 5: Custom Commands Assignment', () => {

  it('should log in successfully using custom login command', () => {
    cy.login('practice', 'SuperSecretPassword!');

    // Assert successful login
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
    cy.get('a[href="/logout"]').should('be.visible');
  });

  it('should use chainable command to fill login form', () => {
    cy.visit('https://practice.expandtesting.com/login');

    // Using custom chainable command
    cy.get('#username').typeText('practice');
    cy.get('#password').typeText('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // Assertion after login
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

});
