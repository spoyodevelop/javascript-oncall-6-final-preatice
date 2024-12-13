import Date from './Model/Date.js';

const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ['월', '화', '수', '목', '금', '토', '일'];

const holidays = [
  { month: 1, day: 1 },
  { month: 3, day: 1 },
  { month: 5, day: 5 },
  { month: 6, day: 6 },
  { month: 8, day: 15 },
  { month: 10, day: 3 },
  { month: 10, day: 9 },
  { month: 12, day: 25 },
];

class Calendar {
  #Calendar;

  constructor(month, dayOfWeek) {
    const monthDayInMonth = monthDays[month - 1];
    let startingDayIndex = days.indexOf(dayOfWeek);
    const calendar = [];
    for (let day = 1; day < monthDayInMonth + 1; day++) {
      const parsedDayOfWeek = days[startingDayIndex % 7];
      const isHoilday = this.isHoliday(holidays, month, day);
      startingDayIndex++;
      calendar.push(new Date(month, day, parsedDayOfWeek, isHoilday));
    }
    this.#Calendar = calendar;
  }

  get calendar() {
    return this.#Calendar;
  }

  isHoliday(holidays, inputMonth, inputDay) {
    return holidays.some(({ month, day }) => {
      if (inputMonth === month && inputDay === day) return true;
    });
  }

  getDayOfWeek(dayOfWeek) {}
}
export default Calendar;
