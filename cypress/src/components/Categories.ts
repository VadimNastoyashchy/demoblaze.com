import BaseCategories from '../base/BaseCategories';
import LaptopsItems from './categories/Laptops';
import MonitorsItems from './categories/Monitors';
import PhoneItems from './categories/Phone';

export default class Categories extends BaseCategories {
    public phoneItems: PhoneItems = new PhoneItems();
    public laptopsItems: LaptopsItems = new LaptopsItems();
    public monitorsItems: MonitorsItems = new MonitorsItems();
    private listCategoriesContainer: string = '.list-group';

    constructor() {
        super('.container');
    }

    private get categoryButton(): Cypress.Chainable {
        return cy.get(`${this.listCategoriesContainer} [id="itemc"]`);
    }

    public clickOnPhonesCategoryButton(): PhoneItems {
        this.categoryButton
            .should('be.visible')
            .contains('Phones')
            .click();
        return new PhoneItems();
    }

    public clickOnLaptopsCategoryButton(): LaptopsItems {
        this.categoryButton
            .should('be.visible')
            .contains('Laptops')
            .click();
        return new LaptopsItems();
    }

    public clickOnMonitorsCategoryButton(): MonitorsItems {
        this.categoryButton.
            should('be.visible')
            .contains('Monitors')
            .click();
        return new MonitorsItems();
    }
}