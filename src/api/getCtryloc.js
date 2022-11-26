const apiKey = '985888d5c6e9bbd16d041ff9e17d1220';

const getCtryloc = async (ctry) => {
    try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${ctry}&limit=1&appid=${apiKey}`)
        const data = await response.json();
        const ctryInfo = {ctryname: data[0].name, lat: data[0].lat, lon: data[0].lon}
        return(ctryInfo);
    }
    catch (error) {
        console.log(error);
    }
}

export default getCtryloc;