'use server'
export async function getWeather() {

  const url = 'https://weather-app315.p.rapidapi.com/current.json?q=Tamworth';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': process.env.API_HOST,
    }
  };

  try {
    const response = await fetch(url, options as {});
    return response.json()
  } catch (error) {
    console.log('<p>Sorry There was an error</p>')
  }
}
