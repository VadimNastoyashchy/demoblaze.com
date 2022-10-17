import HomePage from '../src/pages/HomePage';

describe('Navigation tests', () => {
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
});