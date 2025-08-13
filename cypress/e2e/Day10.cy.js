import loginPage from "../Pages/loginPage";

describe('Page Object Example', () => {
  it('login', () => {
    loginPage.loginUrl();
    cy.fillInput("loginPage.usernameLocator", "practice");
    cy.fillInput("loginPage.passwordLocator", "SuperSecretPassword!");
    cy.get('loginPage.loginButton').click();
  });
});
