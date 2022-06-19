import { TEST_FAILURE, TEST_INIT, TEST_SUCCESS } from '../../action/actionTypes/Auth/test'

export const testReducer = (state = {}, action) => {
  switch (action.type) {
    case TEST_INIT:
      return { inProcess: true }
    case TEST_SUCCESS:
      return { ...state, inProcess: false, success: true, msg: 'Sign In Successful!' }
    case TEST_FAILURE:
      return { ...state, inProcess: false, error: action.payload }
    default:
      return state
  }
}
