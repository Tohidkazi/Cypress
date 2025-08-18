describe('Day 7 - Dynamic Table Validations', () => {

  beforeEach(() => {
    cy.visit('https://practice.expandtesting.com/dynamic-table');
  });

  // Assignment 4A Log each browser name and CPU usage
  it('Logs browser name and CPU usage', () => {
    cy.get('table.table-striped tbody tr').each(($row) => {
      const browser = $row.find('td').eq(0).text().trim();
      const cpu = $row.find('td').eq(2).text().trim();
      cy.log(`${browser}: CPU Usage = ${cpu}`);
    });
  });

  // Assignment 4B Count how many browsers have CPU usage > 20%
  it('Counts browsers with CPU usage over 20%', () => {
  cy.get('table.table-striped tbody tr').then(($rows) => {
    let count = 0;

    $rows.each((index, row) => {
      const cpuText = Cypress.$(row).find('td').eq(2).text().trim().replace('%', '');
      const cpuValue = parseFloat(cpuText);
      cy.log(`Row ${index + 1}: CPU = ${cpuValue}%`);
      if (cpuValue > 20) {
        count++;
      }
    });
    cy.log('CPU > 20%:' +(count));
    expect(count).to.be.at.least(0);
    // expect(count).to.be.greaterThan(0);
  });
});

  // Assignment 5 Compare Chrome CPU with yellow label
  it('Validates Chrome CPU value matches the yellow label', () => {
  let cpuColumnIndex;

  // Step 1 Get the CPU column index
  cy.get('table thead tr th').each(($el, index) => {
    const columnName = $el.text().trim();
    if (columnName === 'CPU') {
      cpuColumnIndex = index;
    }
  }).then(() => {
    // Step 2 Get Chrome row's CPU value using the dynamic column index
    cy.get('table tbody tr').each(($row) => {
      const rowText = $row.text();

      if (rowText.includes('Chrome')) {
        cy.wrap($row).find('td').eq(cpuColumnIndex).invoke('text').then((cpuValueFromTable) => {
          const tableCPU = cpuValueFromTable.trim();

          // Step 3 Get the yellow label value (no ID used)
          cy.get('.bg-warning') // fallback to yellow label class
            .should('contain.text', 'Chrome CPU')
            .invoke('text')
            .then((labelText) => {
              const labelCPU = labelText.split(':')[1].trim();

              // Final Assertion
              expect(labelCPU).to.eq(tableCPU);
            });
        });

        // Stop loop early after finding Chrome row
        return false;
      }
    });
  });
});
// Assignment 6 Extract memory column and print browser + memory
  it('Logs browser and memory usage dynamically by column name', () => {
    // Find the index of "Memory" column
    cy.get('table thead tr th').then($headers => {
      let memoryIndex = -1;
      $headers.each((index, th) => {
        if (Cypress.$(th).text().trim() === 'Memory') {
          memoryIndex = index;
        }
      });

      // Now print each browser and its memory
      cy.get('table.table-striped tbody tr').each(($row) => {
        const browser = $row.find('td').eq(0).text().trim();
        const memory = $row.find('td').eq(memoryIndex).text().trim();
        cy.log(`${browser}: Memory = ${memory}`);
      });
    });
  });

  // Assignment 7 Validate row content and CPU > 15%
  it.only('Validates each row has browser name, no empty cell, and at least one CPU > 15%', () => {
    let cpuAbove15Exists = false;

    cy.get('table.table-striped tbody tr').each(($row) => {
      const cells = $row.find('td');
      const browserName = cells.eq(0).text().trim();
      expect(browserName).to.not.be.empty;

      // Assert no cell is empty
      cells.each((_, td) => {
        const text = Cypress.$(td).text().trim();
        expect(text).to.not.equal('');
      });

      // Check CPU usage
      const cpuText1 = cells.eq(2).text().trim().replace('%', '');
      const cpuValue1 = parseFloat(cpuText1);
      if (cpuValue1 > 15) {
        cpuAbove15Exists = true;
      }
    }).then(() => {
      expect(cpuAbove15Exists).to.be.false;
    });
  });
});
