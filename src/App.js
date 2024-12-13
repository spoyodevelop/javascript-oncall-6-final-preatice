import InputView from './View/InputView.js';

class App {
  async run() {
    // const input = await InputView.getMouthAndDay();
    const { monthAndDay, normalCrews, holidayCrews } =
      await InputView.getInputs();
  }
}

export default App;
