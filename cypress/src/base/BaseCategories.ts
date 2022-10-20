import ProductPage from '../pages/ProductPage';
export default abstract class BaseCategories {

    protected readonly CATEGORIES_CONTAINER: string = '#tbodyid';

    public get productsItem(): Cypress.Chainable {
        return cy.get(`${this.CATEGORIES_CONTAINER} > div`);
    }
    public get titleProductsItem(): Cypress.Chainable {
        return cy.get(`${this.CATEGORIES_CONTAINER} .hrefch`);
    }

    public checkFirstProductItemIsVisible(): this {
        this.productsItem.first()
            .should('be.visible');
        return this;
    }

    public clickOnFirstTitleProductItem(): ProductPage {
        this.titleProductsItem.eq(0).should('be.visible').click({force:true});
        return new ProductPage();
    }
}