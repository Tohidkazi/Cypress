describe('My First Test', () => {
    for (let i = 0; i < 1; i++) 
  it('Login with the credentials given on the website', () => {
    cy.visit('https://practice.expandtesting.com/login');
    cy.get('input[id="username"]').type('practice');
    cy.get('input[id="password"]').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').scrollIntoView().click();
    cy.wait(3000);
    cy.contains("Logout").scrollIntoView().click();
    cy.wait(3000);
    cy.log('Test completed: Login and logout successful')
  });
});
