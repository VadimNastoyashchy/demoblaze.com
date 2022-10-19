export default class ApiSupport {

  public static POST(requestUrl: string, requestBody: Cypress.RequestBody): Cypress.Chainable<Cypress.Response<any>> {
    return cy.request('POST', requestUrl, requestBody);
  }
}