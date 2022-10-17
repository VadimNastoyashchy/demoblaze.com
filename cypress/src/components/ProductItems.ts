import PhoneItems from '../components/PhoneItems';
import LaptopsItems from '../components/LaptopsItems';
import MonitorsItems from '../components/MonitorsItems';

export default class ProductItems {
    public phoneItems: PhoneItems = new PhoneItems();
    public laptopsItems: LaptopsItems = new LaptopsItems();
    public monitorsItems: MonitorsItems = new MonitorsItems();
}