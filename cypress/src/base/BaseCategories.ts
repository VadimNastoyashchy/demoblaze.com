export default abstract class BaseCategories {

    protected readonly CATEGORIES_CONTAINER: string;

    constructor(categoriesContainer: string = '') {
        this.CATEGORIES_CONTAINER = categoriesContainer;
    }
}