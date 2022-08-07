/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import { DateTime } from './luxon.js';

export const displayDateTime = () => {
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  document.querySelector('.time').innerHTML = date;
};
