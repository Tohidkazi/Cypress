describe('Notes API Test Suite', () => {
  let token;
  let noteId;
  const email = `user${Date.now()}@test.com`; // Unique email for each run

  it('Assignment 1: Register a New User', () => {
    cy.request({
      method: 'POST',
      url: 'https://practice.expandtesting.com/notes/api/users/register',
      body: {
        name: 'Cypress User',
        email: email,
        password: 'Password@123'
      },
      failOnStatusCode: false
    }).then((res) => {
      cy.log(`Status Code: ${res.status}`);
      if (res.status === 201) {
        expect(res.body.message).to.include('created');
      } else if (res.status === 400) {
        expect(res.body.message).to.include('already exists');
      } else {
        throw new Error(`Unexpected status: ${res.status}`);
      }
    });
  });

  it.only('Assignment 2: Login and Extract Token', () => {
    cy.request({
      method: 'POST',
      url: 'https://practice.expandtesting.com/notes/api/users/login',
      body: {
        email: email,
        password: 'Password@123'
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('token');
      token = res.body.token;
      cy.log(`Token: ${token}`);
    });
  });

  it('Assignment 3: Create a Note', () => {
    cy.request({
      method: 'POST',
      url: 'https://practice.expandtesting.com/notes/api/notes',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: {
        title: 'API Test Note',
        content: 'This note is created using Cypress API automation.'
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body.message).to.include('Note created');
      noteId = res.body.note._id;
      cy.log(`Note ID: ${noteId}`);
    });
  });

  it('Assignment 4: Fetch All Notes', () => {
    cy.request({
      method: 'GET',
      url: 'https://practice.expandtesting.com/notes/api/notes',
      headers: {
        Authorization: `Bearer ${token}`
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.notes).to.be.an('array');
    });
  });

  it('Assignment 5: Delete a Note', () => {
    cy.request({
      method: 'DELETE',
      url: `https://practice.expandtesting.com/notes/api/notes/${noteId}`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.message).to.include('Note deleted');
    });
  });
});
