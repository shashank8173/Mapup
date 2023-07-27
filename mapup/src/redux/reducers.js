import { TOGGLE_NIGHT_MODE } from './action';

const initialState = {
  nightMode: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NIGHT_MODE:
      return {
        ...state,
        nightMode: !state.nightMode,
      };
    default:
      return state;
  }
};

export default rootReducer;
  