import BaseModal from '../base/BaseModal';

export default class AboutUsModal extends BaseModal {

    private get aboutUsVideo(): Cypress.Chainable {
        return cy.get(`${this.MODAL_BODY_CONTAINER} #example-video`);
    }

    public checkThatAboutUsVideoVisible(): this {
        this.aboutUsVideo.should('be.visible');
        return this;
    }
}