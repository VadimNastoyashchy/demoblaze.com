import BaseCategories from '../../base/BaseCategories';

export default class Phone extends BaseCategories {

    public checkFirstProductPhoneItem(): this {
        this.productItem.first()
        .should('be.visible');
        return this;
    }
}