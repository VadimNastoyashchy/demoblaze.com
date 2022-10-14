import HomePage from '../pages/HomePage';
export default class LogInModaleWindow {

  private modaleWindowContainer: string = '.modal-content';

  private get inputUserNameField(): Cypress.Chainable {
    return cy.get(`${this.modaleWindowContainer} [id="loginusername"]`);
  }
  private get inputPasswordField(): Cypress.Chainable {
    return cy.get(`${this.modaleWindowContainer} [id="loginpassword"]`);
  }
  private get modaleLogInButton(): Cypress.Chainable {
    return cy.get(`${this.modaleWindowContainer} [class="btn btn-primary"]`);
  }

  private enterEmail(userName: string): this {
    this.inputUserNameField.clear().type(userName);
    return this;
  }
  private enterPassword(password: string): this {
    this.inputPasswordField.clear().type(password);
    return this;
  }
  private clickOnLogInButton(): void {
    this.modaleLogInButton.contains('Log in').click();
  }
  public logInWithCredentials(credentials: any): HomePage {
    const { userName, password } = credentials;
    this.enterEmail(userName).enterPassword(password).clickOnLogInButton();
    return new HomePage();
  }
}