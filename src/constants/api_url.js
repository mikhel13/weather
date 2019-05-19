
const location = "Buenos Aires,ar"
const api_key = "869b91cbed9e754e0e242f48342fcd0a"
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather"

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`; //&units=metric
