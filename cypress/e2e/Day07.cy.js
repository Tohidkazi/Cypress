describe('Read and log first 5 columns in each row with headers', () => {
  it('Logs each header and its value for each table row', () => {
    cy.visit('https://practice.expandtesting.com/dynamic-table');

    // Get the first 5 headers
    cy.get('table.table-striped thead tr th').then($headers => {
  const headerTexts = [];                                    // Array to store header texts
  for (let i = 0; i < 5 && i < $headers.length; i++) {       // Loop through the first 5 headers
    const header = $headers.eq(i).text().trim();             // Extract and trim header text
    headerTexts.push(header);                                // Store header in the array
    cy.log('Column ' + (i + 1) + ': ' + header);             // Log each header name
  }
      

      // For each row, get the first 5 cells and print header: value
      cy.get('table.table-striped tbody tr').each(($row, rowIndex) => {
        cy.wrap($row).find('td').then($cells => {           // For each row, get all cell (td) elements
          cy.log('--- Row ' + (rowIndex + 1) + '---');      //Log the row number
          for (let i = 0; i < 5; i++) {                     // Loop through the first 5 cells in the row
            const header = headerTexts[i] || 'Column' +(i + 1); // Use header name
            const cellValue = $cells.eq(i).text().trim();   // Get and trim the cell text
            cy.log((header) +': '+(cellValue));              // Log header and corresponding cell value
            
          }
        });
      });
    });
  });
});

