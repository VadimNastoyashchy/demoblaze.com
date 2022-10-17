import BaseCategories from '../../base/BaseCategories';

export default class Monitors extends BaseCategories {

    public checkFirstProductMonitorItem(): this {
        this.productItem.first()
        .should('be.visible');
        return this;
    }
}