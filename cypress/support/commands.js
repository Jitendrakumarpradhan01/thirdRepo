// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// cypress/support/commands.js


// const fetch = require('node-fetch');
// const GRAPHQL_ENDPOINT = 'https://fyi63dmhc5bwthur6rifat6o4q.appsync-api.ap-south-1.amazonaws.com/graphql';
// const GRAPHQL_API_KEY = 'da2-trmypwhe2fctzemoqj65ufntue';
// /**
//  * Perform a GraphQL query and return the response body
//  * @param {string} query The GraphQL query string
//  * @returns {Promise<any>} The parsed response body
//  */
// async function performGraphQLQuery(query) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'x-api-key': GRAPHQL_API_KEY,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ query }),
//   };
//   const response = await fetch(GRAPHQL_ENDPOINT, options);
//   const body = await response.json();
//   if (body.errors) {
//     throw new Error('GraphQL query returned errors');
//   }
//   return body.data;
// }
// module.exports = {
//   performGraphQLQuery,
// };


// const fetch = require('node-fetch');
// const GRAPHQL_ENDPOINT = 'https://fyi63dmhc5bwthur6rifat6o4q.appsync-api.ap-south-1.amazonaws.com/graphql';
// const GRAPHQL_API_KEY = 'da2-trmypwhe2fctzemoqj65ufntue';
// /**
//  * Perform a GraphQL query using Cypress and return the response body
//  * @param {string} query The GraphQL query string
//  * @returns {Cypress.Chainable<JSON>} The parsed response body
//  */
// Cypress.Commands.add('performGraphQLQuery', (query) => {
//   cy.request({
//     method: 'POST',
//     url: GRAPHQL_ENDPOINT,
//     headers: {
//       'x-api-key': GRAPHQL_API_KEY,
//       'Content-Type': 'application/json',
//     },
//     body: { query },
//     failOnStatusCode: false,
//   }).then((response) => {
//     if (response.body.errors) {
//       throw new Error('GraphQL query returned errors');
//     }
//     return response.body.data;
//   });
// });




// commands.js

// import fetch from 'node-fetch';

// Cypress.Commands.add('makeGraphQLMutation', (mutation, variables) => {
//   const GRAPHQL_ENDPOINT = 'https://fyi63dmhc5bwthur6rifat6o4q.appsync-api.ap-south-1.amazonaws.com/graphql';
//   const GRAPHQL_API_KEY = 'da2-trmypwhe2fctzemoqj65ufntue';

//   const options = {
//     method: 'POST',
//     headers: {
//       'x-api-key': GRAPHQL_API_KEY,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: mutation,
//       variables,
//     }),
//   };

//   return fetch(GRAPHQL_ENDPOINT, options)
//     .then((response) => response.json())
//     //.then((response) => response.createCodeimprove.id);
//   //   .then((json) => {
//   //     if (json.errors) {
//   //       throw new Error(JSON.stringify(json.errors));
//   //     }
//   //     return json.data;
//   //   });
// });





Cypress.Commands.add('addDataAndGetId', (emailid, name) => {
  var id;
  const mutation = /* GraphQL */ `
    mutation AddData($emailid: String!, $name: String!) {
      createCodeimprove(input: { emailid: $emailid, name: $name }) {
        id
      }
    }
  `;

  cy.request({
    method: 'POST',
    url: 'https://fyi63dmhc5bwthur6rifat6o4q.appsync-api.ap-south-1.amazonaws.com/graphql',
    headers: {
      'x-api-key': 'da2-trmypwhe2fctzemoqj65ufntue',
    },
    body: {
      query: mutation,
      variables: {
        emailid,
        name,
      },
    },
  }).then((response) => id=response.body.data.createCodeimprove.id);
  return id;
});


Cypress.Commands.add('getAllData', () => {
  var items;
  const query = /* GraphQL */ `
    query AllData {
      listCodeimproves {
        items {
          id
          emailid
          name
        }
      }
    }
  `;
  cy.request({
    method: 'POST',
    url: 'https://fyi63dmhc5bwthur6rifat6o4q.appsync-api.ap-south-1.amazonaws.com/graphql',
    headers: {
      'x-api-key': 'da2-trmypwhe2fctzemoqj65ufntue',
    },
    body: {
      query,
    },
  }).then((response) => items=response.body.data.listCodeimproves.items);
  return items
});






Cypress.Commands.add('updateNameField', (id, newName) => {
  var update
  const mutation = /* GraphQL */ `
    mutation UpdateNameField($id: ID!, $name: String!) {
      updateCodeimprove(input: { id: $id, name: $name }) {
        id
        emailid
        name
        
      }
    }
  `;

   cy.request({
    method: 'POST',
    url: 'https://fyi63dmhc5bwthur6rifat6o4q.appsync-api.ap-south-1.amazonaws.com/graphql',
    headers: {
      'x-api-key': 'da2-trmypwhe2fctzemoqj65ufntue',
    },
    body: {
      query: mutation,
      variables: {
        id,
        name: newName,
      },
    },
  }).then((response) =>update= response.body.data.updateCodeimprove);
return update;
});






Cypress.Commands.add('deleteDataRecord', (id) => {
  const mutation = /* GraphQL */ `
    mutation DeleteDataRecord($id: ID!) {
      deleteCodeimprove(input: { id: $id }) {
        id
        emailid
        name
       
      }
    }
  `;

  return cy.request({
    method: 'POST',
    url: 'https://fyi63dmhc5bwthur6rifat6o4q.appsync-api.ap-south-1.amazonaws.com/graphql',
    headers: {
      'x-api-key': 'da2-trmypwhe2fctzemoqj65ufntue',
    },
    body: {
      query: mutation,
      variables: {
        id,
      },
    },
  }).then((response) => response.body.data.deleteCodeimprove);
});

