const { performGraphQLQuery } = require('../support/commands.js');
describe('GraphQL Tests', () => {
  it('should query data using GraphQL', async () => {
    const query = `
    mutation MyMutation {
        createCodeimprove(input: {emailid: "arun@3", name: "nnnnn"}) {
                emailid
                id
                name
              }
            }
    `;
    try {
      const data = await performGraphQLQuery(query);
    //   expect(data.getCodeimprove.name).to.equal('jitendra');
    //   expect(data.getCodeimprove.emailid).to.equal('arun@123');
    } catch (error) {
      // Handle any errors that occurred during the GraphQL query
      throw error;
    }
  });
});