import HomePage from '../src/pages/HomePage';

const homePage: HomePage = new HomePage();
describe('Check modals window on the page', () => {
    it('Check Contact modal window', () => {
        homePage
            .visit()
            .header.clickOnContactButton();
        homePage.contactModal
            .checkTextInModalHeader('New message')
            .checkTextFormAndInputField('Contact Email:')
            .checkTextFormAndInputField('Contact Name:')
            .checkTextFormAndInputField('Message:')
            .checkHeaderCloseButton()
            .checkFooterCloseButton()
            .checkFooterSendButton('Send message');
    });
    it('Check About us modal window', () => {
        homePage
            .visit()
            .header.clickOnAboutUsButton();
        homePage.aboutUsModal
            .checkTextInModalHeader('About us')
            .checkThatAboutUsVideoVisible()
            .checkHeaderCloseButton()
            .checkFooterCloseButton();
    });
    it('Check Log in modal window', () => {
        homePage
            .visit()
            .header.clickOnLogInButton();
        homePage.logInModal
            .checkTextInModalHeader('Log in')
            .checkTextFormAndInputField('Username:')
            .checkTextFormAndInputField('Password:')
            .checkHeaderCloseButton()
            .checkFooterCloseButton()
            .checkFooterLogInButton('Log in');
    });
    it('Check Sign up modal window', () => {
        homePage
            .visit()
            .header.clickOnSignUpButton();
        homePage.singUpModal
            .checkTextInModalHeader('Sign up')
            .checkTextFormAndInputField('Username:')
            .checkTextFormAndInputField('Password:')
            .checkHeaderCloseButton()
            .checkFooterCloseButton()
            .checkFooterSignUpButton('Sign up');
    });
});