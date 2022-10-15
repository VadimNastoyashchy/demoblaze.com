export default abstract class BaseModal {

    protected readonly MODAL_CONTAINER: string;

    constructor(modalContainer: string = '') {
        this.MODAL_CONTAINER = modalContainer;
    }

}