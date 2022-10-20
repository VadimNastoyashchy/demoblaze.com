import HomePage from '../src/pages/HomePage';
import ProductPage from '../src/pages/ProductPage';

describe('Order test', () => {
    it('Check the addition of the first mobile product to the basket', () => {
        const homePage: HomePage = new HomePage();
        const productPage: ProductPage = new ProductPage();
        const firstMobileTitleProductItem: string = 'Samsung galaxy s6';

        homePage
            .visit()
            .categories.clickOnPhonesCategoryButton()
            .checkFirstTitleProductAndClickHim(firstMobileTitleProductItem);
        productPage.checkProductName(firstMobileTitleProductItem)
            .clickAddToCardButton()
            .checkAlertWindow()
            .header.clickOnCartButton()
            .checkThatProductVisibleInCart()
            .checkFirstProductThatAddedInCard(firstMobileTitleProductItem);

    });
});