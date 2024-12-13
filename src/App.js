import InputView from './View/InputView.js';
import Calendar from './Calendar.js';
import OutputView from './View/OutputView.js';
import OncallMaker from './OncallMaker.js';

class App {
  async run() {
    // const input = await InputView.getMouthAndDay();
    const { monthAndDay, normalCrews, holidayCrews } =
      await InputView.getInputs();

    const { month, day } = monthAndDay;

    const { calendar } = new Calendar(month, day);
    const { onCall } = new OncallMaker(calendar, normalCrews, holidayCrews);

    OutputView.printOnCall(calendar, onCall);
  }
}

export default App;
