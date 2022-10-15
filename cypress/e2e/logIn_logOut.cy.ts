import HomePage from '../src/pages/HomePage';
import { Accounts } from '../src/Accounts';
import Credentials from '../src/Credentials';

describe('Login and Logout tests', () => {
    it('Login and Logout first user in page', () => {
        const homePage: HomePage = new HomePage();
        const { name, password } = Credentials.getCredentials(Accounts.Active);

        homePage
            .visit()
            .checkPageUrl()
            .header.clickOnLogInButton();

        homePage.logInWindow
            .logInWithCredentials(name, password)
            .header.checkUserName(name)
            .clickOnLogOutButton();

        homePage
            .checkPageUrl()
            .header.checkLogInButton();
    });
});