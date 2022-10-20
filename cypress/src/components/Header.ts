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

  private get headerButton(): Cypress.Chainable {
    return cy.get('.nav-link');
  }

  public clickOnLogInButton(): this {
    this.logInButton.contains('Log in').click();
    return this;
  }

  public clickOnContactButton(): this {
    this.headerButton.contains('Contact').click();
    return this;
  }

  public clickOnAboutUsButton(): this {
    this.headerButton.contains('About us').click();
    return this;
  }
  public clickOnSignUpButton(): this {
    this.headerButton.contains('Sign up').click();
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
    this.logInButton.should('have.text', 'Log in');
    return this;
  }
}