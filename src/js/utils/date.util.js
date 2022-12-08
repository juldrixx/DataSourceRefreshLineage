function convertStrDatetoDate(date) {
  const dateParts = date.split('/');
  return new Date(+dateParts[0], dateParts[1] - 1, +dateParts[2]);
}

function compareStrDate(date1, date2) {
  return convertStrDatetoDate(date1) > convertStrDatetoDate(date2);
}

function formatDate(d, separator = '') {
  const date = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  return `${String(year).padStart(4, '0')}${separator}${String(month).padStart(
    2,
    '0'
  )}${separator}${String(date).padStart(2, '0')}`;
}

function formatFullDate(d, separator = '') {
  const hour = d.getHours();
  const minute = d.getMinutes();
  const second = d.getSeconds();

  return `${formatDate(d, separator)}_${String(hour).padStart(
    2,
    '0'
  )}${separator}${String(minute).padStart(2, '0')}${separator}${String(
    second
  ).padStart(2, '0')}`;
}

function getCurrentDate(separator = '') {
  return formatFullDate(new Date(), separator);
}

export default {
  convertStrDatetoDate,
  compareStrDate,
  formatDate,
  formatFullDate,
  getCurrentDate,
};
