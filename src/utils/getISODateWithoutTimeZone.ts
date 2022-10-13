/**
 *  Возвращает дату без временной зоны.
 *  @param {Date} date Дата.
 *  @returns {string} formatedDate Дата в формате YYYY-MM-DD (ISO 8601) (zero UTC offset).
 */
export default function getISODateWithoutTimeZone(date: Date): string {
  return (
    date.getUTCFullYear() +
    '-' +
    pad(date.getUTCMonth() + 1) +
    '-' +
    pad(date.getUTCDate())
  );
}

function pad(number: number) {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}
