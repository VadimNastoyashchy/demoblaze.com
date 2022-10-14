import HomePage from '../page-object/pages/HomePage';

const homePage: HomePage = new HomePage();
const userName: string = Cypress.env('accounts')['user']['userName'];
const password: string = Cypress.env('accounts')['user']['password'];

describe('Login and Logout test', () => {
    it('Login and Logout user in page', () => {
        homePage
            .visit()
            .checkPageUrl()
            .header.clickOnLogInButton();
        homePage.logInWindow
            .logInWithCredentials(userName, password)
            .checkPageUrl()
            .header.welcomeUserName(userName)
            .clickOnLogOutButton();
        homePage.checkPageUrl()
            .header.checkLogInButton();
    });
});