import {getCtryAirData, getCtryName} from './../helperfunc/helper'

describe('Unit Tests', () => {
  const storedCtryData = [
    {
      id: '98bfa187-74f4-4cef-b80f-d418acc580f9',
      ctry: 'Guinea',
      data: {
        main: { aqi: 1 },
        components: {
            co: 307.08,
            no: 0,
            no2: 1.78,
            o3: 11.09,
            so2: 0.13,
            pm2_5: 3.03,
            pm10: 4.35,
            nh3: 0.1,
        },
        dt: 1669283682,
      },
    },
  ];
  const id = '98bfa187-74f4-4cef-b80f-d418acc580f9';

  test('Testing getCityAirData()', () => {
    const result = getCtryAirData(id, storedCtryData);
    const expectedResult = [
      { name: 'co', value: 307.08 },
      { name: 'no', value: 0 },
      { name: 'no2', value: 1.78 },
      { name: 'o3', value: 11.09 },
      { name: 'so2', value: 0.13 },
      { name: 'pm2_5', value: 3.03 },
      { name: 'pm10', value: 4.35 },
      { name: 'nh3', value: 0.1 },
    ];
    expect(result).toEqual(expectedResult);
  });

  test('Testing getCityName()', () => {
    const result = getCtryName(id, storedCtryData);
    const expectedResult = 'Guinea';
    expect(result).toEqual(expectedResult);
  });
});