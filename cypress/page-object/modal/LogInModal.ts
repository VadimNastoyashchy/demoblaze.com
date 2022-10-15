import BaseModal from '../base/BaseModal';
import HomePage from '../pages/HomePage';

export default class LogInModal extends BaseModal {

  constructor() {
    super('.modal-dialog');
  }
  private get inputUserNameField(): Cypress.Chainable {
    return cy.get('#loginusername');
  }
  private get inputPasswordField(): Cypress.Chainable {
    return cy.get('#loginpassword');
  }
  private get modalLogInButton(): Cypress.Chainable {
    return cy.get('.btn-primary');
  }

  private enterEmail(userName: string): this {
    this.inputUserNameField.should('be.visible').clear().type(userName);
    return this;
  }
  private enterPassword(password: string): this {
    this.inputPasswordField.should('be.visible').clear().type(password);
    return this;
  }
  private clickOnLogInButton(): void {
    this.modalLogInButton.contains('Log in').click();
  }
  public logInWithCredentials(userName: string, password: string): HomePage {
    this.enterEmail(userName).enterPassword(password).clickOnLogInButton();
    return new HomePage();
  }
}