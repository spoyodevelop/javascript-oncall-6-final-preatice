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
        const pickedOne = this.rotateCrew(normalCrews);
        if (this.checkAvaliablity(onCall, pickedOne)) {
          reserved = pickedOne;
          const pickedAgainOne = this.rotateCrew(normalCrews);
          onCall.push(pickedAgainOne);
        } else onCall.push(pickedOne);
      } else {
        const pickedOne = this.rotateCrew(holidayCrews);

        if (this.checkAvaliablity(onCall, pickedOne)) {
          reserved = pickedOne;
          const pickedAgainOne = this.rotateCrew(holidayCrews);
          onCall.push(pickedAgainOne);
        } else onCall.push(pickedOne);
      }
    });
    this.#onCall = onCall;
  }

  get onCall() {
    return this.#onCall;
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
