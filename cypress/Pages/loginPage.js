class loginPage{


    userName="#username";
    password="#password";
    loginButton="#login > .btn";

    invalidError="#flash > b"

    loginUrl(){      //visit is keyword, hence used loginUrl
          cy.visit("/login")
    }

    enterUsername(value){

         cy.get(this.userName).click().type(value)
    }
    
    enterPassword(value){

         cy.get(this.password).click().type(value)
    }
     clickLogin(){

         cy.get(this.loginButton).click()
    }




}


export default new loginPage();