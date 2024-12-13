import InputView from './View/InputView.js';
import Calendar from './Calendar.js';

class App {
  async run() {
    // const input = await InputView.getMouthAndDay();
    // const { monthAndDay, normalCrews, holidayCrews } =
    //   await InputView.getInputs();

    const normalCrews =
      '준팍,도밥,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리'.split(',');

    const holidayCrews =
      '수아,루루,글로,솔로스타,우코,슬링키,참새,도리,준팍,도밥,고니'.split(',');
    function rotateCrew(crews) {
      const pickedOne = crews.shift();
      crews.push(pickedOne);
      return { pickedOne, crews };
    }

    const cal = new Calendar(5, '월').calendar;
    const onCall = [];
    cal.forEach(({ month, day, dayOfWeek, isHoliday }) => {
      // if (onCall. || )
    });
  }
}

export default App;
