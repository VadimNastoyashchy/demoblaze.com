export default class Header {

  readonly headerContainer: string = '#navbarExample';

  private get logInButton(): Cypress.Chainable {
    return cy.get(`${this.headerContainer} [id*="gin2"]`);
  }
  private get logOutButton(): Cypress.Chainable {
    return cy.get(`${this.headerContainer} [id*="out2"]`);
  }

  public  welcomeUserName(userName:string): this {
     cy.get(`${this.headerContainer} [id^="nameo"]`, { timeout: 10000 })
      .should(($x) => {
        expect($x).to.have.text(`Welcome ${userName}`);
      });
      return this;
  }

  public clickOnLogInButton(): this {
    this.logInButton.click();
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