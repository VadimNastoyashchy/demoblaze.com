import BaseCategories from '../../base/BaseCategories';

export default class Laptops extends BaseCategories {

    public checkFirstProductLaptopItem(): this {
        this.productItem.first()
        .should('be.visible');
        return this;
    }
}