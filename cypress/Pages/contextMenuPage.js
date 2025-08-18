class contextMenuPage{

   contextMenu="#hot-spot";
   

    navigateContextMenu(){
        cy.visit('/context-menu')   }

     rightClickBox()  { 
        cy.get(this.contextMenu).rightclick();
          }

     handleAlert(alerttext) { 
        cy.on('window:alert', (text) => {
        expect(text).to.eq(alerttext);
         });
        }
    
    }
 

  


export default new contextMenuPage();