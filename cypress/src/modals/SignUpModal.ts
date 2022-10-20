import BaseModal from '../base/BaseModal';

export default class SignUpModal extends BaseModal {

    public checkFooterSignUpButton(textButton: string): this {
        this.modalFooterButton.contains(textButton).should('be.visible');
        return this;
    }
}