describe('Even Numbers', () => {
  it('Print even numbers from 1 to 10', () => {
    for (let i = 1; i <= 10; i++) {
      if (i % 2 == 0) {
        cy.log('Even number: ' + i);
      }
    }
  });
});
