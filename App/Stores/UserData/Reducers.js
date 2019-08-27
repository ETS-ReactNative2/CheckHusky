import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { UserActionTypes } from './Actions'

export const userLogin = (state,action) => {
    console.log("userLogin reducer",action)
    return ({
  ...state,
  userData: {},
  userErrorMessage: null,
})}

export const userLoginSuccess = (state,action) => {
  console.log("userLogin success saga" , action)
  return ({
    ...state,
    userData: action.userData,
    userErrorMessage: null,
  })
}

export const userLoginFailure = (state, { errorMessage }) => ({
  ...state,
  userData: {},
  userErrorMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [UserActionTypes.USER_LOGIN]: userLogin,
  [UserActionTypes.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [UserActionTypes.USER_LOGIN_FAILURE]: userLoginFailure,
})
