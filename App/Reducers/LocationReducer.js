import * as CONST from '../Utils/Constants';

const initialState = {
  location: null,
};

// This reducer stores the status of email verification.
export default function(state = initialState, action) {
  switch (action.type) {
    case CONST.GET_LOCATION:
      return {
        ...state,
        location: null,
      };
    default:
      return state;
  }
}
