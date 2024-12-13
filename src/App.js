import InputView from './View/InputView.js';
import Calendar from './Calendar.js';

class App {
  async run() {
    // const input = await InputView.getMouthAndDay();
    // const { monthAndDay, normalCrews, holidayCrews } =
    //   await InputView.getInputs();

    const cal = new Calendar(5, '월').calendar;
    cal.forEach((day) => console.log(day.toString()));
  }
}

export default App;
