export default class Api {
    public static POST (requestMethod: string, requestUrl: string, requestBody: any): Cypress.Chainable{
      return  cy.request(requestMethod, requestUrl, requestBody);
    }
}