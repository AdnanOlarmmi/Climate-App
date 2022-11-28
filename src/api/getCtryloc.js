const apiKey = 'acf20f12442cb632e07595b34819bf86';

const getCtryloc = async (ctry) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${ctry}&limit=1&appid=${apiKey}`);
    const data = await response.json();
    const ctryInfo = { ctryname: data[0].name, lat: data[0].lat, lon: data[0].lon };
    return (ctryInfo);
  } catch (error) {
    return error;
  }
};

export default getCtryloc;
