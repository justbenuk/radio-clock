'use server'

export async function getWeather(): Promise<any> {

  const headers: HeadersInit = {
    'X-RapidAPI-Key': process.env.API_KEY as string,
    'X-RapidAPI-Host': process.env.API_HOST as string,

  }
  const url = 'https://weather-app315.p.rapidapi.com/current.json?q=Tamworth';
  const options: RequestInit = {
    method: 'GET',
    headers,
  };

  try {
    const response = await fetch(url, options);
    return response.json()
  } catch (error) {
    throw (error)
  }
}
