import { combineReducers } from 'redux'


const hutsReducer = (huts=null, action) => {
  if (action.type === 'SET_HUTS') {
    return action.payload
  }
  return huts
}

const regionsReducer = (regions=null, action) => {
  if (action.type === 'SET_REGIONS') {
    return action.payload
  }
  return regions
}

const hutsToRegionsReducer = (hutsToRegions=null, action) => {
  if (action.type === 'SET_HUTS_TO_REGIONS') {
    return action.payload
  }
  return hutsToRegions
}

const selectRegionReducer = (selectedRegion=null, action) => {
  if (action.type === 'SELECT_REGION') {
    return action.payload
  }
  return selectedRegion
}

const selectHutReducer = (selectedHut=null, action) => {
  if (action.type === 'SELECT_HUT') {
    return action.payload
  }
  return selectedHut
}

export default combineReducers({
  huts: hutsReducer,
  regions: regionsReducer,
  hutsToRegions: hutsToRegionsReducer,
  selectedRegion: selectRegionReducer,
  selectedHut: selectHutReducer,
})