import ProductPage from '../pages/ProductPage';
export default abstract class BaseCategories {

    protected readonly CATEGORIES_CONTAINER: string = '#tbodyid';

    public get productsItem(): Cypress.Chainable {
        return cy.get(`${this.CATEGORIES_CONTAINER} > div`);
    }
    public get titleProductsItem(): Cypress.Chainable {
        return cy.get(`${this.CATEGORIES_CONTAINER}  .card-title`);
    }

    public checkFirstProductItemIsVisible(): this {
        this.productsItem.first()
            .should('be.visible');
        return this;
    }

    public checkFirstTitleProductAndClickHim(titleProduct: string): ProductPage {
        this.titleProductsItem.first().contains(titleProduct).click();
        return new ProductPage();
    }
}