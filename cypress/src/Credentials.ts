import { Accounts } from './Accounts';
import { ICredentials } from './ICredentials';

export default class Credentials {

    public static getCredentials(account: Accounts): ICredentials {
        return Cypress.env('accounts')[account] || { name: null, password: null };
    }
}