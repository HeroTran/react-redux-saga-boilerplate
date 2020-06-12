import moment from 'moment';
import {
  DAY_FORMAT,
  TIME_FORMAT,
  LOCAL_STORAGE_KEY,
} from '../functionals/Common/constants';
import { getLocalStore } from './localStoreHelper';

export const startTimeHistoryQueryWithUTC = () => {
  const dateTime = moment(new Date())
    .subtract(1, TIME_FORMAT.YEAR)
    .format(DAY_FORMAT.DATE_TIME_BACK_END_FORMAT)
    .toString();
  return toUtc(dateTime);
};

export const endTimeHistoryQueryWithUTC = () => {
  const dateTime = moment(new Date())
    .subtract(40, TIME_FORMAT.MINUSTES)
    .format(DAY_FORMAT.DATE_TIME_BACK_END_FORMAT)
    .toString();
  return toUtc(dateTime);
};

export const startTimeUpcomingQueryWithUTC = () => {
  const dateTime = moment(new Date())
    .subtract(40, TIME_FORMAT.MINUSTES)
    .format(DAY_FORMAT.DATE_TIME_BACK_END_FORMAT)
    .toString();
  return toUtc(dateTime);
};

export const endTimeUpcomingQueryWithUTC = () => {
  const dateTime = moment(new Date())
    .add(1, TIME_FORMAT.MONTH)
    .format(DAY_FORMAT.DATE_TIME_BACK_END_FORMAT)
    .toString();
  return toUtc(dateTime);
};

export const startTimeQueryWithUTC = () => {
  const dateTime = moment(new Date())
    .format(DAY_FORMAT.DATE_TIME_BACK_END_FORMAT)
    .toString();
  return toUtc(dateTime);
};

export const endTimeQueryWithUTC = () => {
  const dateTime = moment(new Date())
    .add(1, TIME_FORMAT.MONTH)
    .format(DAY_FORMAT.DATE_TIME_BACK_END_FORMAT)
    .toString();
  return toUtc(dateTime);
};

export const getStartTimeByDateWithUTC = (date) => {
  const dateTime = getStartTimeByDate(date);
  return toUtc(dateTime);
};

export const getEndTimeByDateWithUTC = (date) => {
  const dateTime = getEndTimeByDate(date);
  return toUtc(dateTime);
};

export const toUserTime = (dateTime) => {
  const timezoneOffset = getTimezoneOffset();
  const offset = timezoneOffset / TIME_FORMAT.ONE_HOUR;
  return moment
    .utc(dateTime)
    .utcOffset(offset)
    .format(DAY_FORMAT.DATE_TIME_BACK_END_FORMAT);
};

export const toUtc = (dateTime) => {
  const timezoneOffset = getTimezoneOffset();
  const offset = timezoneOffset / (-1 * TIME_FORMAT.ONE_HOUR);
  return moment
    .utc(dateTime)
    .utcOffset(offset)
    .format(DAY_FORMAT.DATE_TIME_BACK_END_FORMAT);
};

export const getStartTimeByDate = (date) => {
  return moment(date).format(DAY_FORMAT.BACK_END_START_TIME_FORMAT).toString();
};

export const getEndTimeByDate = (date) => {
  return moment(date).format(DAY_FORMAT.BACK_END_END_TIME_FORMAT).toString();
};

export const getTimezoneOffset = () => {
  const currentTimezone = getLocalStore(LOCAL_STORAGE_KEY.USER_TIMEZONE);
  return currentTimezone ? currentTimezone.gmtOffset : 0;
};

export const formatTimeWithOnlyYear = (year) => {
  return year
    ? moment(year, DAY_FORMAT.FORMAT_YEAR_VIEW).year().toString()
    : '';
};

export const formatTimeWithYearAndMonthDefault = (year) => {
  return year
    ? `${moment(year, DAY_FORMAT.FORMAT_YEAR_VIEW).year().toString()}-01`
    : '';
};
