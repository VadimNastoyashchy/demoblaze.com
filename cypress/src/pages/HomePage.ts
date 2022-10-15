import Header from '../components/Header';
import LogInWindow from '../modals/LogInModal';
import BasePage from '../base/BasePage';

export default class HomePage extends BasePage {

  public header: Header = new Header();
  public logInWindow: LogInWindow = new LogInWindow();

  constructor() {
    super('index.html');
  }
}