import HomePage from '../src/pages/HomePage';

describe('Navigation tests', () => {
    it('Checking that the product exists in the phone category', () => {
        const homePage: HomePage = new HomePage();

        homePage
            .visit()
            .checkPageUrl()
            .categories.clickOnPhonesCategoryButton()
            .checkFirstProductPhoneItem();
    });
    it('Checking that the product exists in the laptops category', () => {
        const homePage: HomePage = new HomePage();

        homePage
            .visit()
            .checkPageUrl()
            .categories.clickOnLaptopsCategoryButton()
            .checkFirstProductLaptopItem();
    });
    it('Checking that the product exists in the monitors category', () => {
        const homePage: HomePage = new HomePage();

        homePage
            .visit()
            .checkPageUrl()
            .categories.clickOnMonitorsCategoryButton()
            .checkFirstProductMonitorItem();
    });
});