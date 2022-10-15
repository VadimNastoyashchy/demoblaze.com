import HomePage from '../page-object/pages/HomePage';
import { Accounts } from '../plugins/Enums';
import Utils from '../support/Utils';

const homePage: HomePage = new HomePage();

describe('Login and Logout test', () => {
    it('Login and Logout first user in page', () => {
        const { userName, password } = Utils.getCredentials(Accounts.First);
        homePage
            .visit()
            .checkPageUrl()
            .header.clickOnLogInButton();
        homePage.logInWindow
            .logInWithCredentials(userName, password)
            .header.checkUserName(userName)
            .clickOnLogOutButton();
        homePage.checkPageUrl()
            .header.checkLogInButton();
    });
});