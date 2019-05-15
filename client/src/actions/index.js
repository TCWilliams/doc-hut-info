import axios from 'axios'


export const loadAllHuts = () => async dispatch => {
  const { data } = await axios.post('api/all', {})
  dispatch({
    type: 'SET_HUTS',
    payload: data
  })
}

export const setRegions = regions => {
  return {
    type: 'SET_REGIONS',
    payload: regions
  }
}

export const setHutsToRegions = hutsToRegions => {
  for (const values of Object.values(hutsToRegions)) {
    values.sort(((a, b) => a.name.localeCompare(b.name)))
  }
  return {
    type: 'SET_HUTS_TO_REGIONS',
    payload: hutsToRegions
  }
}

export const selectRegion = region => {
  console.log('selectRegion', region)
  return {
    type: 'SELECT_REGION',
    payload: region
  }
}

export const selectHut = id => async dispatch => {
  console.log('selectHut', id)
  const { data } = await axios.post('api/detail', {
    id
  })
  console.log('select hut', data)
  dispatch({
    type: 'SELECT_HUT',
    payload: data
  })
}


