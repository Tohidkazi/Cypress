class securePage{



    logoutButton=".icon-2x";
    loginText="b"

    navigate(){
     cy.visit('/secure')

    }

     getSuccessAlert() {  
            cy.get(this.loginText).should('be.visible')
            cy.get(this.loginText).invoke('text').then((text)=>{
            expect(text).to.eq('You logged into a secure area!');
            });
    }

     clicklogOut() {  
    cy.get(this.logoutButton).click()
    }






}


export default new securePage();