export default abstract class BaseCategories {

    protected readonly CATEGORIES_CONTAINER: string = '#tbodyid';

    constructor(categoriesContainer: string = '#tbodyid') {
        this.CATEGORIES_CONTAINER = categoriesContainer;
    }

    public get productItem(): Cypress.Chainable {
        return cy.get(`${this.CATEGORIES_CONTAINER} > div`);
    }
}