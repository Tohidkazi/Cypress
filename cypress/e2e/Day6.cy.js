describe('Day 6 - Cypress Fixture Assignments', () => {

  // Assignment A Login using fixture
  it('Login using fixture data', () => {
    cy.visit('https://practice.expandtesting.com/login');

    // Load data from user.json
    cy.fixture('user').then((userData) => {
      cy.get('#username').type(userData.username);
      cy.get('#password').type(userData.password);
      cy.get('button[type="submit"]').click();

      // Assertion to verify login success
      cy.get('#flash').should('contain.text', 'You logged into a secure area!');
    });
  });

  // Assignment B Form Validation using fixture
  it('Fill form using fixture data', () => {
    cy.visit('https://practice.expandtesting.com/form-validation');

    // Load data from formData.json
    cy.fixture('formData').then((formData) => {
      cy.get('input[name="ContactName"]').should('have.value', formData.ContactName); 
      cy.get('input[name="contactnumber"]').clear().type(formData.contactNumber);
      cy.get('input[name="pickupdate"]').type(formData.pickupdate);                 
      cy.get('select[name="payment"]').select(formData.payment);  

    });


  });
  it('Select the "QA" checkbox', () => {
  cy.visit('https://practice.expandtesting.com/checkboxes'); 
  cy.get('input[id=checkbox2]').check().should('be.checked');
   });

   it('Select "India" from the country dropdown', () => {
  cy.visit('https://practice.expandtesting.com/dropdown'); 
  cy.get('select[name="country"]').select('India')
  });
  it('Select the "Blue" radio button', () => {
  cy.visit('https://practice.expandtesting.com/radio-buttons');
  cy.get('input[id="blue"]').check().should('be.checked');
});
 // Assignment 3A Scroll to hidden button
  it('Scroll to hidden button and click it', () => {
    cy.visit('https://practice.expandtesting.com/scrollbars');
    cy.get('button[id="hidingButton"]').scrollIntoView().click();
  });
  it('Perform drag and drop action', () => {
    cy.visit('https://practice.expandtesting.com/drag-and-drop');
    const dataTransfer = new DataTransfer();

  // Drag column A and drop it on column B
  cy.get('#column-a')
    .trigger('dragstart', { dataTransfer });

  cy.get('#column-b')
    .trigger('drop', { dataTransfer });

  cy.get('#column-a')
    .trigger('dragend');

  //should have swapped headers
  cy.get('#column-a header').should('contain.text', 'B');
  cy.get('#column-b header').should('contain.text', 'A');
  });
  // Assignment 3C Hover and assert tooltip
  it('Hover over tooltip trigger and verify text', () => {
    cy.visit('https://practice.expandtesting.com/tooltips');
    const tooltips = [
    { buttonId: '#btn1', expectedText: 'Tooltip on top' },
    { buttonId: '#btn2', expectedText: 'Tooltip on end' },
    { buttonId: '#btn3', expectedText: 'Tooltip on bottom' },
    { buttonId: '#btn4', expectedText: 'Tooltip on start' },
    { buttonId: '#btn5', expectedText: 'Tooltip with HTML' },
  ];

  tooltips.forEach(({ buttonId, expectedText }) => {
    cy.get(buttonId).trigger('mouseover');
    cy.get('.tooltip-inner')
      .should('be.visible')
      .and('contain', expectedText); 

    cy.get(buttonId).trigger('mouseout');
    cy.wait(300); 
  });
});

});