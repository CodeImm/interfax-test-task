import getISODateWithoutTimeZone from 'utils/getISODateWithoutTimeZone';

export default describe('utils', () => {
  test('convert date with zero UTC offset to YYYY-MM-DD', () => {
    expect(getISODateWithoutTimeZone(new Date('2011-01-26T19:14:43Z'))).toBe(
      '2011-01-26'
    );
  });
});
