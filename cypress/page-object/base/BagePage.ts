export default abstract class BasePage {

  protected readonly PAGE_NAME: string;
  protected readonly PAGE_URL: string;

  constructor(pageName: string, pageUrl: string = '') {
    this.PAGE_NAME = pageName;
    this.PAGE_URL = pageUrl;
  }

  public visit(): this {
    cy.visit(`${Cypress.config('baseUrl')}${this.PAGE_URL}`, {
      failOnStatusCode: false,
    });
    return this;
  }

  public checkPageUrl(): this {
    cy.location('href').should('include',`${Cypress.config('baseUrl')}${this.PAGE_URL}`
    );
    return this;
  }
}