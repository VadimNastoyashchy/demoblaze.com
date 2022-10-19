export default class Header {

  private get logInButton(): Cypress.Chainable {
    return cy.get('#login2');
  }

  private get logOutButton(): Cypress.Chainable {
    return cy.get('#logout2');
  }

  private get userNameInHeader(): Cypress.Chainable {
    return cy.get('#nameofuser');
  }
  private get contactButton(): Cypress.Chainable {
    return cy.get('.nav-link');
  }

  public clickOnLogInButton(): this {
    this.logInButton.contains('Log in').click();
    return this;
  }
  public clickOnContactButton(): this {
    this.contactButton.contains('Contact').click();
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