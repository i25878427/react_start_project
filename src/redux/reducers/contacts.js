import { handleActions } from 'redux-actions'
import ACTIONS from '../constants/contacts'

const defaultState = {
  contacts: {}
}

export default handleActions({
  [ACTIONS.GET_CONTACTS]: (state, { payload }) => {
    debugger
    return { ...state }
  }
}, defaultState)
