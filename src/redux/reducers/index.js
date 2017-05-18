import { combineReducers } from 'redux'
import app from './app'
import contacts from './contacts'

const rootReducer = combineReducers({
  app,
  contacts
})

export default rootReducer
