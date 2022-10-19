export default class Header {

  private get headerButton(): Cypress.Chainable {
    return cy.get('.nav-link');
  }

  private get logOutButton(): Cypress.Chainable {
    return cy.get('#logout2');
  }

  private get userNameInHeader(): Cypress.Chainable {
    return cy.get('#nameofuser');
  }

  public clickOnLogInButton(): this {
    this.headerButton.contains('Log in').click();
    return this;
  }
  public clickOnContactButton(): this {
    this.headerButton.contains('Contact').click();
    return this;
  }

  public checkUserName(userName: string): this {
    this.userNameInHeader.should('have.text', `Welcome ${userName}`);
    return this;
  }

  public clickOnLogOutButton(): this {
    this.logOutButton.click();
    return this;
  }

  public checkLogInButton(): this {
    this.headerButton.should('have.text', 'Log in');
    return this;
  }
}