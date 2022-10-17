export default class MonitorsItems {
    private productListItemsContainer: string = '#tbodyid';

    private get productItem(): Cypress.Chainable {
        return cy.get(`${this.productListItemsContainer} [class="col-lg-4 col-md-6 mb-4"]`);
    }

    public checkFirstProductMonitorItem(): this {
        this.productItem.first().should('be.visible');
        return this;
    }
}