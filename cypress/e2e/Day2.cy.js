describe('JavaScript Basics Assignment', () => {
  it('covers variables, data types, conditionals, and loops', () => {
    
    // Task 1 Declare a let variable and update it
    let score = 10;
    cy.log('Initial score: ' + score);
    score = 20;
    cy.log('Updated score: ' + score);

    // Task 1 Try reassigning a const variable
    const pi = 3.14;
    cy.log('Value of pi: ' + pi);
    
    // Task 2 Create an array of 5 numbers and sum them using a loop
    const numbers = [10, 20, 30, 40, 50];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    cy.log('Sum of array elements: ' + sum);

    // Task 3 Write a function that returns "Even" or "Odd" for a number
    function checkEvenOdd(number) {
      if (number % 2 === 0) {
        return 'Even';
      } else {
        return 'Odd';
      }
    }
    cy.log('Check 4: ' + checkEvenOdd(4)); // Even
    cy.log('Check 7: ' + checkEvenOdd(7)); // Odd

    // Task 4 Loop through numbers 1–10 and print only even numbers
    for (let i = 1; i <= 10; i++) {
      if (i % 2 === 0) {
        cy.log('Even number: ' + i);
      }
    }
  });
});
