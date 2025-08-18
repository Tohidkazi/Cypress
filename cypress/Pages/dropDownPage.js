class dropDownPage{

    contries="select#country";
    dropDown="select#dropdown"

    navigateDropdownPage(){
        cy.visit('/dropdown')   }

     selectOption(value)  { 
          cy.get(this.dropDown).select(value) 
          }

     getSelectedOption(option)  { 
         
        cy.get(this.dropDown).find('option:selected') .should('have.value', option)
        cy.get(this.dropDown).find('option:selected').should('contain.value', option);
 
          }


    
    }
 

  


export default new dropDownPage();