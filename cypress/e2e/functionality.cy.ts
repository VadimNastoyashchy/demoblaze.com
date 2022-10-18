import HomePage from '../src/pages/HomePage';

describe('Functionality tests', () => {
    it('Check that the product exists in the Phone category', () => {
        const homePage: HomePage = new HomePage();

        homePage
            .visit()
            .categories.clickOnPhonesCategoryButton()
            .checkFirstProductItemIsVisible();
    });
    it('Check that the product exists in the Laptops category', () => {
        const homePage: HomePage = new HomePage();

        homePage
            .visit()
            .categories.clickOnLaptopsCategoryButton()
            .checkFirstProductItemIsVisible();
    });
    it('Check that the product exists in the Monitors category', () => {
        const homePage: HomePage = new HomePage();

        homePage
            .visit()
            .categories.clickOnMonitorsCategoryButton()
            .checkFirstProductItemIsVisible();
    });
    it.only('Check that the carousel works consistently.', () => {
        const homePage: HomePage = new HomePage();

        homePage
            .visit()
            .carousel.clickCarouselNextButton()
            .checkActiveItem('Second slide')
            .clickCarouselPreviousButton()
            .checkActiveItem('First slide')
            .clickCarouselNextButton()
            .checkActiveItem('Second slide')
            .clickCarouselNextButton()
            .checkActiveItem('Third slide')
            .clickCarouselNextButton()
            .checkActiveItem('First slide');
    });
});