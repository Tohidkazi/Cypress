
 describe('Assignment8', () => {

   const noteData={
      title:'Nptes',
      description:'This is notes testing',
      category:'Home'
     
    }
     const loginData={
    
      email:'qa.test2445@endava.com',
      password:'gsssdgs'
    }
  const randomNum = Math.floor(Math.random() * 10000);
    const restrationData = {
  name: `qatest${randomNum}`,
  email: `qa.test${randomNum}@endava.com`,
  password: 'gsssdgs'
};

beforeEach(() => {
  cy.request('POST', 'https://practice.expandtesting.com/notes/api/users/login', loginData).then((res) => {  //8.2
   const token = res.body.data.token; 
    expect(res.status).to.eq(200)   
    cy.wrap(token).as('token'); 

});

});


  

  
   it('8.1 : Register a New User',()=>{     
   
   
    cy.request('POST','https://practice.expandtesting.com/notes/api/users/register',restrationData).then((res)=>{
      cy.log(res)
      expect(res.status).to.eq(201)
      expect(res.statusText).to.eq("Created")
       expect(res.body).to.have.property('success', true);
     

    });
   
  });





  
   it('8.2 : Login and Extract token',()=>{     //before each block login is happening, test case in before each block
  cy.get('@token').then((token) => {

     expect(token).to.not.be.null;     
     cy.log('Token is', token)       
   

   });
 

  });

let id

   it('8.3 : CreateNote',()=>{   
   
    cy.get('@token').then((token) => {
  cy.request({
    method: 'POST',
    url: 'https://practice.expandtesting.com/notes/api/notes',
     headers: {
  'x-auth-token': token
   },
    body: noteData
  }).then((res)=>{
      cy.log(res)
      expect(res.status).to.eq(200)
     // expect(res.body.description).to.have.property('This is notes testing');
      expect(res.body.message).to.eq('Note successfully created');
       expect(res.body.data.description).to.eq('This is notes testing');
        id=res.body.data.id    
       expect(id).to.not.be.null;    
      cy.wrap(id).as('noteId');   
     

    });  


});


});



 it('8.4 : Fetch all notes',function (){      
    cy.get('@token').then((token) => {
  
  cy.request({
    method: 'GET',
    url: 'https://practice.expandtesting.com/notes/api/notes',
     headers: {
  'x-auth-token': token
   },
    body: noteData
  }).then((res)=>{
      cy.log(res)
      expect(res.status).to.eq(200)
       const idFetch = res.body.data.some(note => note.id === id);
        expect(idFetch).to.be.true;
    
 
 
});

});


});


 it('8.5 : Delete NotesId',function (){      
    cy.get('@token').then((token) => {
     cy.request({
    method: 'DELETE',
    url: `https://practice.expandtesting.com/notes/api/notes/${id}`,
     headers: {
  'x-auth-token': token
   },
    body: noteData
  }).then((res)=>{
      cy.log(res)
      expect(res.status).to.eq(200)
        expect(res.body.message).to.eq('Note successfully deleted');
     
 
  });
});


});


});
