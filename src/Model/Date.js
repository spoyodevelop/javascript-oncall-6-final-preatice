class Date {
  #month;

  #day;

  #isHoliday;

  #dayOfWeek;

  constructor(month, day, dayOfWeek, isHoliday) {
    this.#month = month;
    this.#day = day;
    this.#dayOfWeek = dayOfWeek;
    this.#isHoliday = isHoliday;
  }

  toString() {
    let displayHoliday = '';
    if (this.#isHoliday) displayHoliday = '(휴일)';
    return `${this.#month}월 ${this.#day}일 ${this.#dayOfWeek}${displayHoliday}`;
  }
}
export default Date;
