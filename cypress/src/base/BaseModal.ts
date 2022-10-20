export default abstract class BaseModal {

    protected readonly MODAL_CONTAINER: string;
    protected readonly MODAL_HEADER_CONTAINER: string = '.modal-header';
    protected readonly MODAL_BODY_CONTAINER: string = '.modal-body';
    protected readonly MODAL_FOOTER_CONTAINER: string = '.modal-footer';

    constructor(modalContainer: string = '') {
        this.MODAL_CONTAINER = modalContainer;
    }
    protected get modalTextForm(): Cypress.Chainable {
        return cy.get(`${this.MODAL_BODY_CONTAINER} .form-control-label`);
    }

    protected get modalInputs(): Cypress.Chainable {
        return cy.get(`${this.MODAL_BODY_CONTAINER} .form-control`);
    }

    protected get modalHeaderText(): Cypress.Chainable {
        return cy.get(`${this.MODAL_HEADER_CONTAINER} .modal-title`);
    }

    protected get headerCloseModalButton(): Cypress.Chainable {
        return cy.get(`${this.MODAL_HEADER_CONTAINER} .close`);
    }

    protected get footerCloseModalButton(): Cypress.Chainable {
        return cy.get(`${this.MODAL_FOOTER_CONTAINER} > .btn-secondary`);
    }

    protected get modalFooterButton(): Cypress.Chainable {
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

    public checkTextInModalHeader(headerText: string): this {
        this.modalHeaderText.contains(headerText);
        return this;
    }

    public checkHeaderCloseButton(): this {
        this.headerCloseModalButton.should('be.visible');
        return this;
    }

    public checkFooterCloseButton(): this {
        this.footerCloseModalButton.contains('Close');
        return this;
    }

    public checkTextFormAndInputField(nameForm: string): this {
        this.checkTextFormsInModalWindow(nameForm);
        this.checkInputFieldsInModalWindow();
        return this;
    }
}