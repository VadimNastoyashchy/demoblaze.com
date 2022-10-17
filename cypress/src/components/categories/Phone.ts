export default class PhoneItems {
    private productListItemsContainer: string = '#tbodyid';

    private get productItem(): Cypress.Chainable {
        return cy.get(`${this.productListItemsContainer} [class^="col-lg-4"]`);
    }

    public checkFirstProductPhoneItem(): this {
        this.productItem.first()
        .should('be.visible');
        return this;
    }
}