import HomePage from '../src/pages/HomePage';

describe('Carousel tests', () => {
    it('Check that the carousel works consistently.', () => {
        const homePage: HomePage = new HomePage();

        homePage
            .visit()
            .carousel.clickCarouselNextButton()
            .clickCarouselPreviousButton()
            .doubleClickCarouselNextButton()
            .checkActiveItem()
            .clickCarouselNextButton()
            .checkActiveItem();
    });
});