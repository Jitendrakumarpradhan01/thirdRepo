
const { makeGraphQLMutation } = require('../support/commands.js');

describe('GraphQL Mutation Test', () => {
  it('should execute the GraphQL mutation', () => {
    // Define your variables
    const emailid = 'pk@123';
    const name = 'Pankaj';
    var Id;
    
    const mutation = /* GraphQL */ `
      mutation MyMutation($emailid: String!, $name: String!) {
        createCodeimprove(input: { emailid: $emailid, name: $name }) {
          emailid
          id
          name
        }
      }
    `;
    
    cy.makeGraphQLMutation(mutation, { emailid, name }).then((data) => {
      
    //   expect(data).to.have.property('createCodeimprove');
    //   expect(data.createCodeimprove).to.have.property('emailid', emailid);
    //   expect(data.createCodeimprove).to.have.property('name', name);
    
    });
   
  });
});
