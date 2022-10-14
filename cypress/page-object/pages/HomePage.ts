import Header from '../components/Header';
import LogInWindow from '../modales/LogInWindow';
import BasePage from '../base/BagePage';

export default class HomePage extends BasePage {

  public header: Header = new Header();
  public logInWindow: LogInWindow = new LogInWindow();

  constructor() {
    super('Home Page', 'index.html');
  }
}