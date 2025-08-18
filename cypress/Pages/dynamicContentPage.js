class dynamicContentPage{

   dynamicContent1=":nth-child(1) > .col-md-10";
   dynamicContent2=":nth-child(4) > .col-md-10"
   

   navigatedDynamicContentPage(){
        cy.visit('dynamic-content')   }

   getTextBlocks()  { 

       return  cy.get(this.dynamicContent1).invoke('text').then(text => text.trim());
          }

   reloadPage() {
       cy.reload();
      }

  compareTexts(beforeText, afterText) {
     expect(afterText).to.not.eq(beforeText);
  }

    
    }
 

  


export default new dynamicContentPage();