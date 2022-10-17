import LaptopsItems from './LaptopsItems';
import MonitorsItems from './MonitorsItems';
import PhoneItems from './PhoneItems';

export default class Categories {
    private listCategoriesContainer: string = '.list-group';

    private get phonesCategoryButton(): Cypress.Chainable {
        return cy.get(`${this.listCategoriesContainer} [id="itemc"]`);
    }

    private get laptopsCategoryButton(): Cypress.Chainable {
        return cy.get(`${this.listCategoriesContainer} [id="itemc"]`);
    }

    private get monitorsCategoryButton(): Cypress.Chainable {
        return cy.get(`${this.listCategoriesContainer} [id="itemc"]`);
    }

    public clickOnPhonesCategoryButton(): PhoneItems {
        this.phonesCategoryButton.should('be.visible').contains('Phones').click({ force: true });
        return new PhoneItems();
    }

    public clickOnLaptopsCategoryButton(): LaptopsItems {
        this.laptopsCategoryButton.should('be.visible').contains('Laptops').click({ force: true });
        return new LaptopsItems();
    }

    public clickOnMonitorsCategoryButton(): MonitorsItems {
        this.monitorsCategoryButton.should('be.visible').contains('Monitors').click({ force: true });
        return new MonitorsItems();
    }
}