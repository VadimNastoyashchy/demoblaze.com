export default abstract class BaseModal {

    protected readonly MODAL_CONTAINER: string;
    protected readonly MODAL_HEADER_CONTAINER: string = '.modal-header';
    protected readonly MODAL_BODY_CONTAINER: string = '.modal-body';
    protected readonly MODAL_FOOTER_CONTAINER: string = '.modal-footer';

    constructor(modalContainer: string = '') {
        this.MODAL_CONTAINER = modalContainer;
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

    public checkTextInModalHeader(headerText: string): this {
        this.modalHeaderText.contains(headerText);
        return this;
    }

    public checkHeaderCloseButton(): this {
        this.headerCloseModalButton.should('be.visible');
        return this;
    }

    public checkFooterCloseButton(textButton: string): this {
        this.footerCloseModalButton.contains(textButton);
        return this;
    }
}