import HomePage from '../page-object/pages/HomePage';

const homePage = new HomePage();
const user = Cypress.env('accounts')['user'];
const SarahConnor = Cypress.env('accounts')['user']['userName'];

describe('Login and Logout test', () => {
    it('Login and Logout user in page', () => {
        homePage
        .visit()
        .checkPageUrl()
            .header.clickOnLogInButton();
        homePage.logInModaleWindow
            .logInWithCredentials(user)
            .checkPageUrl()
            .header.checkThatUserLoggedInSite(SarahConnor)
            .clickOnLogOutButton();
        homePage.checkPageUrl()
            .header.checkLogInButton();
    });
});