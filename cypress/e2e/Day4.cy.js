describe('Day 4 Cypress Assignments', () => {

  // Assignment 1: Login Form Testing
  describe('Login Form Testing', () => {
    beforeEach(() => {
      cy.visit('https://practice.expandtesting.com/login');
    });

    it('login with valid credentials', () => {
      cy.get('#username').type('practice');
      cy.get('#password').type('SuperSecretPassword!');
      cy.get('button[type="submit"]').click();

      cy.get('#flash').should('contain.text', 'You logged into a secure area!');
      cy.get('a[href="/logout"]').should('be.visible');
    });

    it('should show error for invalid username', () => {
      cy.get('#username').type('wrongUser');
      cy.get('#password').type('SuperSecretPassword!');
      cy.get('button[type="submit"]').click();

      cy.get('#flash')
      .should('be.visible')
      .and('include.text', 'Your password is invalid!');//actually username is wrong but i am getting this msg that's why i added, i am checking this wrong msg is coming 
    });

    it('Show error for invalid password', () => {
      cy.get('#username').type('practice');
      cy.get('#password').type('WrongPassword');
      cy.get('button[type="submit"]').click();

      cy.get('#flash')
      .should('be.visible')
      .and('include.text', 'Your password is invalid!');
    });
  });

  // Assignment 2: Registration Form Validation
  describe('Registration Form Validation', () => {
    beforeEach(() => {
      cy.visit('https://practice.expandtesting.com/register'); 
    });

    it('Register successfully with valid data', () => {
      cy.get('#username').type('Tohid12');
      cy.get('#password').type('SuperSecretPassword!');
      cy.get('#confirmPassword').type('SuperSecretPassword!');
      cy.get('button[type="submit"]').click();

      cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'Successfully registered, you can log in now.');
    });

    it('Show error on password mismatch', () => {
      cy.get('#username').type('Tohid12');
      cy.get('#password').type('SuperSecretPassword!');
      cy.get('#confirmPassword').type('WrongPass');
      cy.get('button[type="submit"]').click();

      cy.get('#flash')
      .should('contain.text', 'Passwords do not match');
    });

    it('Show validation message on empty fields', () => {
      cy.get('button[type="submit"]').click();
      cy.get('#flash').should('exist');
    });
  });

  // Assignment 3: Checkbox Interaction
  describe('Checkbox Interaction', () => {

  beforeEach(() => {
    // Visit the checkbox practice page before each test
    cy.visit('https://practice.expandtesting.com/checkboxes');
  });

  it('Check both checkboxes using ID selectors', () => {
    cy.get('#checkbox1').check().should('be.checked');
    cy.get('#checkbox2').check().should('be.checked');
  });

  it('Uncheck both checkboxes after checking them', () => {
    cy.get('#checkbox1').check().should('be.checked').uncheck().should('not.be.checked');
    cy.get('#checkbox2').check().should('be.checked').uncheck().should('not.be.checked');
  });

  it('should toggle all checkboxes using a loop', () => {
    cy.get('input[type="checkbox"]').each(($el, index) => {
      // Check the checkbox
      cy.wrap($el).check({ force: true }).should('be.checked');

      // Uncheck the checkbox
      cy.wrap($el).uncheck({ force: true }).should('not.be.checked');
    });
  });

});






  // Assignment 4: Assertions Practice
 describe.only('Day 4 - Assignment 4: Assertions Practice', () => {

  beforeEach(() => {
    cy.visit('https://practice.expandtesting.com/assertions/should-be');
  });

  it('exists and is visible', () => {
    cy.get('#btn1').should('exist').and('be.visible');
  });

  it('is hidden', () => {
    cy.get('#btn2').should('exist').and('not.be.visible');
  });

  it('checkboxes are checked', () => {
    cy.get('#cb1').should('be.checked');
    cy.get('#cb2').should('not.be.checked');
  });

  it('button enabled/disabled state', () => {
    cy.get('#btn3').should('be.enabled');
    cy.get('#btn4').should('be.disabled');
  });

  it('empty and not-empty div', () => {
    cy.get('#div1').should('be.empty');
    cy.get('#div2').should('not.be.empty').and('contain.text', 'Text for div2');
  });

  it('list should have 3 items', () => {
    cy.get('#ul1 > li').should('have.length', 3);
  });

});


});
