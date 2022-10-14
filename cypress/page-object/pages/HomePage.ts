import Header from '../components/Header';
import LogInModaleWindow from '../modales/LogInModaleWindow';
import BasePage from '../base/BagePage';

export default class InventoryPage extends BasePage {

  public header: Header = new Header();
  public logInModaleWindow: LogInModaleWindow = new LogInModaleWindow();

  constructor() {
    super('Home Page', 'index.html');
  }
}