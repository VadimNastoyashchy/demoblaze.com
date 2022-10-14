export default class Header {

  private headerContainer: string = '#navbarExample';

  private get logInButton(): Cypress.Chainable {
    return cy.get(`${this.headerContainer} [id="login2"]`);
  }
  private get logOutButton(): Cypress.Chainable {
    return cy.get(`${this.headerContainer} [id="logout2"]`);
  }
  private get welcomeUserName(): Cypress.Chainable {
    return cy
      .get(`${this.headerContainer} [id="nameofuser"]`, { timeout: 5000 })
      .should(($x) => {
        expect($x).to.have.text('Welcome SarahConnor');
      });
  }

  public clickOnLogInButton(): this {
    this.logInButton.click();
    return this;
  }
  public checkThatUserLoggedInSite(userName: string): this {
    this.welcomeUserName.contains(`Welcome ${userName}`);
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