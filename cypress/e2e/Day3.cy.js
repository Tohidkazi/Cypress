describe('Function Assignment Tests', () => {
  it('1 - Welcome message', () => {
    function logWelcome() {
      cy.log("Welcome to Cypress Training!");
    }
    logWelcome();
  });

  it('2 - Print user email', () => {
    const printUserEmail = function(email) {
      cy.log("User Email: " + email);
    };
    printUserEmail("mkazi@galaxe.com.com");
  });

  it('3 - Multiplication of 3 numbers', () => {
    const multiplyThree = (a, b, c) => a * b * c;
    const result = multiplyThree(2, 3, 4);
    cy.log("Multiplication Result: " + result);
  });
});
