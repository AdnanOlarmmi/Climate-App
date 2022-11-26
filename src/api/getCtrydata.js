const apiKey = '985888d5c6e9bbd16d041ff9e17d1220';

const getCtrydata = async (lat, lon) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

export default getCtrydata;