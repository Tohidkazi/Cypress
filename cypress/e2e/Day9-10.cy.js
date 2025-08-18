

import loginPage from '../Pages/loginPage';
import securePage from '../Pages/securePage';
import checkBoxPage from '../Pages/checkBoxPage';
//import cdropDownPage from '../../Pages/dropDownPage';
import dropDownPage from '../Pages/dropDownPage';
import contextMenuPage from '../Pages/contextMenuPage';
import dynamicContentPage from '../Pages/dynamicContentPage';

describe('Assignment9_10', () => {

  beforeEach(()=>{
    
    loginPage.loginUrl();  
    loginPage.enterUsername("practice")
    loginPage.enterPassword("SuperSecretPassword!")
    loginPage.clickLogin()  
  });
  
  it('1.1POM-Valid Credential',()=>{
   cy.get(securePage.logoutButton).should('be.visible') 
  });

  it('1.2CPOM- Invalid Credential',()=>{
    securePage.clicklogOut();
    loginPage.loginUrl();  
    loginPage.enterUsername("practiceInvalid")
    loginPage.enterPassword("SuperSecretPassword!Invalid")
    loginPage.clickLogin() 
    cy.get('#flash > b').should('have.text','Your username is invalid!')   //asserting the text
    
  });

   it('2 POM- secure',()=>{
    
    securePage.getSuccessAlert(); // validation of success
    securePage.clicklogOut();  //logout
     

  });

   it('3 POM- check box',()=>{

   checkBoxPage.navigate()
   checkBoxPage.validateCheckboxState()
     

  });

  
   it('4 POM- dropdown',()=>{

   dropDownPage.navigateDropdownPage()
   dropDownPage.selectOption('1')
   dropDownPage.getSelectedOption('1')
   dropDownPage.selectOption('2')
   dropDownPage.getSelectedOption('2') 
        

  });
   it('5 POM- contextMenu',()=>{

   contextMenuPage.navigateContextMenu()
   contextMenuPage.rightClickBox()
   contextMenuPage.handleAlert('You selected a context menu')  
        

  });

    it('6 POM- dynamicContent',()=>{
   let before
   dynamicContentPage.navigatedDynamicContentPage()
       dynamicContentPage.getTextBlocks().then((text1) => {
        cy.log(text1)
      before = text1;
      dynamicContentPage.reloadPage();
      dynamicContentPage.getTextBlocks().then((text2) => {
        dynamicContentPage.compareTexts(before, text2);
      });
    });

  });

});