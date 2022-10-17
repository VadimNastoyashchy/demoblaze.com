import Laptops from './categories/Laptops';
import Monitors from './categories/Monitors';
import Phone from './categories/Phone';

export default class Categories {

    private listCategoriesContainer: string = '.list-group';

    private get categoryButton(): Cypress.Chainable {
        return cy.get(`${this.listCategoriesContainer} [id="itemc"]`);
    }

    public clickOnPhonesCategoryButton(): Phone {
        this.categoryButton
            .should('be.visible')
            .contains('Phones')
            .click();
        return new Phone();
    }

    public clickOnLaptopsCategoryButton(): Laptops {
        this.categoryButton
            .should('be.visible')
            .contains('Laptops')
            .click();
        return new Laptops();
    }

    public clickOnMonitorsCategoryButton(): Monitors {
        this.categoryButton.
            should('be.visible')
            .contains('Monitors')
            .click();
        return new Monitors();
    }
}