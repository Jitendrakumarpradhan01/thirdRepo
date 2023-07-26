
describe('GraphQL Query Test', () => {
    it('Executes a GraphQL query', () => {
      const query = `
        query {
            codeimprove{
                id,
                name,
                email
               
              }
        }
      `;
  
      // Send the GraphQL query using cy.request()
      cy.request({
        method: 'POST',
        url: 'http://localhost:5000/graphql', // Replace this with your actual GraphQL endpoint URL
        body: {
          query,
        },
      }).then((response) => {
        // Assert on the response if needed
        expect(response.status).to.eq(200);
        
      });
    });
  });
  