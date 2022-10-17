export default abstract class BaseCategories {

    protected readonly CATEGORIES_CONTAINER: string = '#tbodyid';

    public get productsItem(): Cypress.Chainable {
        return cy.get(`${this.CATEGORIES_CONTAINER} > div`);
    }

    public checkFirstProductItemIsVisible(): this {
        this.productsItem.first()
            .should('be.visible');
        return this;
    }
}