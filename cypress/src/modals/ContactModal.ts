import BaseModal from '../base/BaseModal';

export default class ContactModal extends BaseModal {

    private get modalTextForm(): Cypress.Chainable {
        return cy.get(`${this.MODAL_BODY_CONTAINER} .form-control-label`);
    }

    private get modalInputs(): Cypress.Chainable {
        return cy.get(`${this.MODAL_BODY_CONTAINER} .form-control`);
    }

    private get footerSendModalButton(): Cypress.Chainable {
        return cy.get(`${this.MODAL_FOOTER_CONTAINER} > .btn-primary`);
    }

    private checkTextFormsInModalWindow(nameForm: string): this {
        this.modalTextForm.contains(nameForm);
        return this;
    }

    private checkInputFieldsInModalWindow(): this {
        this.modalInputs.should('be.visible');
        return this;
    }

    public checkTextFormAndInputField(nameForm: string): this {
        this.checkTextFormsInModalWindow(nameForm);
        this.checkInputFieldsInModalWindow();
        return this;
    }

    public checkFooterSendButton(textButton: string): this {
        this.footerSendModalButton.contains(textButton).should('be.visible');
        return this;
    }
}