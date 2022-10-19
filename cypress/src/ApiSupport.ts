export default class ApiSupport {
  public static POST(requestUrl: string, requestBody: any): Cypress.Chainable<Cypress.Response<any>> {
    return cy.request('POST', requestUrl, requestBody);
  }
}