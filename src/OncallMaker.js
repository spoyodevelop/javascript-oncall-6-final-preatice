class OncallMaker {
  #onCall;

  constructor(calender, normalCrews, holidayCrews) {
    const onCall = [];
    let reserved = '';
    calender.forEach((date) => {
      if (reserved !== '') {
        onCall.push(reserved);
        reserved = '';
      } else if (
        date.dayOfWeek !== '토' &&
        date.dayOfWeek !== '일' &&
        !date.isHoliday
      ) {
        this.checkAndChoosePickOne(normalCrews, onCall, reserved);
      } else {
        this.checkAndChoosePickOne(holidayCrews, onCall, reserved);
      }
    });
    this.#onCall = onCall;
  }

  get onCall() {
    return this.#onCall;
  }

  checkAndChoosePickOne(crews, onCall, reserved) {
    const pickedOne = this.rotateCrew(crews);
    if (this.checkAvaliablity(onCall, pickedOne)) {
      reserved = pickedOne;
      const pickedAgainOne = this.rotateCrew(crews);
      onCall.push(pickedAgainOne);
    } else onCall.push(pickedOne);
  }

  rotateCrew(crews) {
    const pickedOne = crews.shift();
    crews.push(pickedOne);
    return pickedOne;
  }

  checkAvaliablity(onCall, pickedOne) {
    return onCall[onCall.length - 1] === pickedOne;
  }
}

export default OncallMaker;
