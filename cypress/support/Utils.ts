import { CredentialsInterface } from '../plugins/interfaces';
import { Accounts } from '../plugins/Enums';

export default class Utils {

    public static getCredentials(account: Accounts): CredentialsInterface {
        return Cypress.env('accounts')[account] || { email: null, password: null };
    }
}