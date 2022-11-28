export function getCtryAirData(id, data) {
  const ctryObj = data.filter((ctryData) => ctryData.id === id);
  const compsValues = Object.values(ctryObj[0].data.components);
  const airComps = [
    { name: 'co', value: null },
    { name: 'no', value: null },
    { name: 'no2', value: null },
    { name: 'o3', value: null },
    { name: 'so2', value: null },
    { name: 'pm2_5', value: null },
    { name: 'pm10', value: null },
    { name: 'nh3', value: null },
  ];
  for (let i = 0; i < compsValues.length; i += 1) {
    airComps[i].value = compsValues[i];
  }
  return airComps;
}

export function getCtryName(id, data) {
  const ctryObj = data.filter((ctryData) => ctryData.id === id);
  const ctryName = ctryObj[0].ctry;
  return ctryName;
}
