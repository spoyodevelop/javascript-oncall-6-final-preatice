import InputView from './View/InputView.js';

class App {
  async run() {
    const input = await InputView.getMouthAndDay();
  }
}

export default App;
