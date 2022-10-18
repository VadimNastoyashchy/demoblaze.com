export default class Carousel {
    private carouselLocator: string = '#contcar';

    private get carouselNextButton(): Cypress.Chainable {
        return cy.get(`${this.carouselLocator} [class="carousel-control-next"]`);
    }

    private get carouselPreviousButton(): Cypress.Chainable {
        return cy.get(`${this.carouselLocator} [class="carousel-control-prev"]`);
    }

    private get carouselActiveItem(): Cypress.Chainable {
        return cy.get(`${this.carouselLocator} [class="carousel-item active"]`);
    }

    public clickCarouselNextButton(): this {
        this.carouselNextButton.wait(1000).click();
        return this;
    }

    public clickCarouselPreviousButton(): this {
        this.carouselPreviousButton.wait(1000).click();
        return this;
    }

    public checkActiveItem(): this {
        this.carouselActiveItem.should('be.visible');
        return this;
    }

    public doubleClickCarouselNextButton(): this {
        this.carouselNextButton.wait(1000).click().wait(1000).click();
        return this;
    }
}