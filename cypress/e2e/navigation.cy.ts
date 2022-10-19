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
            .checkFooterCloseButton('Close')
            .checkFooterSendButton('Send message');
    });
    it.only('Check About us modal window', () => {
        homePage
            .visit()
            .header.clickOnAboutUsButton();
        homePage.aboutUsModal
            .checkTextInModalHeader('About us')
            .checkThatAboutUsVideoVisible()
            .checkHeaderCloseButton()
            .checkFooterCloseButton('Close');
    });
});