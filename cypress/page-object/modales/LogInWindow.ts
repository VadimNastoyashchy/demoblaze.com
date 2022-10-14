import HomePage from '../pages/HomePage';
export default class LogInWindow {

  private modaleWindowContainer: string = '.modal-content';

  private get inputUserNameField(): Cypress.Chainable {
    return cy.get(`${this.modaleWindowContainer} [id^="loginu"]`);
  }
  private get inputPasswordField(): Cypress.Chainable {
    return cy.get(`${this.modaleWindowContainer} [id^="loginp"]`);
  }
  private get modaleLogInButton(): Cypress.Chainable {
    return cy.get(`${this.modaleWindowContainer} [onclick="logIn()"]`);
  }

  private enterEmail(userName: string): this {
    this.inputUserNameField.type(userName);
    return this;
  }
  private enterPassword(password: string): this {
    this.inputPasswordField.type(password);
    return this;
  }
  private clickOnLogInButton(): void {
    this.modaleLogInButton.contains('Log in').click();
  }
  public logInWithCredentials(userName:string,password:string): HomePage {
    this.enterEmail(userName).enterPassword(password).clickOnLogInButton();
    return new HomePage();
  }
}