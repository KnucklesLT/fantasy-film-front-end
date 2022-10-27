import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/movies`



export async function search(movieSearch) {
  const res = await fetch(`${BASE_URL}/search`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movieSearch)
  })
  return res.json()
}

export async function credits(movieId) {
  try {
    const res = await fetch(`${BASE_URL}/credits/${movieId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      }
    })
    return res.json()
    
  } catch (error) {
    console.log(error);
  }
  
}

export async function create(movieData) {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movieData)
    })
    return res.json()
    
  } catch (error) {
    console.log(error);
  }
}

export async function favorite(movieData) {
  try {
    const res = await fetch(`${BASE_URL}/favorite`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movieData)
    })
    return res.json()    
  } catch (error) {
    console.log(error)
  }
}

export async function index () {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export async function show (id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { "Authorization": `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export async function deleteFav(movieData) {
  try {
    const res = await fetch(`${BASE_URL}/favorite`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movieData)
    })
    return res.json()
    
  } catch (error) {
    console.log(error);
  }
}