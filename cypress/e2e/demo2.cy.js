describe('GraphQL Tests', () => {
    it('should query data using GraphQL', () => {
      const query = `
        query MyQuery {
          getCodeimprove(id:"01") {
            name
            id
            emailid
          }
        }
      `;
      cy.performGraphQLQuery(query).then((data) => {
        expect(data.getCodeimprove.name).to.equal('jitendra');
        expect(data.getCodeimprove.emailid).to.equal('arun@123');
      })
    });
  });