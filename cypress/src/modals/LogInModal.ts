import BaseModal from '../base/BaseModal';
import HomePage from '../pages/HomePage';

export default class LogInModal extends BaseModal {

  constructor() {
    super('.modal-dialog');
  }

  private get inputUserNameField(): Cypress.Chainable {
    return cy.get(`${this.MODAL_BODY_CONTAINER} #loginusername`);
  }

  private get inputPasswordField(): Cypress.Chainable {
    return cy.get(`${this.MODAL_BODY_CONTAINER} #loginpassword`);
  }

  private enterEmail(userName: string): this {
    this.inputUserNameField
      .should('be.visible')
      .clear()
      .type(userName);
    return this;
  }

  private enterPassword(password: string): this {
    this.inputPasswordField
      .should('be.visible')
      .clear()
      .type(password);
    return this;
  }

  private clickOnLogInButton(): void {
    this.modalFooterButton
      .contains('Log in')
      .click();
  }

  public logInWithCredentials(name: string, password: string): HomePage {
    this.enterEmail(name);
    this.enterPassword(password);
    this.clickOnLogInButton();
    return new HomePage();
  }
  public checkFooterLogInButton(textButton: string): this {
    this.modalFooterButton.contains(textButton).should('be.visible');
    return this;
  }
}