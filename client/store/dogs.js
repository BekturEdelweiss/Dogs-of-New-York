import axios from 'axios'

//Action type
const GET_DOGS = 'GET_DOGS'
const GET_SINGLE_DOG = 'GET_SINGLE_DOG'

//Initial state
const defaultDogs = []

//Actin creator
const getDogs = dogs => ({type: GET_DOGS, dogs})
const getDog = dog => ({type: GET_SINGLE_DOG, dog})

//THUNK CREATORS

export const fetchAllDogs = zipCode => async dispatch => {
  const config = {
    method: 'GET',
    body: JSON.stringify({
      $limit: 5000
      // app_token: 'pIBlRdatT2tBGvefMsQqjlywQ',
    }),
    headers: {
      'Content-type': 'application/json'
    }
  }

  try {
    const res = await axios.get(
      `https://data.cityofnewyork.us/resource/6xmv-7qbx.json?$limit=5000&zipcode=${zipCode}`,
      config
    )
    dispatch(getDogs(res.data || defaultDogs))
  } catch (err) {
    console.error(err)
  }
}

export const fetchDog = rowNumber => async dispatch => {
  const config = {
    method: 'GET',
    body: JSON.stringify({
      $limit: 5000
      // app_token: 'pIBlRdatT2tBGvefMsQqjlywQ',
    }),
    headers: {
      'Content-type': 'application/json'
    }
  }

  try {
    const res = await axios.get(
      `https://data.cityofnewyork.us/resource/6xmv-7qbx.json?$limit=5000&rownumber=${rowNumber}`,
      config
    )
    dispatch(getDog(res.data || defaultDogs))
  } catch (err) {
    console.error(err)
  }
}

//Reducer

export default function(state = defaultDogs, action) {
  switch (action.type) {
    case GET_DOGS:
      return [action.dogs]
    case GET_SINGLE_DOG:
      return [action.dog]
    default:
      return state
  }
}
