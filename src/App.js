import InputView from './View/InputView.js';

class App {
  async run() {
    // const input = await InputView.getMouthAndDay();
    const input = await InputView.getHoliDayCrews();
    console.log(input);
  }
}

export default App;
