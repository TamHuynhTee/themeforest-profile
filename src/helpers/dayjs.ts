import dayjs from 'dayjs';
import 'dayjs/locale/vi'; // import locale
import isLeapYear from 'dayjs/plugin/isLeapYear'; // import plugin

// dayjs.extend(isLeapYear); // use plugin
// dayjs.locale('vi'); // use locale

export const DATE_PICKER_FORMAT = 'YYYY-MM-DD';
export const SHOW_DATE_FORMAT = 'DD-MM-YYYY';

type DATE = string | number | dayjs.Dayjs | Date | null | undefined;

export class DateJS {
  static getDate(date?: DATE) {
    if (date) return dayjs(date);
    return dayjs();
  }

  static getMonth(date?: DATE) {
    return this.getDate(date).month() + 1;
  }
  static getYear(date?: DATE) {
    return this.getDate(date).year();
  }

  static getDateFromNow(date: string) {
    return dayjs().diff(dayjs(date), 'day');
  }

  static splitDayMonthYear(date: string) {
    const dateSplit = date.split('-');
    return {
      day: dateSplit[2],
      month: dateSplit[1],
      year: dateSplit[0],
    };
  }

  static getFormatDate(date?: DATE, format: string = DATE_PICKER_FORMAT) {
    if (date) return dayjs(date).format(format);
    return dayjs().format(format);
  }

  static getDateFromStartOfYear(date?: DATE) {
    return dayjs(date).startOf('year');
  }
  static getFormatDateFromStartOfYear(
    date?: DATE,
    format: string = DATE_PICKER_FORMAT
  ) {
    return dayjs(date).startOf('year').format(format);
  }

  static getDateFromStartOfMonth(date?: DATE) {
    return dayjs(date).startOf('month');
  }
  static getFormatDateFromStartOfMonth(
    date?: DATE,
    format: string = DATE_PICKER_FORMAT
  ) {
    return dayjs(date).startOf('month').format(format);
  }
  static isDayJS(date?: any) {
    return dayjs.isDayjs(date);
  }
  static isValid(date?: any) {
    return dayjs(date).isValid();
  }
}
