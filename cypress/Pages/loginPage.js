class loginPage{
    usernameLocator ="input#username";
    passwordLocator ="input#password";
    loginButton = "button[type='submit']";

    loginUrl(){
    cy.visit('/login')
    }
    loginActio(){
        
    }
}
export default new loginPage();