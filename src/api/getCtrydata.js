const apiKey = 'a8870bf261328c65e2847c911d4ecba5';

const getCtrydata = async (lat, lon) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default getCtrydata;
