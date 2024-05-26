'use server'
export async function getWeather() {

  const url = 'https://weather-app315.p.rapidapi.com/current.json?q=Tamworth';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY as string,
      'X-RapidAPI-Host': process.env.API_HOST as string,
    }
  };

  try {
    const response = await fetch(url, options, );
    return response.json()
  } catch (error) {
    return <p>Sorry! There was an error</p>
  }
}
