import HomePage from '../src/pages/HomePage';

describe('Navigation tests', () => {
    it('Check that the product exists in the Phone category', () => {
        const homePage: HomePage = new HomePage();

        homePage
            .visit()
            .categories.clickOnPhonesCategoryButton()
            .checkFirstProductPhoneItem();
    });
    it('Check that the product exists in the Laptops category', () => {
        const homePage: HomePage = new HomePage();

        homePage
            .visit()
            .categories.clickOnLaptopsCategoryButton()
            .checkFirstProductLaptopItem();
    });
    it('Check that the product exists in the Monitors category', () => {
        const homePage: HomePage = new HomePage();

        homePage
            .visit()
            .categories.clickOnMonitorsCategoryButton()
            .checkFirstProductMonitorItem();
    });
});