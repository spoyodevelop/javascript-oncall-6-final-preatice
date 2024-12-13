import { resolvePlugin } from '@babel/core';
import InputView from './View/InputView.js';
import Calendar from './Calendar.js';
import OutputView from './View/OutputView.js';

class App {
  async run() {
    // const input = await InputView.getMouthAndDay();
    const { monthAndDay, normalCrews, holidayCrews } =
      await InputView.getInputs();

    // const normalCrews =
    //   '준팍,도밥,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리'.split(',');

    // const holidayCrews =
    //   '수아,루루,글로,솔로스타,우코,슬링키,참새,도리,준팍,도밥,고니'.split(',');
    function rotateCrew(crews) {
      const pickedOne = crews.shift();
      crews.push(pickedOne);
      return pickedOne;
    }
    function checkAvaliablity(onCall, pickedOne) {
      return onCall[onCall.length - 1] === pickedOne;
    }

    const { month, day } = monthAndDay;

    const cal = new Calendar(month, day).calendar;

    const onCall = [];
    let reserved = '';
    cal.forEach((date) => {
      if (reserved !== '') {
        onCall.push(reserved);
        reserved = '';
      } else if (
        date.dayOfWeek !== '토' &&
        date.dayOfWeek !== '일' &&
        !date.isHoliday
      ) {
        const pickedOne = rotateCrew(normalCrews);
        if (checkAvaliablity(onCall, pickedOne)) {
          reserved = pickedOne;
          const pickedAgainOne = rotateCrew(normalCrews);
          onCall.push(pickedAgainOne);
        } else onCall.push(pickedOne);
      } else {
        const pickedOne = rotateCrew(holidayCrews);

        if (checkAvaliablity(onCall, pickedOne)) {
          reserved = pickedOne;
          const pickedAgainOne = rotateCrew(holidayCrews);
          onCall.push(pickedAgainOne);
        } else onCall.push(pickedOne);
      }
    });
    OutputView.printOnCall(cal, onCall);
  }
}

export default App;
