import { createStore } from 'redux';

const initialState = {
  selectedRegion: '',
  regionInfo: null,
  nightMode: false, // Bonus feature for night mode
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REGION':
      return { ...state, selectedRegion: action.payload };
    case 'SET_REGION_INFO':
      return { ...state, regionInfo: action.payload };
    case 'TOGGLE_NIGHT_MODE':
      return { ...state, nightMode: !state.nightMode };
    default:
      return state;
  }
};

export const store = createStore(rootReducer);
