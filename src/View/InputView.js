import { Console } from '@woowacourse/mission-utils';
import validateMonthAndDay from '../Validation/validateMonthAndDay.js';

const InputView = {
  async getMouthAndDay() {
    const input = await Console.readLineAsync(
      '비상 근무를 배정할 월과 시작 요일을 입력하세요>',
    );
    const monthAndDay = validateMonthAndDay(input);
    return monthAndDay;
  },
};

export default InputView;
